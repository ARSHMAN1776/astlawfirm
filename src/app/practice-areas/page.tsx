import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore AST Law Firm's specialized legal practices across corporate, commercial, litigation, banking, real estate, and regulatory advisory in Pakistan.",
};

export default function PracticeAreasPage() {
  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      {/* Editorial Header */}
      <section className="border-b border-[rgba(17,17,16,0.10)] pb-16 pt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-5 h-[1px] bg-[#8B7355]" />
            <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#8A8780]">
              Chambers Directory
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-[#111110] max-w-4xl leading-[1.15]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Specialized Practice Areas
          </h1>

          <p className="text-[#5C5A54] text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            AST Law Firm provides focused legal disciplines tailored to the regulatory landscape of Pakistan. From corporate transactions to contentious appellate proceedings before the High Courts, our services prioritize strategic precision.
          </p>
        </div>
      </section>

      {/* Directory List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="divide-y divide-[rgba(17,17,16,0.10)]">
            {practiceAreas.map((practice) => (
              <div
                key={practice.slug}
                id={practice.slug}
                className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Number & Title */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-[0.75rem] tracking-[0.26em] uppercase text-[#8B7355] font-bold block">
                      {practice.number} / PRACTICE DIVISION
                    </span>
                  </div>

                  <div className="border-l-2 border-[#8B7355] pl-3 py-0.5">
                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl text-[#111110] font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 700 }}
                    >
                      {practice.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#33312E] font-medium leading-relaxed pt-1">
                    {practice.tagline}
                  </p>

                  <div className="pt-3">
                    <Link
                      href={`/practice-areas/${practice.slug}`}
                      className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.2em] uppercase text-[#111110] font-semibold border-b border-[#111110] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355] transition-colors"
                    >
                      <span>Complete Division Brief</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Overview & Core Services */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-[#5C5A54] text-sm sm:text-base leading-relaxed">
                    {practice.overview}
                  </p>

                  {/* Core Legal Services */}
                  <div className="border-t border-[rgba(17,17,16,0.10)] pt-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                      <h4 className="text-xs tracking-[0.2em] uppercase text-[#06231B] font-bold">
                        Core Legal Services
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {practice.scopeOfServices
                        .filter((s) => !s.includes("[insert"))
                        .map((service, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-[#111110] font-semibold bg-[#EFECE3]/70 border border-[rgba(17,17,16,0.10)] p-3"
                          >
                            <span className="text-[#8B7355] font-bold text-sm leading-none mt-0.5">▪</span>
                            <span className="font-semibold text-[#111110]">{service}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Main Key Points / Strategic Considerations */}
                  {practice.keyConsiderations && practice.keyConsiderations.length > 0 && (
                    <div className="border-t border-[rgba(17,17,16,0.10)] pt-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                        <h4 className="text-xs tracking-[0.2em] uppercase text-[#06231B] font-bold">
                          Main Key Points &amp; Strategic Considerations
                        </h4>
                      </div>

                      <div className="space-y-2">
                        {practice.keyConsiderations.map((point, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-[#111110] font-semibold bg-[#FAF8F4] border border-[rgba(17,17,16,0.12)] p-3 shadow-xs"
                          >
                            <span className="text-[#8B7355] font-bold text-sm leading-none mt-0.5">▪</span>
                            <span className="font-semibold text-[#111110]">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Clients & Inquire */}
                  <div className="border-t border-[rgba(17,17,16,0.10)] pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs text-[#5C5A54]">
                      <span className="text-[#06231B] uppercase tracking-wider font-bold mr-2">Clients Served:</span>
                      <span className="font-medium text-[#2D2C2A]">{practice.clientTypes.join(" · ")}</span>
                    </div>

                    <Link
                      href={`/contact?practice=${encodeURIComponent(practice.title)}`}
                      className="text-[0.68rem] uppercase tracking-widest text-[#06231B] hover:text-[#8B7355] font-semibold inline-flex items-center gap-1.5 transition-colors border-b border-[#06231B]/30 hover:border-[#8B7355] pb-0.5"
                    >
                      <span>Inquire regarding this practice</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-20 border-t border-[rgba(17,17,16,0.10)] text-center bg-[#EFECE3]">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2
            className="text-3xl sm:text-4xl text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Require Specialized Legal Advice?
          </h2>
          <p className="text-sm text-[#5C5A54]">
            Our chambers handle multi-jurisdictional and confidential legal inquiries across Pakistan.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#111110] text-[#F7F5EF] hover:bg-[#2D2C2A] font-medium text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <span>Schedule Legal Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
