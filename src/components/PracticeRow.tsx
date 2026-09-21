import React from "react";
import Link from "next/link";
import { PracticeArea } from "@/data/practiceAreas";
import { ArrowUpRight } from "lucide-react";

interface PracticeRowProps {
  practice: PracticeArea;
  index: number;
}

export const PracticeRow: React.FC<PracticeRowProps> = ({ practice }) => {
  return (
    <Link
      href={`/practice-areas/${practice.slug}`}
      className="group block border-b border-stone-800/80 py-8 sm:py-10 transition-colors duration-300 hover:bg-white/[0.015]"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8">
        {/* Left: Number + Title */}
        <div className="flex items-baseline gap-6 sm:gap-10">
          <span className="font-mono text-xs sm:text-sm text-stone-500 group-hover:text-stone-300 transition-colors duration-300">
            {practice.number}
          </span>
          <div>
            <h3 className="font-editorial-heading text-2xl sm:text-3xl lg:text-4xl text-stone-200 group-hover:text-white transition-colors duration-300">
              {practice.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-normal mt-2 max-w-xl group-hover:text-stone-300 transition-colors duration-300">
              {practice.tagline}
            </p>
          </div>
        </div>

        {/* Right: Key Scope preview + Minimal arrow */}
        <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0">
          <span className="hidden xl:inline-block text-xs font-mono text-stone-500 uppercase tracking-widest group-hover:text-stone-400 transition-colors">
            {practice.scopeOfServices.length} Services
          </span>
          <div className="w-10 h-10 rounded-none border border-stone-800 group-hover:border-stone-500 flex items-center justify-center text-stone-400 group-hover:text-white group-hover:bg-stone-900 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
};
