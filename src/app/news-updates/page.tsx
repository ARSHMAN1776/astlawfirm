import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { newsItems } from "@/data/news";
import { NewsExplorer } from "@/components/NewsExplorer";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Firm news, Supreme Court and High Court case updates, and legal developments in mining, banking, tax, corporate, arbitration and constitutional law from AST Law Firm — Ahmed Sabir Tanoli.",
  alternates: { canonical: "/news-updates" },
};

export default function NewsUpdatesPage() {
  const total = newsItems.length;

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-16 sm:pb-24">
      {/* Header */}
      <section className="pb-16 pt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-5 h-[1px] bg-[#8B7355]" />
                <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">
                  Newsroom · AST Law Firm
                </span>
              </div>

              <div className="border-l-2 border-[#8B7355] pl-4 py-1">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl text-[#111110] leading-[1.12] tracking-tight"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
                >
                  News &amp; Updates
                </h1>
              </div>

              <p className="text-[#5C5A54] text-base sm:text-xl max-w-3xl leading-relaxed">
                Chamber announcements, notable engagements and the judgments and legislative changes shaping litigation,
                mining, banking, tax and corporate practice across Pakistan.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="border-l-2 border-[#06231B] pl-5 space-y-1.5">
                <p className="text-[0.6rem] tracking-[0.24em] uppercase font-mono text-[#8A8780]">In the newsroom</p>
                <p className="text-3xl text-[#06231B] leading-none" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}>
                  {total} updates
                </p>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-1.5 text-[0.66rem] tracking-[0.16em] uppercase font-semibold text-[#111110] hover:text-[#8B7355] transition-colors"
                >
                  Long-form legal insights
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsExplorer items={newsItems} />

      {/* Closing call to action */}
      <section className="py-16 sm:py-20 bg-[#06231B] text-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#B09A6E] font-semibold">
              Affected by a development?
            </span>
            <h3
              className="text-3xl sm:text-4xl text-[#F7F5EF] font-light"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Speak to our chambers about your matter
            </h3>
            <p className="text-[#C8C4B8] text-xs sm:text-sm leading-relaxed">
              Each update summarises published reports for general information. Contact us for advice on how a ruling or
              new law applies to your circumstances.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF8F4] text-[#111110] hover:bg-white text-[0.7rem] uppercase tracking-widest font-semibold transition-colors shadow-sm"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#F7F5EF]/30 hover:border-[#F7F5EF] text-[#F7F5EF] text-[0.7rem] uppercase tracking-widest font-semibold transition-colors"
            >
              <span>Practice Areas</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
