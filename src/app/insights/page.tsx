"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { insightArticles } from "@/data/insights";
import { ArrowUpRight, Search } from "lucide-react";

const CATEGORIES = [
  "All",
  "Corporate Law",
  "Litigation",
  "Banking & Finance",
  "Regulatory",
  "Real Estate",
] as const;

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = useMemo(() => {
    return insightArticles.filter((art) => {
      const matchesCategory =
        selectedCategory === "All" || art.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      {/* 1. Header */}
      <section className="border-b border-[rgba(17,17,16,0.10)] pb-16 pt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-5 h-[1px] bg-[#8B7355]" />
            <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#8A8780] font-medium">
              Publications & Legal Precedents
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-[#111110] max-w-4xl leading-[1.12]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Legal Insights & Commentary
          </h1>

          <p className="text-[#5C5A54] text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Analytical assessments of statutory enactments, High Court precedents, and corporate governance imperatives in Pakistan.
          </p>
        </div>
      </section>

      {/* 2. Filter & Search Bar */}
      <section className="py-6 border-b border-[rgba(17,17,16,0.10)] bg-[#EFECE3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[0.68rem] uppercase tracking-wider px-3.5 py-1.5 transition-all border ${
                    selectedCategory === cat
                      ? "bg-[#111110] text-[#F7F5EF] border-[#111110] font-medium"
                      : "bg-[#F7F5EF] text-[#5C5A54] border-[rgba(17,17,16,0.15)] hover:border-[#111110] hover:text-[#111110]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#8A8780] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search analysis..."
                className="w-full bg-[#FFFFFF] border border-[rgba(17,17,16,0.15)] text-[#111110] pl-10 pr-4 py-2 text-xs focus:border-[#111110] focus:outline-none placeholder:text-[#A09D96]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Articles List */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center border border-[rgba(17,17,16,0.10)] bg-[#EFECE3] space-y-4">
              <p className="text-sm text-[#5C5A54]">No legal insights match your query.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-xs uppercase tracking-widest text-[#111110] underline font-medium"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[rgba(17,17,16,0.10)]">
              {filteredArticles.map((article) => (
                <article key={article.slug} className="py-10 group">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                    {/* Meta: Category & Date */}
                    <div className="md:col-span-3 space-y-1">
                      <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8B7355] block font-medium">
                        {article.category}
                      </span>
                      <p className="text-xs text-[#8A8780]">
                        {article.date} · {article.readTime}
                      </p>
                      <p className="text-xs text-[#5C5A54] pt-1">
                        By {article.author}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-8 space-y-3">
                      <h2
                        className="text-2xl sm:text-3xl text-[#111110] group-hover:text-[#8B7355] transition-colors"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
                      >
                        <Link href={`/insights/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>
                      <p className="text-[#5C5A54] text-sm leading-relaxed font-normal">
                        {article.summary}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="md:col-span-1 flex justify-end">
                      <Link
                        href={`/insights/${article.slug}`}
                        className="w-10 h-10 border border-[rgba(17,17,16,0.15)] group-hover:border-[#111110] flex items-center justify-center text-[#111110] group-hover:bg-[#111110] group-hover:text-[#F7F5EF] transition-all"
                        aria-label={`Read ${article.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
