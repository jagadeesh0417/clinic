"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, blogCategories } from "@/data/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return blogPosts.filter(p => {
      const matchSearch = !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  const categories = ["All", ...blogCategories];

  return (
    <div className="min-h-screen bg-[#100D0A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A14A]/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#C9A14A] font-displayans text-sm tracking-[0.2em] uppercase mb-4"
          >
            Educational Content
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-displayisplay text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            Blog & <span className="text-[#C9A14A]">Library</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 font-displayans text-lg max-w-2xl mx-auto"
          >
            Expert insights, treatment guides, and comparative analyses from KO Clinics
          </motion.p>
        </div>
      </section>

      {/* Search & Filters */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
        >
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-displayans text-sm placeholder:text-white/30 focus:outline-none focus:border-[#C9A14A]/40 transition-all duration-300"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-displayans text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#C9A14A] text-black shadow-lg shadow-[#C9A14A]/20"
                    : "border border-white/10 bg-white/5 text-white/60 hover:border-[#C9A14A]/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center"
            >
              <p className="font-displayans text-white/40 text-lg">No articles found matching your criteria.</p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-6"
            >
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  variants={fadeUp}
                  custom={i}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#C9A14A]/20"
                  style={{
                    background: "rgba(246,241,232,0.03)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(246,241,232,0.06)",
                  }}
                >
                  <div className="aspect-[16/9] overflow-hidden bg-white/5 relative">
                    <img
                      src={`https://picsum.photos/seed/${post.imageSeed}/800/450`}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#C9A14A]/90 text-black text-[10px] font-displayans font-semibold tracking-wider uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-white/30 font-displayans text-xs">{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-white/30 font-displayans text-xs capitalize">{post.source}</span>
                    </div>
                    <h2 className="font-displayisplay text-xl text-white mb-2 line-clamp-2 group-hover:text-[#C9A14A] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="font-displayans text-sm text-white/50 line-clamp-3 leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-[#C9A14A] font-displayans text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:gap-3"
                      >
                        Read Article
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </a>
                      <a
                        href="/contact"
                        className="ml-auto inline-flex items-center gap-1.5 text-white/40 hover:text-white font-displayans text-xs transition-all duration-300"
                      >
                        Book Consultation
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
