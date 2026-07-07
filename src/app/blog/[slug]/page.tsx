"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold text-white">Article Not Found</h1>
          <a href="/blog" className="mt-4 inline-block font-['Inter'] text-[#CBA135] underline">Back to Blog</a>
        </div>
      </div>
    );
  }

  const related = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back */}
        <motion.a
          href="/blog"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 font-['Inter'] text-sm text-white/40 hover:text-[#CBA135] transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Blog
        </motion.a>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="aspect-[21/9] rounded-2xl overflow-hidden bg-white/5 mb-10"
        >
          <img
            src={`https://picsum.photos/seed/${post.imageSeed}/1200/500`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-4"
        >
          <span className="px-3 py-1 rounded-full bg-[#CBA135]/20 text-[#CBA135] font-['Space_Grotesk'] text-[10px] font-semibold tracking-wider uppercase">
            {post.category}
          </span>
          <span className="text-white/30 font-['Inter'] text-sm">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-white/30 font-['Inter'] text-sm capitalize">{post.source}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8"
        >
          {post.title}
        </motion.h1>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-5"
        >
          {post.content.map((paragraph, i) => {
            const isHeading = /^[A-Z][^.]*?(\u2014|:)/.test(paragraph) && paragraph.length < 120;
            if (isHeading) {
              const [label, ...rest] = paragraph.split(/\u2014|:\s/);
              return (
                <motion.div key={i} variants={fadeUp} custom={i}>
                  <h2 className="font-['Space_Grotesk'] text-lg text-[#CBA135] mb-2">{label}</h2>
                  {rest.length > 0 && (
                    <p className="font-['Inter'] text-base text-white/60 leading-relaxed">{rest.join("\u2014 ").trim()}</p>
                  )}
                </motion.div>
              );
            }
            return (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={i}
                className="font-['Inter'] text-base text-white/60 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            );
          })}
        </motion.div>

        {/* Key Takeaways */}
        {post.takeaways && post.takeaways.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-6 md:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(203,161,53,0.08) 0%, rgba(203,161,53,0.02) 100%)",
              border: "1px solid rgba(203,161,53,0.15)",
            }}
          >
            <h2 className="font-['Space_Grotesk'] text-sm tracking-wider uppercase text-[#CBA135] mb-5">Key Takeaways</h2>
            <div className="space-y-3">
              {post.takeaways.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#CBA135] flex-shrink-0" />
                  <p className="font-['Inter'] text-sm text-white/70 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQ */}
        {post.faq && post.faq.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h2 className="font-['Playfair_Display'] text-2xl text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faq.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <h3 className="font-['Space_Grotesk'] text-sm font-semibold text-white mb-2">{item.q}</h3>
                  <p className="font-['Inter'] text-sm text-white/50 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(203,161,53,0.08) 0%, rgba(203,161,53,0.02) 100%)",
              border: "1px solid rgba(203,161,53,0.15)",
            }}
          >
            <h2 className="font-['Playfair_Display'] text-2xl text-white mb-3">Ready to Begin Your Journey?</h2>
            <p className="font-['Inter'] text-sm text-white/50 mb-6 max-w-lg mx-auto">
              Book a consultation with KO Clinics to discuss your personalised treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 rounded-full bg-[#CBA135] text-black font-['Space_Grotesk'] text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#d4a83a] hover:shadow-lg hover:shadow-[#CBA135]/25"
              >
                Book Consultation
              </a>
              <a
                href="/blog"
                className="px-8 py-3 rounded-full border border-white/10 text-white/70 font-['Space_Grotesk'] text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:border-[#CBA135]/40 hover:text-white"
              >
                More Articles
              </a>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="font-['Playfair_Display'] text-2xl text-white mb-6">
              Related <span className="text-[#CBA135]">Articles</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map(r => (
                <a
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl p-5 transition-all duration-500 hover:border-[#CBA135]/20"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-[10px] font-['Space_Grotesk'] tracking-wider uppercase text-[#CBA135]">{r.date}</span>
                  <h3 className="font-['Playfair_Display'] text-base text-white mt-1 group-hover:text-[#CBA135] transition-colors">
                    {r.title}
                  </h3>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
