"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Search } from "lucide-react";
import { NEWS_CATEGORIES, type NewsCategory, type NewsItem } from "@/data/news";
import { NewsCard } from "./NewsCard";
import { NewsCover } from "./NewsCover";
import { Reveal } from "./Reveal";

type Filter = "All" | NewsCategory;
const PAGE_SIZE = 6;
const serif = { fontFamily: "var(--font-cormorant), Georgia, serif" } as const;

/** Full-width hairline (with a short gold lead-in) closing each row of cards. */
const RowDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`col-span-full relative h-px bg-[rgba(17,17,16,0.14)] ${className}`} aria-hidden="true">
    <span className="absolute left-0 top-0 h-px w-16 bg-[#8B7355]" />
  </div>
);

export const NewsExplorer: React.FC<{ items: NewsItem[] }> = ({ items }) => {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filters: Filter[] = ["All", ...NEWS_CATEGORIES];
  const counts = useMemo(
    () =>
      Object.fromEntries(
        filters.map((f) => [f, f === "All" ? items.length : items.filter((i) => i.category === f).length])
      ) as Record<Filter, number>,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items]
  );

  const q = query.trim().toLowerCase();
  const matches = useMemo(
    () =>
      items.filter((item) => {
        if (filter !== "All" && item.category !== filter) return false;
        if (!q) return true;
        return (
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      }),
    [items, filter, q]
  );

  // Lead with the featured story only on the unfiltered view
  const featured = filter === "All" && !q ? matches.find((m) => m.featured) : undefined;
  const rest = featured ? matches.filter((m) => m !== featured) : matches;
  const shown = rest.slice(0, visible);

  const select = (f: Filter) => {
    setFilter(f);
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      {/* Filter bar */}
      <section className="border-y border-[rgba(17,17,16,0.10)] bg-[#EFECE3]/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-5">
          <div
            className="-mx-6 px-6 sm:mx-0 sm:px-0 flex items-center gap-2 overflow-x-auto sm:flex-wrap sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Filter updates by category"
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => select(f)}
                aria-pressed={filter === f}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[0.64rem] sm:text-[0.68rem] uppercase tracking-[0.14em] sm:tracking-[0.16em] px-3 sm:px-4 py-2 border transition-colors ${
                  filter === f
                    ? "bg-[#06231B] text-[#F7F5EF] border-[#06231B] font-semibold"
                    : "bg-[#F7F5EF] text-[#5C5A54] border-[rgba(17,17,16,0.15)] hover:border-[#06231B] hover:text-[#06231B]"
                }`}
              >
                {f}
                <span className={`font-mono text-[0.6rem] ${filter === f ? "text-[#D9C7A0]" : "text-[#8A8780]"}`}>
                  {counts[f]}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8A8780] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Search news & updates…"
              aria-label="Search news and updates"
              className="w-full bg-white border border-[rgba(17,17,16,0.15)] text-[#111110] pl-10 pr-4 py-2.5 text-xs focus:border-[#06231B] focus:outline-none placeholder:text-[#A09D96]"
            />
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-7 sm:space-y-12">
          {/* Featured story */}
          {featured && (
            <Reveal as="article" className="group">
              <Link
                href={`/news-updates/${featured.slug}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center focus-visible:outline-none"
                aria-label={`${featured.title} — read update`}
              >
                <div className="lg:col-span-7 relative aspect-[16/9] overflow-hidden border border-[rgba(17,17,16,0.12)]">
                  <NewsCover item={featured} large />
                </div>
                <div className="lg:col-span-5 space-y-3 sm:space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-px bg-[#8B7355]" />
                    <span className="text-[0.62rem] tracking-[0.24em] uppercase font-mono text-[#8B7355] font-bold">
                      Featured · {featured.category}
                    </span>
                  </div>
                  <h2
                    className="text-[1.5rem] sm:text-[2.1rem] lg:text-[2.4rem] leading-[1.18] tracking-[-0.01em] text-[#0A0A09] font-bold transition-colors duration-300 group-hover:text-[#06231B]"
                    style={serif}
                  >
                    {featured.accent && featured.title.endsWith(featured.accent) ? (
                      <>
                        {featured.title.slice(0, -featured.accent.length)}
                        <span className="mt-1 block font-medium italic text-[#8B7355]">{featured.accent}</span>
                      </>
                    ) : (
                      featured.title
                    )}
                  </h2>
                  <div className="flex items-center gap-5 pt-1">
                    <span className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.18em] uppercase font-semibold text-[#111110] border-b border-[#111110] pb-0.5 group-hover:text-[#8B7355] group-hover:border-[#8B7355] transition-colors">
                      Read the story
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Divider centred between the featured story and the first row */}
          {featured && rest.length > 0 && <RowDivider />}

          {/* Grid */}
          {matches.length === 0 ? (
            <div className="py-20 text-center border border-[rgba(17,17,16,0.10)] bg-[#EFECE3] space-y-4">
              <p className="text-sm text-[#5C5A54]">No updates match your search.</p>
              <button
                type="button"
                onClick={() => {
                  setFilter("All");
                  setQuery("");
                }}
                className="text-xs uppercase tracking-widest text-[#111110] underline font-medium"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-0 sm:gap-y-9 lg:gap-y-11">
                {shown.map((item, i) => (
                  <React.Fragment key={item.slug}>
                    <NewsCard item={item} index={i % 3} />
                    {i < shown.length - 1 && (i + 1) % 3 === 0 && <RowDivider className="hidden xl:block" />}
                    {i < shown.length - 1 && (i + 1) % 2 === 0 && <RowDivider className="hidden sm:block xl:hidden" />}
                  </React.Fragment>
                ))}
              </div>

              {/* Load more: progress line + square arrow button (only when there is more than one page) */}
              {rest.length > PAGE_SIZE && (
              <div className="flex flex-col items-center gap-6 pt-2 sm:pt-4" aria-live="polite">
                <div className="w-full max-w-[15rem] space-y-3">
                  <div className="relative h-px bg-[rgba(17,17,16,0.16)]">
                    <span
                      className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#8B7355] transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ width: `${Math.round(((shown.length + (featured ? 1 : 0)) / matches.length) * 100)}%` }}
                    />
                  </div>
                  <p className="text-center text-[0.62rem] tracking-[0.22em] uppercase font-mono text-[#6B6860]">
                    <span className="text-[#111110] font-semibold">{shown.length + (featured ? 1 : 0)}</span> of {matches.length} updates
                  </p>
                </div>

                {visible < rest.length && (
                  <button
                    type="button"
                    onClick={() => setVisible(rest.length)}
                    className="group inline-flex items-center gap-4 focus-visible:outline-none"
                  >
                    <span className="relative text-[0.68rem] tracking-[0.22em] uppercase font-semibold text-[#111110] transition-colors group-hover:text-[#06231B]">
                      Load {rest.length - visible} more
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#8B7355] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                    </span>
                    <span className="grid h-11 w-11 place-items-center border border-[rgba(17,17,16,0.25)] text-[#111110] transition-colors duration-300 group-hover:border-[#06231B] group-hover:bg-[#06231B] group-hover:text-[#F7F5EF] group-focus-visible:border-[#06231B] group-focus-visible:bg-[#06231B] group-focus-visible:text-[#F7F5EF]">
                      <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </span>
                  </button>
                )}
              </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};
