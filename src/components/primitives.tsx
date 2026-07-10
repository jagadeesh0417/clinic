import type { LucideIcon } from "lucide-react";

export function Hairline({ className = "" }: { className?: string }) {
  return <hr className={`border-0 h-px bg-gold-600 ${className}`} />;
}

export function EyebrowRule({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 justify-center">
      <span className="block w-10 h-px bg-gold-600" />
      <span className="text-[13px] font-displayans uppercase tracking-[0.35em] text-gold-500">
        {text}
      </span>
      <span className="block w-10 h-px bg-gold-600" />
    </div>
  );
}

export function IconCircle({
  icon: Icon,
  className = "",
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={`w-16 h-16 rounded-full border border-gold-600 flex items-center justify-center ${className}`}
    >
      <Icon className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
    </div>
  );
}
