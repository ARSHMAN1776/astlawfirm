import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const routes = practiceAreas.map((pa) => ({
    slug: pa.slug,
  }));
  routes.push({ slug: "tax-advisor" });
  return routes;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const practice =
    practiceAreas.find((p) => p.slug === params.slug) ||
    (params.slug === "tax-advisor" ? practiceAreas.find((p) => p.slug === "tax-advisory") : undefined);
  if (!practice) return { title: "Practice Area Not Found | AST Law Firm" };

  return {
    title: `${practice.title} | AST Law Firm`,
    description: practice.overview,
  };
}

export default function PracticeAreaDetailPage({ params }: Props) {
  const practice =
    practiceAreas.find((p) => p.slug === params.slug) ||
    (params.slug === "tax-advisor" ? practiceAreas.find((p) => p.slug === "tax-advisory") : undefined);

  if (!practice) {
    notFound();
  }

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      {/* Breadcrumb / Back Link */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6">
        <Link
          href="/practice-areas"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#8A8780] hover:text-[#111110] transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Practice Areas</span>
        </Link>
      </div>

      {/* Editorial Title Header */}
      <section className="border-b border-[rgba(17,17,16,0.10)] pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-[0.8rem] tracking-[0.26em] uppercase text-[#8B7355] font-bold">
              {practice.number} / PRACTICE DIVISION
            </span>
            <span className="w-12 h-[1px] bg-[#8B7355]/40" />
          </div>

          <div className="border-l-2 border-[#8B7355] pl-4 py-1">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-[#111110] font-bold max-w-4xl leading-[1.12]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 700 }}
            >
              {practice.title}
            </h1>
          </div>

          <p className="text-[#33312E] text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
            {practice.tagline}
          </p>
        </div>
      </section>

      {/* Main Body Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Overview */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                  <h2 className="text-xs tracking-[0.26em] uppercase text-[#06231B] font-bold">
                    Practice Overview
                  </h2>
                </div>
                <p className="text-[#5C5A54] text-base leading-relaxed font-normal">
                  {practice.overview}
                </p>
              </div>

              {/* Governing Statutory & Regulatory Framework */}
              {practice.statutoryFramework && practice.statutoryFramework.length > 0 && (
                <div className="space-y-4 border-t border-[rgba(17,17,16,0.10)] pt-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                    <h2 className="text-xs tracking-[0.26em] uppercase text-[#06231B] font-bold">
                      Governing Statutory &amp; Regulatory Framework
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {practice.statutoryFramework.map((framework, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F4] border border-[rgba(17,17,16,0.15)] text-[#111110] text-xs font-semibold tracking-wide"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Procedural Trajectory / Strategic Execution Stages */}
              {practice.proceduralStages && practice.proceduralStages.length > 0 && (
                <div className="space-y-6 border-t border-[rgba(17,17,16,0.10)] pt-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                    <h2 className="text-xs tracking-[0.26em] uppercase text-[#06231B] font-bold">
                      Procedural Trajectory &amp; Judicial Stages
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {practice.proceduralStages.map((stage, idx) => (
                      <div
                        key={idx}
                        className="border border-[rgba(17,17,16,0.12)] bg-[#FAF8F4] p-4 flex flex-col justify-between space-y-2 shadow-xs"
                      >
                        <div className="flex items-center justify-between border-b border-[rgba(17,17,16,0.08)] pb-2">
                          <span className="text-xs font-bold text-[#8B7355] font-mono">
                            STAGE {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#8B7355]/60" />
                        </div>
                        <h4 className="text-sm font-bold text-[#111110] leading-snug">
                          {stage.title}
                        </h4>
                        <p className="text-xs text-[#5C5A54] leading-relaxed">
                          {stage.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scope of Services */}
              <div className="space-y-6 border-t border-[rgba(17,17,16,0.10)] pt-8">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                  <h2 className="text-xs tracking-[0.26em] uppercase text-[#06231B] font-bold">
                    Scope of Representation &amp; Core Services
                  </h2>
                </div>
                <div className="space-y-3">
                  {practice.scopeOfServices
                    .filter((s) => !s.includes("[insert"))
                    .map((service, idx) => (
                      <div
                        key={idx}
                        className="border border-[rgba(17,17,16,0.10)] bg-[#EFECE3] p-4 flex items-start gap-3 shadow-xs"
                      >
                        <span className="text-xs text-[#8B7355] font-bold mt-0.5 font-mono">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm text-[#111110] font-semibold">{service}</p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Key Considerations */}
              <div className="space-y-6 border-t border-[rgba(17,17,16,0.10)] pt-8">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                  <h2 className="text-xs tracking-[0.26em] uppercase text-[#06231B] font-bold">
                    Main Key Points &amp; Strategic Considerations
                  </h2>
                </div>
                <div className="space-y-3">
                  {practice.keyConsiderations.map((consideration, idx) => (
                    <div
                      key={idx}
                      className="border border-[rgba(17,17,16,0.10)] bg-[#FAF8F4] p-4 flex items-start gap-3 shadow-xs"
                    >
                      <span className="text-sm text-[#8B7355] font-bold mt-0.5">▪</span>
                      <p className="text-sm text-[#111110] font-semibold leading-relaxed">
                        {consideration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Engagement Box */}
            <div className="lg:col-span-4 space-y-8">
              <div className="border border-[rgba(17,17,16,0.12)] bg-[#EFECE3] p-6 sm:p-8 space-y-6">
                <span className="text-[0.62rem] tracking-[0.22em] uppercase text-[#8A8780] block font-medium">
                  Legal Inquiry
                </span>
                <h3
                  className="text-2xl text-[#111110]"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
                >
                  Consult Regarding {practice.title}
                </h3>
                <p className="text-xs text-[#5C5A54] leading-relaxed">
                  Our advocates evaluate matter particulars, examine applicable legal frameworks, and identify available legal remedies.
                </p>
                <div className="pt-2">
                  <Link
                    href={`/contact?practice=${encodeURIComponent(practice.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111110] text-[#F7F5EF] hover:bg-[#2D2C2A] text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    <span>Request Legal Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Client Types */}
              <div className="border border-[rgba(17,17,16,0.10)] p-6 space-y-4 bg-[#F7F5EF]">
                <h4 className="text-[0.62rem] tracking-[0.22em] uppercase text-[#8A8780] font-medium">
                  Representative Matters & Clients
                </h4>
                <ul className="space-y-2 text-xs text-[#5C5A54]">
                  {practice.clientTypes.map((type, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#8B7355] rounded-full flex-shrink-0" />
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
