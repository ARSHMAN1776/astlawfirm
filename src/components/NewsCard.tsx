"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NewsItem } from "@/data/news";
import { NewsCover } from "./NewsCover";
import { Reveal } from "./Reveal";

const serif = { fontFamily: "var(--font-cormorant), Georgia, serif" } as const;

/** Editorial card: cover, a rule that draws on hover, and a clear headline — no heavy box, no blurb. */
export const NewsCard: React.FC<{ item: NewsItem; index?: number }> = ({ item, index = 0 }) => (
  <Reveal
    as="article"
    index={index}
    className="group flex flex-col max-sm:border-b max-sm:border-[rgba(17,17,16,0.10)] max-sm:py-5 max-sm:first:pt-0"
  >
    <Link
      href={`/news-updates/${item.slug}`}
      className="flex flex-1 gap-4 sm:flex-col sm:gap-0 focus-visible:outline-none"
      aria-label={`${item.title} — read update`}
    >
      <div className="relative w-[38%] max-w-[9.5rem] shrink-0 self-start aspect-square sm:w-auto sm:max-w-none sm:self-auto sm:aspect-[16/9] overflow-hidden border border-[rgba(17,17,16,0.12)]">
        <NewsCover item={item} compact />
      </div>

      <div className="flex min-w-0 flex-1 flex-col sm:pt-6">
        <div className="text-[0.62rem] tracking-[0.2em] uppercase font-mono">
          <span className="text-[#8B7355] font-bold">{item.category}</span>
        </div>

        <span className="relative mt-3 hidden sm:block h-px bg-[rgba(17,17,16,0.14)]" aria-hidden="true">
          <span className="absolute inset-0 origin-left scale-x-0 bg-[#8B7355] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
        </span>

        <h3
          className="mt-1.5 sm:mt-5 text-[1.12rem] sm:text-[1.4rem] leading-[1.22] sm:leading-[1.25] tracking-[-0.005em] text-[#0A0A09] font-bold transition-colors duration-300 group-hover:text-[#06231B]"
          style={serif}
        >
          {item.title}
        </h3>

        <span className="mt-auto pt-3 sm:pt-6 inline-flex items-center gap-2 text-[0.62rem] sm:text-[0.66rem] tracking-[0.18em] uppercase font-semibold text-[#111110] group-hover:text-[#8B7355] transition-colors">
          Read update
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  </Reveal>
);
