import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { practiceAreas } from "@/data/practiceAreas";
import { ArrowRight, ArrowUpRight, Award, Scale, ShieldCheck, Building2 } from "lucide-react";

export default function HomePage() {
  const { principals, legacy } = siteConfig;

  return (
    <div className="bg-[#F7F5EF] text-[#111110]">

      {/* ═══════════════════════════════════════════════════════
          1. HERO — Split Layout
      ═══════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════
          1. HERO — Classical Architectural Composition (Compact)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[78vh] lg:min-h-[80vh] bg-[#F7F5EF] flex flex-col justify-between overflow-hidden border-b border-[rgba(17,17,16,0.10)]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch flex-grow">

          {/* LEFT: Legal Authority & Positioning */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center px-4 sm:px-6 lg:pl-8 xl:pl-10 lg:pr-6 pt-28 sm:pt-30 lg:pt-32 pb-10 lg:pb-14 space-y-4 sm:space-y-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-5 h-[1.5px] bg-[#06231B]" />
              <span className="text-[0.65rem] tracking-[0.26em] uppercase text-[#06231B] font-medium">
                AST LAW FIRM
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] leading-[1.38] text-[#0A1A15] tracking-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              <div>Professional Legal</div>
              <div className="mt-1.5 sm:mt-2">Representation.</div>
              <div
                className="mt-3 sm:mt-4 text-[#06231B]"
                style={{ fontStyle: "italic", fontWeight: 300 }}
              >
                Strategic Counsel.
              </div>
              <div className="mt-2.5 sm:mt-3.5">
                Trusted Advocacy.
              </div>
            </h1>

            {/* Supporting description */}
            <p className="text-[#55534E] text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
              AST Law Firm is a professional legal practice providing legal representation, litigation, advisory, documentation and corporate legal services to individuals, businesses, companies, institutions and organizations.
            </p>

            {/* Left-bordered Leadership citation */}
            <div className="border-l-2 border-[#8B7355]/50 pl-3.5 py-0.5 max-w-xl">
              <p className="text-[0.72rem] sm:text-xs text-[#5C5A54] leading-relaxed">
                Led by Haji <strong className="text-[#111110] font-medium">Sabir Hussain Tanoli</strong>, Advocate Supreme Court of Pakistan, Founder &amp; Senior Partner; and <strong className="text-[#111110] font-medium">Ahmed Hussain Tanoli</strong>, Advocate High Court, Co-Founder &amp; Managing Partner.
              </p>
            </div>

            {/* 2 Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-5 py-3 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] font-medium text-[0.65rem] tracking-[0.16em] uppercase transition-colors duration-200 shadow-sm whitespace-nowrap"
              >
                <span>Request a Consultation</span>
                <span className="text-sm leading-none transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#06231B] text-[#06231B] hover:bg-[#06231B]/5 font-medium text-[0.65rem] tracking-[0.15em] uppercase transition-colors duration-200 bg-transparent whitespace-nowrap"
              >
                <span>Explore Our Practice Areas</span>
                <span className="text-xs leading-none">↗</span>
              </Link>
            </div>
          </div>

          {/* MIDDLE: Vertical Divider, Diamond & Value Pillars */}
          <div className="hidden lg:flex lg:col-span-2 xl:col-span-2 relative items-center justify-center pt-24 pb-8">
            {/* Vertical Hairline */}
            <div className="absolute inset-y-10 left-0 w-[1px] bg-[rgba(17,17,16,0.12)]">
              {/* Centered Diamond */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#06231B]" />
            </div>

            {/* Pillars Column to the right of line */}
            <div className="flex flex-col justify-between h-full py-6 pl-6 xl:pl-8 w-full">
              <div className="space-y-5 pt-2">
                <div>
                  <p className="text-[0.68rem] xl:text-[0.72rem] tracking-[0.32em] uppercase text-[#06231B] font-medium">
                    T R U S T
                  </p>
                  <div className="w-6 h-[1px] bg-[rgba(17,17,16,0.15)] mt-3" />
                </div>
                <div>
                  <p className="text-[0.68rem] xl:text-[0.72rem] tracking-[0.32em] uppercase text-[#06231B] font-medium">
                    E X P E R I E N C E
                  </p>
                  <div className="w-6 h-[1px] bg-[rgba(17,17,16,0.15)] mt-3" />
                </div>
                <div>
                  <p className="text-[0.68rem] xl:text-[0.72rem] tracking-[0.32em] uppercase text-[#06231B] font-medium">
                    R E S U L T S
                  </p>
                </div>
              </div>

              <div className="pb-2">
                <p
                  className="text-sm sm:text-[0.925rem] text-[#4A4843] leading-snug italic"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Your Legal Matters,
                  <br />
                  Our Priority.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Authentic AST Logo Wall in Arched Architectural Frame — Flushes directly to edge */}
          <div className="lg:col-span-4 xl:col-span-4 relative flex items-end justify-end pt-10 lg:pt-16 min-h-[360px] lg:min-h-0">
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[500px] xl:min-h-[540px] rounded-tl-[80px] lg:rounded-tl-[130px] overflow-hidden border-t border-l border-[rgba(17,17,16,0.15)] bg-[#111110] shadow-[-12px_12px_35px_-8px_rgba(0,0,0,0.18)] group">
              <Image
                src="/hero-ast-wall-feature.jpg"
                alt="AST Law Firm — Ahmad Sabir Tanoli Reception Feature Wall"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
              />
              {/* Light shade overlay — subtle atmospheric depth */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.25)] pointer-events-none" />
            </div>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          2. OUR MISSION & VISION
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-[rgba(17,17,16,0.10)] grid grid-cols-1 lg:grid-cols-2">
        {/* Mission */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20 border-b lg:border-b-0 lg:border-r border-[rgba(17,17,16,0.10)]">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8A8780] block mb-6">Our Mission</span>
          <blockquote
            className="text-2xl sm:text-3xl lg:text-[2rem] leading-[1.3] text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            "To provide professional, responsible and effective legal services through sound legal research, careful preparation, strategic advice and dedicated representation."
          </blockquote>
        </div>

        {/* Vision */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20 bg-[#EFECE3]">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8A8780] block mb-6">Our Vision</span>
          <blockquote
            className="text-2xl sm:text-3xl lg:text-[2rem] leading-[1.3] text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            "To build a respected legal practice recognized for professional integrity, quality legal work, responsible advocacy and long-term client relationships."
          </blockquote>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          3. OUR APPROACH — 5 Principles (Enlarged & High Visibility)
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-[rgba(17,17,16,0.10)] py-20 sm:py-28 lg:py-32 bg-[#F7F5EF]">
        <div className="w-full px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(17,17,16,0.12)] mb-0">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-[#8B7355]" />
                <span className="text-[0.7rem] sm:text-xs tracking-[0.3em] uppercase text-[#8B7355] font-semibold">
                  Professional Principles
                </span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-[3.25rem] text-[#111110] leading-[1.12] tracking-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Our Approach
              </h2>
            </div>
            <p className="text-[#4A4843] text-sm sm:text-base max-w-md leading-relaxed font-normal">
              The institutional principles and professional discipline guiding AST Law Firm in every client matter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 xl:gap-6 pt-10">
            {[
              {
                num: "01",
                title: "Integrity",
                desc: "We maintain the highest standards of professional conduct and ethical practice in all client matters.",
              },
              {
                num: "02",
                title: "Professionalism",
                desc: "We approach every matter with the care, preparation and seriousness that professional legal work requires.",
              },
              {
                num: "03",
                title: "Diligence",
                desc: "We examine each matter carefully and give it the attention and effort it deserves.",
              },
              {
                num: "04",
                title: "Confidentiality",
                desc: "Client information and legal documents are handled with appropriate professional care and discretion.",
              },
              {
                num: "05",
                title: "Advocacy",
                desc: "Where representation is required, we present and argue our client's matter with preparation and commitment.",
              },
            ].map((p, idx) => (
              <div
                key={p.title}
                className="relative p-[1.5px] overflow-hidden group bg-[rgba(17,17,16,0.08)] hover:shadow-[0_16px_36px_-6px_rgba(17,17,16,0.14)] transition-all duration-300"
              >
                {/* Continuous Running Beam Around Corners */}
                <div
                  className="absolute inset-[-180%] animate-border-beam opacity-45 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg 315deg, rgba(139,115,85,0.85) 345deg, rgba(6,35,27,1) 360deg)",
                    animationDelay: `${idx * 0.9}s`,
                  }}
                />

                {/* Inner Card Content — Enlarged & Clearly Visible */}
                <div className="relative bg-[#FAF8F3] group-hover:bg-[#FFFFFF] p-7 sm:p-8 xl:p-8.5 h-full min-h-[260px] sm:min-h-[285px] flex flex-col justify-between transition-colors duration-300">
                  {/* Header Row: Number + indicator dot */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-[rgba(17,17,16,0.06)]">
                    <span
                      className="text-sm sm:text-base font-serif text-[#8B7355] tracking-widest font-semibold"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {p.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#8B7355]/50 group-hover:bg-[#06231B] group-hover:scale-125 transition-all duration-300" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <h3
                      className="text-2xl sm:text-[1.65rem] text-[#111110] mb-3 font-medium tracking-tight group-hover:text-[#06231B] transition-colors duration-200 leading-tight"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[#3E3C37] text-[0.825rem] sm:text-[0.875rem] leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          4. OUR LEGACY — Heritage Section (Architectural Refinement)
      ═══════════════════════════════════════════════════════ */}
      <section id="legacy" className="border-t border-[rgba(17,17,16,0.10)] bg-[#F7F5EF] relative overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Column — Historical Narrative & Epoch Cards */}
          <div className="lg:col-span-7 xl:col-span-7 px-5 sm:px-8 lg:px-10 xl:px-14 py-14 sm:py-18 lg:py-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[rgba(17,17,16,0.10)]">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1.5px] bg-[#8B7355]" />
                <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                  Legacy Since {legacy.since} • Over 34 Years of Practice
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] text-[#111110] mb-6 leading-[1.18] tracking-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
              >
                A Legal Practice with a Tradition of Professional Service
              </h2>

              {/* Lead Highlight */}
              <p
                className="text-base sm:text-lg text-[#2D2C2A] leading-relaxed mb-6 font-normal"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                AST "The Law Firm" is the continuation of a distinguished legal practice with a professional legacy dating back to {legacy.since}—built on principled courtroom advocacy, meticulous preparation, and enduring client confidence.
              </p>

              {/* Two Heritage Epoch Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {/* 1992 Foundation */}
                <div className="relative p-4 sm:p-5 bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] hover:border-[#8B7355]/40 transition-all duration-300">
                  <span className="corner-bracket-tl" />
                  <span className="corner-bracket-tr" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-serif text-[#8B7355] tracking-widest font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                      FOUNDATION • {legacy.since}
                    </span>
                    <span className="text-[0.58rem] tracking-[0.16em] uppercase text-[#5C5A54] bg-[#EFECE3] px-2 py-0.5 font-medium">
                      Origin
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#111110] mb-1.5">
                    {legacy.originalFirm}
                  </h4>
                  <p className="text-xs text-[#5C5A54] leading-relaxed font-normal">
                    Established by <strong className="text-[#2D2C2A] font-medium">{principals.founder.name}</strong>, {principals.founder.designation}, setting the foundation of trial and appellate advocacy.
                  </p>
                </div>

                {/* 2026 Unified Practice */}
                <div className="relative p-4 sm:p-5 bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] hover:border-[#06231B]/40 transition-all duration-300">
                  <span className="corner-bracket-tl" />
                  <span className="corner-bracket-tr" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-serif text-[#06231B] tracking-widest font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                      UNIFIED PRACTICE • {legacy.mergerYear}
                    </span>
                    <span className="text-[0.58rem] tracking-[0.16em] uppercase text-[#06231B] bg-[#06231B]/10 px-2 py-0.5 font-medium">
                      Merger
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#111110] mb-1.5">
                    AST LAW FIRM
                  </h4>
                  <p className="text-xs text-[#5C5A54] leading-relaxed font-normal">
                    Consolidated under <strong className="text-[#2D2C2A] font-medium">{principals.coFounder.name}</strong>, unifying senior Supreme Court counsel with contemporary corporate advisory.
                  </p>
                </div>
              </div>

              {/* Narrative Summary */}
              <p className="text-xs sm:text-sm text-[#5C5A54] leading-relaxed font-normal mb-8">
                AST combines the legacy and experience of a legal practice established in {legacy.since} with a contemporary professional identity designed to serve individuals, businesses, institutions and corporate clients across Pakistan.
              </p>
            </div>

            {/* Bottom Citation & Action Link */}
            <div className="pt-6 border-t border-[rgba(17,17,16,0.10)] flex flex-wrap items-center justify-between gap-4">
              <div className="border-l-2 border-[#8B7355] pl-3.5 py-0.5">
                <p className="text-[0.68rem] tracking-[0.2em] uppercase text-[#111110] font-semibold">
                  Apex Court &amp; Superior Judiciary
                </p>
                <p className="text-[0.6rem] text-[#8A8780] tracking-widest uppercase">
                  Advocates • Solicitors • Corporate Counsellors
                </p>
              </div>

              <Link
                href="/legacy"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] font-medium text-[0.65rem] tracking-[0.18em] uppercase transition-colors duration-200 shadow-sm"
              >
                <span>Read Full History</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column — Framed Chambers Archive & 2x2 Metric Badges (Zero Blank Space) */}
          <div className="lg:col-span-5 xl:col-span-5 bg-[#F2EFE9] px-5 sm:px-8 lg:px-7 xl:px-9 py-10 sm:py-14 lg:py-16 flex flex-col justify-between gap-6">

            {/* Top: Museum-Grade Framed Chambers Photo */}
            <div className="relative bg-[#FAF8F3] p-3 sm:p-3.5 border border-[rgba(17,17,16,0.12)] shadow-[0_6px_28px_rgba(17,17,16,0.06)]">
              {/* Corner Brackets */}
              <span className="corner-bracket-tl" />
              <span className="corner-bracket-tr" />
              <span className="corner-bracket-bl" />
              <span className="corner-bracket-br" />

              {/* Photo Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-[rgba(17,17,16,0.10)] bg-[#111110] group">
                <Image
                  src="/desk-pakistan.jpg"
                  alt="AST Law Firm — Chambers & Legal Research"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 95vw, (max-width: 1200px) 45vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Photo Caption Bar */}
              <div className="pt-3 px-1 flex items-center justify-between border-t border-[rgba(17,17,16,0.08)] mt-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355] animate-pulse" />
                  <span className="text-[0.62rem] tracking-[0.2em] uppercase text-[#5C5A54] font-medium">
                    Chambers &amp; Legal Research
                  </span>
                </div>
                <span className="text-[0.58rem] tracking-[0.16em] uppercase text-[#8A8780] font-medium">
                  Est. 1992
                </span>
              </div>
            </div>

            {/* Bottom: 2x2 Heritage Credentials & Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] p-4 flex flex-col justify-between min-h-[96px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl sm:text-2xl font-serif text-[#06231B] font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    34+
                  </span>
                  <Award className="w-3.5 h-3.5 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[#111110] font-semibold leading-tight">
                    Years Legacy
                  </p>
                  <p className="text-[0.58rem] text-[#8A8780] mt-0.5 leading-snug">
                    Continuous practice since 1992
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] p-4 flex flex-col justify-between min-h-[96px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl sm:text-2xl font-serif text-[#06231B] font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    1992
                  </span>
                  <Scale className="w-3.5 h-3.5 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[#111110] font-semibold leading-tight">
                    Inception
                  </p>
                  <p className="text-[0.58rem] text-[#8A8780] mt-0.5 leading-snug">
                    Founded as Tanawal Law Associates
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] p-4 flex flex-col justify-between min-h-[96px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-base sm:text-lg font-serif text-[#06231B] font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    Apex Court
                  </span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[#111110] font-semibold leading-tight">
                    Supreme Court
                  </p>
                  <p className="text-[0.58rem] text-[#8A8780] mt-0.5 leading-snug">
                    Advocate Supreme Court of Pakistan
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] p-4 flex flex-col justify-between min-h-[96px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl sm:text-2xl font-serif text-[#06231B] font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    Dual
                  </span>
                  <Building2 className="w-3.5 h-3.5 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[#111110] font-semibold leading-tight">
                    Chambers
                  </p>
                  <p className="text-[0.58rem] text-[#8A8780] mt-0.5 leading-snug">
                    Islamabad &amp; Abbottabad Bar Plaza
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          5. PRACTICE AREAS — Numbered Grid with Light Black Shade & Animations
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#EAE6DC] text-[#111110] border-t border-b border-[rgba(17,17,16,0.12)] py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle light black / smoky ambient shade wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.04] via-black/[0.02] to-black/[0.04] pointer-events-none" />

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(17,17,16,0.12)]">
            <div>
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#8B7355] block mb-3 font-medium">
                Legal Services
              </span>
              <h2
                className="text-4xl sm:text-5xl text-[#111110]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
              >
                Practice Areas
              </h2>
            </div>
            <p className="text-[#5C5A54] text-sm max-w-md leading-relaxed">
              Professional legal services provided by AST Law Firm to individuals, businesses, institutions and organizations.
            </p>
          </div>

          {/* Architectural Cards with Light Shade & Running Corner Beam Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 xl:gap-5 pt-8">
            {practiceAreas.map((practice, idx) => (
              <Link
                key={practice.slug}
                href={`/practice-areas/${practice.slug}`}
                className="relative p-[1.5px] overflow-hidden group bg-[rgba(17,17,16,0.08)] hover:shadow-[0_12px_28px_-5px_rgba(0,0,0,0.14)] transition-all duration-300 block"
              >
                {/* Continuous Running Beam Around Corners */}
                <div
                  className="absolute inset-[-180%] animate-border-beam opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg 315deg, rgba(139,115,85,0.85) 345deg, rgba(6,35,27,1) 360deg)",
                    animationDelay: `${idx * 0.8}s`,
                  }}
                />

                {/* Inner Card Content with Subtle Light Black / Smoky Tint */}
                <div className="relative bg-[#F4F1EA] group-hover:bg-[#FCFBF8] p-6 sm:p-7 h-full flex flex-col justify-between transition-colors duration-300 min-h-[170px]">
                  {/* Top Row: Number + Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-2xl text-[#8B7355] leading-none"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
                    >
                      {practice.number}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8B7355] group-hover:text-[#06231B] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-medium text-[#111110] mb-2 group-hover:text-[#06231B] transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-[#5C5A54] text-xs leading-relaxed line-clamp-2">
                      {practice.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-10 flex justify-between items-center text-xs border-t border-[rgba(17,17,16,0.12)] mt-8">
            <span className="tracking-[0.16em] uppercase text-[#8A8780]">
              {practiceAreas.length.toString().padStart(2, "0")} Practice Areas
            </span>
            <Link
              href="/practice-areas"
              className="text-[#111110] hover:text-[#8B7355] tracking-widest uppercase text-[0.65rem] inline-flex items-center gap-1.5 transition-colors font-medium"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          6. LEADERSHIP — Dark Section
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#0F0E0D] text-[#EDEDEC] grid grid-cols-1 lg:grid-cols-2">
        {/* Left — Dark Interior Photo */}
        <div className="relative min-h-[50vh] lg:min-h-[600px] overflow-hidden">
          <Image
            src="/firm-dark.jpg"
            alt="AST Law Firm — Private Chambers Interior"
            fill
            className="object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E0D]/50 to-transparent" />
        </div>

        {/* Right — Leadership */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-24 flex flex-col justify-center border-l border-white/10">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#6B6860] block mb-8">
            Leadership
          </span>
          <h2
            className="text-3xl sm:text-4xl text-[#F7F5EF] mb-10 leading-[1.2]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            AST — The Present &amp; The Future
          </h2>

          <div className="space-y-8">
            {/* Founder */}
            <div className="border-t border-white/10 pt-8">
              <div className="border-l-2 border-[#8B7355] pl-3 mb-2.5">
                <p className="text-xs sm:text-[0.8rem] tracking-[0.16em] uppercase text-[#F7F5EF] font-bold">
                  Founder &amp; Senior Partner
                </p>
              </div>
              <h3
                className="text-xl sm:text-2xl text-[#F7F5EF] mb-1 font-semibold"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
              >
                {principals.founder.name}
              </h3>
              <p className="text-[0.68rem] tracking-[0.16em] uppercase text-[#8B7355] font-medium">
                {principals.founder.designation}
              </p>
            </div>

            {/* Co-Founder */}
            <div className="border-t border-white/10 pt-8">
              <div className="border-l-2 border-[#8B7355] pl-3 mb-2.5">
                <p className="text-xs sm:text-[0.8rem] tracking-[0.16em] uppercase text-[#F7F5EF] font-bold">
                  Co-Founder &amp; Managing Partner
                </p>
              </div>
              <h3
                className="text-xl sm:text-2xl text-[#F7F5EF] mb-1 font-semibold"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
              >
                {principals.coFounder.name}
              </h3>
              <p className="text-[0.68rem] tracking-[0.16em] uppercase text-[#8B7355] font-medium">
                {principals.coFounder.designation}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/teams"
              className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.22em] uppercase text-[#A09D96] border-b border-[#3D3C39] pb-0.5 hover:text-[#F7F5EF] hover:border-[#6B6860] transition-colors"
            >
              <span>Meet the Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          7. FINAL CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#EFECE3] border-t border-[rgba(17,17,16,0.10)] py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[rgba(17,17,16,0.2)]" />
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#8A8780]">Engagement</span>
            <span className="w-12 h-[1px] bg-[rgba(17,17,16,0.2)]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-[#111110] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Discuss Your Legal Matter With AST Law Firm
          </h2>

          <p className="text-sm sm:text-base text-[#5C5A54] max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you require legal representation, advisory support, documentation or assistance in navigating a legal dispute, AST Law Firm provides a structured and professional approach to understanding your matter and identifying available legal options.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#111110] text-[#F7F5EF] hover:bg-[#2D2C2A] text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[rgba(17,17,16,0.25)] text-[#2D2C2A] hover:border-[#111110] text-[0.7rem] tracking-[0.18em] uppercase transition-all duration-300"
            >
              <span>Contact the Firm</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
