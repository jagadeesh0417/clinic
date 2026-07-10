import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
}

export function useCountUp({ end, duration = 2500 }: UseCountUpOptions) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);

    if (el.getBoundingClientRect().top < window.innerHeight) {
      started.current = true;
      const id = setTimeout(animate, 100);
      return () => {
        clearTimeout(id);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();

    function animate() {
      const startTime = performance.now();
      let raf: number;

      function step(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * end));
        if (progress < 1) {
          raf = requestAnimationFrame(step);
        }
      }

      raf = requestAnimationFrame(step);
    }
  }, [end, duration]);

  return { ref, value };
}
