import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { practiceAreas } from "@/data/practiceAreas";
import { attorneys } from "@/data/attorneys";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Scale,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Briefcase,
  FileCheck,
  Compass,
  MessageCircle,
  Phone,
  Landmark,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const { legacy } = siteConfig;

  return (
    <div className="bg-[#F7F5EF] text-[#111110] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          1. HERO — Classical Architectural Authority
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#F7F5EF] flex flex-col justify-between overflow-hidden border-b border-[rgba(17,17,16,0.10)]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch flex-grow">

          {/* LEFT: Legal Authority & Positioning */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:pl-10 xl:pl-14 lg:pr-6 pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-16 space-y-5 sm:space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-5 h-[1.5px] bg-[#06231B]" />
              <span className="text-[0.65rem] sm:text-xs tracking-[0.28em] uppercase text-[#06231B] font-semibold">
                AST LAW FIRM · EST. {legacy.since}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.4rem] leading-[1.15] text-[#0A1A15] tracking-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              <div>Professional Legal</div>
              <div className="mt-1">Representation.</div>
              <div
                className="mt-2 text-[#06231B]"
                style={{ fontStyle: "italic", fontWeight: 300 }}
              >
                Strategic Counsel.
              </div>
              <div className="mt-1">
                Trusted Advocacy.
              </div>
            </h1>

            {/* Supporting description */}
            <p className="text-[#55534E] text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal">
              AST Law Firm provides superior court litigation, legal advisory, corporate governance, and commercial documentation across Pakistan. Backed by a continuous 34-year lineage rooted in Supreme Court jurisprudence.
            </p>

            {/* Left-bordered Multi-City Leadership citation */}
            <div className="border-l-2 border-[#8B7355] pl-3.5 py-1 max-w-xl bg-[#FAF8F3] border border-y-0 border-r-0 border-[rgba(17,17,16,0.06)] p-3">
              <p className="text-[0.72rem] sm:text-xs text-[#5C5A54] leading-relaxed">
                Led by <strong className="text-[#111110] font-medium">Haji Sabir Hussain Tanoli</strong> (Advocate Supreme Court of Pakistan), <strong className="text-[#111110] font-medium">Ahmed Hussain Tanoli</strong> (Advocate High Court, Managing Partner), and <strong className="text-[#111110] font-medium">Muhammad Javed Khan Tanoli</strong> (Advocate High Court Sindh, Corporate Counsel Karachi).
              </p>
            </div>

            {/* 2 Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] font-medium text-[0.68rem] sm:text-xs tracking-[0.16em] uppercase transition-all duration-200 shadow-sm"
              >
                <span>Request a Consultation</span>
                <span className="text-sm leading-none transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#06231B]/30 hover:border-[#06231B] text-[#06231B] hover:bg-[#06231B]/5 font-medium text-[0.68rem] sm:text-xs tracking-[0.15em] uppercase transition-colors duration-200 bg-transparent"
              >
                <span>Explore Practice Areas</span>
                <span className="text-xs leading-none">↗</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Authentic AST Reception Wall in Arched Frame */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-end justify-end pt-6 lg:pt-20 min-h-[320px] sm:min-h-[400px] lg:min-h-[520px]">
            <div className="relative w-full h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[540px] rounded-tl-[60px] sm:rounded-tl-[90px] lg:rounded-tl-[130px] overflow-hidden border-t border-l border-[rgba(17,17,16,0.15)] bg-[#111110] shadow-[-12px_12px_35px_-8px_rgba(0,0,0,0.18)] group">
              <Image
                src="/hero-ast-wall-feature.jpg"
                alt="AST Law Firm — Reception & Chamber Wall"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

              {/* Verified Badge Overlay at bottom-right */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-[#06231B]/90 backdrop-blur-md border border-[#8B7355]/40 p-3 sm:p-4 text-white flex items-center justify-between pointer-events-none">
                <div className="space-y-0.5">
                  <span className="text-[0.58rem] sm:text-[0.62rem] tracking-[0.22em] uppercase text-[#8B7355] font-semibold block">
                    Institutional Presence
                  </span>
                  <p className="text-xs sm:text-sm font-serif text-[#FAF8F4] font-medium" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    Islamabad · Karachi · Abbottabad
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[0.58rem] sm:text-[0.62rem] tracking-[0.18em] uppercase text-[#C8C4B8] block">
                    Lineage
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[#FAF8F4] font-semibold">
                    1992 — 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════
            AUTHORITY & JURISDICTION BAR (Spacious Proof Matrix)
        ═══════════════════════════════════════════════════════ */}
        <div className="border-t border-[rgba(17,17,16,0.12)] bg-[#EFECE3]/95 py-8 sm:py-10 lg:py-12 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            <div className="flex items-center gap-4 p-2">
              <div className="w-10 h-10 rounded-sm bg-[#06231B] text-[#FAF8F4] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Landmark className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.68rem] sm:text-[0.74rem] tracking-[0.16em] uppercase text-[#111110] font-bold">Apex Court</p>
                <p className="text-xs text-[#5C5A54] mt-0.5">Supreme Court of Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="w-10 h-10 rounded-sm bg-[#06231B] text-[#FAF8F4] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Building2 className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.68rem] sm:text-[0.74rem] tracking-[0.16em] uppercase text-[#111110] font-bold">Islamabad Principal</p>
                <p className="text-xs text-[#5C5A54] mt-0.5">Barrister Arcade, G 10/1</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="w-10 h-10 rounded-sm bg-[#06231B] text-[#FAF8F4] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Briefcase className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.68rem] sm:text-[0.74rem] tracking-[0.16em] uppercase text-[#111110] font-bold">Karachi Practice</p>
                <p className="text-xs text-[#5C5A54] mt-0.5">High Court of Sindh Counsel</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="w-10 h-10 rounded-sm bg-[#06231B] text-[#FAF8F4] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Award className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.68rem] sm:text-[0.74rem] tracking-[0.16em] uppercase text-[#111110] font-bold">34+ Years Tradition</p>
                <p className="text-xs text-[#5C5A54] mt-0.5">Est. 1992 Lineage</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          2. CHAMBER CREED & STRATEGIC CHARTER
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-[rgba(17,17,16,0.10)] grid grid-cols-1 lg:grid-cols-2 bg-[#FAF8F4]">
        {/* Mission */}
        <div className="px-5 sm:px-8 lg:px-12 py-14 sm:py-18 border-b lg:border-b-0 lg:border-r border-[rgba(17,17,16,0.10)] relative">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-5 h-[1.5px] bg-[#8B7355]" />
            <span className="text-[0.65rem] sm:text-xs tracking-[0.28em] uppercase text-[#8B7355] font-semibold">Institutional Mission</span>
          </div>
          <blockquote
            className="text-xl sm:text-2xl lg:text-[1.85rem] leading-[1.32] text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
          >
            "To deliver rigorous, principled, and outcome-focused legal representation through exhaustive case preparation, superior court advocacy, and strategic counsel tailored to complex legal landscapes."
          </blockquote>
          <p className="text-xs text-[#6B6860] mt-4 font-mono tracking-wider uppercase">
            — AST Law Firm Chambers Charter
          </p>
        </div>

        {/* Vision */}
        <div className="px-5 sm:px-8 lg:px-12 py-14 sm:py-18 bg-[#EFECE3]/70">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-5 h-[1.5px] bg-[#06231B]" />
            <span className="text-[0.65rem] sm:text-xs tracking-[0.28em] uppercase text-[#06231B] font-semibold">Long-Term Vision</span>
          </div>
          <blockquote
            className="text-xl sm:text-2xl lg:text-[1.85rem] leading-[1.32] text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
          >
            "To endure as one of Pakistan's most respected full-service legal chambers, trusted across Supreme Court advocacy, commercial corporate practice, and nationwide dispute resolution."
          </blockquote>
          <p className="text-xs text-[#6B6860] mt-4 font-mono tracking-wider uppercase">
            — Professional Standards &amp; Lineage
          </p>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          3. OUR APPROACH — 5 Principles (Responsive Cards)
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-[rgba(17,17,16,0.10)] py-16 sm:py-24 bg-[#F7F5EF]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[rgba(17,17,16,0.12)]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-[1.5px] bg-[#8B7355]" />
                <span className="text-[0.68rem] sm:text-xs tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                  Chamber Disciplines
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] leading-[1.15] tracking-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Our Guiding Principles
              </h2>
            </div>
            <p className="text-[#5C5A54] text-xs sm:text-sm max-w-md leading-relaxed font-normal">
              The ethical standards and procedural discipline guiding AST Law Firm in every judicial and corporate engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 pt-8">
            {[
              {
                num: "01",
                title: "Integrity",
                desc: "Uncompromising adherence to professional ethics, courtroom honesty, and transparent client reporting.",
              },
              {
                num: "02",
                title: "Professionalism",
                desc: "Rigorous legal research, meticulous procedural drafting, and composed courtroom advocacy.",
              },
              {
                num: "03",
                title: "Diligence",
                desc: "Exhaustive review of factual evidence, documentary records, and statutory limitation periods.",
              },
              {
                num: "04",
                title: "Confidentiality",
                desc: "Absolute privilege and discretion safeguarding all corporate data, proprietary records, and client files.",
              },
              {
                num: "05",
                title: "Advocacy",
                desc: "Assertive, persuasive, and seasoned representation across trial benches, High Courts, and the Supreme Court.",
              },
            ].map((p, idx) => (
              <div
                key={p.title}
                className="relative p-[1.5px] overflow-hidden group bg-[rgba(17,17,16,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(17,17,16,0.12)] transition-all duration-300"
              >
                <div
                  className="absolute inset-[-180%] animate-border-beam opacity-35 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg 315deg, rgba(139,115,85,0.85) 345deg, rgba(6,35,27,1) 360deg)",
                    animationDelay: `${idx * 0.7}s`,
                  }}
                />

                <div className="relative bg-[#FAF8F3] group-hover:bg-[#FFFFFF] p-6 sm:p-7 h-full min-h-[220px] sm:min-h-[250px] flex flex-col justify-between transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-[rgba(17,17,16,0.06)]">
                    <span
                      className="text-base sm:text-lg font-serif text-[#8B7355] tracking-widest font-semibold"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {p.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#8B7355]/40 group-hover:bg-[#06231B] group-hover:scale-125 transition-all duration-300" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <h3
                      className="text-xl sm:text-2xl text-[#111110] mb-2 font-medium tracking-tight group-hover:text-[#06231B] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[#5C5A54] text-xs sm:text-[0.82rem] leading-relaxed">
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
          4. HERITAGE & LEGACY (1992 — 2026)
      ═══════════════════════════════════════════════════════ */}
      <section id="legacy" className="border-t border-[rgba(17,17,16,0.10)] bg-[#FAF8F4] relative overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Column — Historical Narrative & Epoch Cards */}
          <div className="lg:col-span-7 xl:col-span-7 px-4 sm:px-6 md:px-8 lg:px-12 py-14 sm:py-18 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[rgba(17,17,16,0.10)]">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-[#8B7355]" />
                <span className="text-[0.65rem] sm:text-xs tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                  Chamber Lineage Since {legacy.since} · Over 34 Years
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-[2.6rem] text-[#111110] mb-5 leading-[1.18] tracking-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                A Tradition of Principled Courtroom Advocacy
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#5C5A54] leading-relaxed mb-6 font-normal">
                AST Law Firm is the modern evolution of Tanawal Law Associates (TLA), founded in 1992 by Haji Sabir Hussain Tanoli. For over three decades, our chambers have shaped key legal precedents across constitutional, civil, and corporate jurisprudence.
              </p>

              {/* Two Heritage Epoch Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 sm:p-5 bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] hover:border-[#8B7355]/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-serif text-[#8B7355] tracking-widest font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                      FOUNDATION · 1992
                    </span>
                    <span className="text-[0.55rem] tracking-[0.16em] uppercase text-[#5C5A54] bg-[#EFECE3] px-2 py-0.5 font-medium">
                      Origin
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#111110] mb-1">
                    Tanawal Law Associates (TLA)
                  </h4>
                  <p className="text-xs text-[#5C5A54] leading-relaxed">
                    Founded by Haji Sabir Hussain Tanoli, establishing judicial excellence before superior courts and high trial tribunals.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] hover:border-[#06231B]/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-serif text-[#06231B] tracking-widest font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                      UNIFIED PRACTICE · 2026
                    </span>
                    <span className="text-[0.55rem] tracking-[0.16em] uppercase text-[#06231B] bg-[#06231B]/10 px-2 py-0.5 font-medium">
                      Modern Era
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#111110] mb-1">
                    AST LAW FIRM
                  </h4>
                  <p className="text-xs text-[#5C5A54] leading-relaxed">
                    Consolidated multi-city practice under Managing Partner Ahmed Hussain Tanoli &amp; Karachi Partner Javed Khan Tanoli.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[rgba(17,17,16,0.10)] flex flex-wrap items-center justify-between gap-4">
              <div className="border-l-2 border-[#8B7355] pl-3 py-0.5">
                <p className="text-xs sm:text-[0.78rem] tracking-[0.18em] uppercase text-[#111110] font-bold">
                  Supreme Court &amp; Superior Judiciary
                </p>
                <p className="text-[0.62rem] text-[#8A8780] tracking-wider uppercase">
                  Advocates · Solicitors · Corporate Counsellors
                </p>
              </div>

              <Link
                href="/legacy"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] font-medium text-[0.65rem] sm:text-xs tracking-[0.16em] uppercase transition-colors duration-200 shadow-sm"
              >
                <span>Read Full History</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column — Framed Archive & Stats */}
          <div className="lg:col-span-5 xl:col-span-5 bg-[#F2EFE9] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col justify-between gap-6">
            <div className="relative bg-[#FAF8F3] p-3 sm:p-4 border border-[rgba(17,17,16,0.12)] shadow-md">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-[rgba(17,17,16,0.10)] bg-[#111110] group">
                <Image
                  src="/desk-pakistan.jpg"
                  alt="AST Law Firm — Chambers & Legal Research"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 95vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="pt-3 px-1 flex items-center justify-between border-t border-[rgba(17,17,16,0.08)] mt-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355] animate-pulse" />
                  <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.18em] uppercase text-[#5C5A54] font-semibold">
                    Chambers &amp; Legal Research
                  </span>
                </div>
                <span className="text-[0.6rem] tracking-[0.14em] uppercase text-[#8A8780] font-mono">
                  Est. 1992
                </span>
              </div>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] p-4 flex flex-col justify-between min-h-[92px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl sm:text-2xl font-serif text-[#06231B] font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    34+
                  </span>
                  <Award className="w-4 h-4 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[#111110] font-bold">Years Legacy</p>
                  <p className="text-[0.58rem] text-[#8A8780] mt-0.5">Continuous Practice Since 1992</p>
                </div>
              </div>

              <div className="bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] p-4 flex flex-col justify-between min-h-[92px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl sm:text-2xl font-serif text-[#06231B] font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    1992
                  </span>
                  <Scale className="w-4 h-4 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[#111110] font-bold">Inception</p>
                  <p className="text-[0.58rem] text-[#8A8780] mt-0.5">Tanawal Law Associates</p>
                </div>
              </div>

              <div className="bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] p-4 flex flex-col justify-between min-h-[92px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-base sm:text-lg font-serif text-[#06231B] font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    Apex Court
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[#111110] font-bold">Supreme Court</p>
                  <p className="text-[0.58rem] text-[#8A8780] mt-0.5">Advocate Supreme Court</p>
                </div>
              </div>

              <div className="bg-[#FAF8F3] border border-[rgba(17,17,16,0.10)] p-4 flex flex-col justify-between min-h-[92px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl sm:text-2xl font-serif text-[#06231B] font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    3 Cities
                  </span>
                  <Building2 className="w-4 h-4 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[#111110] font-bold">Chambers Network</p>
                  <p className="text-[0.58rem] text-[#8A8780] mt-0.5">Islamabad · Karachi · Abbottabad</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          5. PRACTICE AREAS — Comprehensive Grid with Direct Links
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#EAE6DC] text-[#111110] border-t border-b border-[rgba(17,17,16,0.12)] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.03] via-transparent to-black/[0.03] pointer-events-none" />

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[rgba(17,17,16,0.12)]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-[1.5px] bg-[#8B7355]" />
                <span className="text-[0.68rem] sm:text-xs tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                  Practice Disciplines
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] tracking-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Core Practice Areas
              </h2>
            </div>
            <p className="text-[#5C5A54] text-xs sm:text-sm max-w-md leading-relaxed">
              Full-service legal counsel across superior court litigation, regulatory compliance, corporate governance, and complex commercial disputes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-8">
            {practiceAreas.map((practice, idx) => (
              <Link
                key={practice.slug}
                href={`/practice-areas/${practice.slug}`}
                className="relative p-[1.5px] overflow-hidden group bg-[rgba(17,17,16,0.08)] hover:shadow-[0_12px_28px_-5px_rgba(0,0,0,0.14)] transition-all duration-300 block"
              >
                <div
                  className="absolute inset-[-180%] animate-border-beam opacity-35 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg 315deg, rgba(139,115,85,0.85) 345deg, rgba(6,35,27,1) 360deg)",
                    animationDelay: `${idx * 0.7}s`,
                  }}
                />

                <div className="relative bg-[#F4F1EA] group-hover:bg-[#FCFBF8] p-6 sm:p-7 h-full flex flex-col justify-between transition-colors duration-300 min-h-[190px]">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-2xl text-[#8B7355] leading-none"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
                      >
                        {practice.number}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#8B7355] group-hover:text-[#06231B] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-[#111110] mb-2 group-hover:text-[#06231B] transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-[#5C5A54] text-xs leading-relaxed line-clamp-2 mb-3">
                      {practice.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[rgba(17,17,16,0.08)] flex items-center justify-between">
                    <span className="text-[0.62rem] tracking-wider uppercase text-[#8A8780] font-medium group-hover:text-[#06231B] transition-colors">
                      Explore Framework →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-8 flex flex-wrap justify-between items-center text-xs border-t border-[rgba(17,17,16,0.12)] mt-8 gap-4">
            <span className="tracking-[0.16em] uppercase text-[#8A8780] font-medium">
              {practiceAreas.length.toString().padStart(2, "0")} Specialized Practice Portfolios
            </span>
            <Link
              href="/practice-areas"
              className="text-[#111110] hover:text-[#8B7355] tracking-widest uppercase text-[0.68rem] inline-flex items-center gap-1.5 transition-colors font-semibold"
            >
              <span>View All Practice Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          6. THE AST CHAMBER ADVANTAGE (Why Retain AST Law Firm)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#FAF8F4] border-b border-[rgba(17,17,16,0.10)]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[1.5px] bg-[#8B7355]" />
              <span className="text-[0.68rem] sm:text-xs tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                Institutional Capabilities
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] tracking-tight leading-[1.15]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              Why Retain AST Law Firm
            </h2>
            <p className="text-[#5C5A54] text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
              We provide institutional clients, corporate enterprises, and high-net-worth individuals with seamless multi-jurisdictional advocacy and strategic counsel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 bg-[#FFFFFF] border border-[rgba(17,17,16,0.10)] space-y-3 shadow-sm hover:border-[#8B7355]/50 transition-colors">
              <div className="w-10 h-10 bg-[#06231B] text-[#FAF8F4] flex items-center justify-center">
                <Landmark className="w-5 h-5 text-[#8B7355]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111110]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Supreme Court Authority
              </h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Direct enrollment and appellate advocacy before the Supreme Court of Pakistan and High Courts across all provinces.
              </p>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-[rgba(17,17,16,0.10)] space-y-3 shadow-sm hover:border-[#8B7355]/50 transition-colors">
              <div className="w-10 h-10 bg-[#06231B] text-[#FAF8F4] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#8B7355]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111110]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Multi-City Presence
              </h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Active chambers in Islamabad, corporate counsel in Karachi (Sindh), and judicial complex liaison in Abbottabad.
              </p>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-[rgba(17,17,16,0.10)] space-y-3 shadow-sm hover:border-[#8B7355]/50 transition-colors">
              <div className="w-10 h-10 bg-[#06231B] text-[#FAF8F4] flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-[#8B7355]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111110]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Pre-Litigation Diligence
              </h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Exhaustive statutory review, title audits, and evidence structuring to minimize exposure and maximize dispute leverage.
              </p>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-[rgba(17,17,16,0.10)] space-y-3 shadow-sm hover:border-[#8B7355]/50 transition-colors">
              <div className="w-10 h-10 bg-[#06231B] text-[#FAF8F4] flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#8B7355]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111110]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Corporate Retainers
              </h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Ongoing legal counsel for company boards, commercial documentation, regulatory compliance, and swift contract turnaround.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          7. PARTNERS & LEADERSHIP (ALL 3 PARTNERS SHOWCASE)
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#0D1914] text-[#FAF8F4] py-16 sm:py-24 border-t border-b border-[rgba(255,255,255,0.1)]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/15">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-[1.5px] bg-[#8B7355]" />
                <span className="text-[0.68rem] sm:text-xs tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                  Executive Counsel
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F4] tracking-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Partners &amp; Leadership
              </h2>
            </div>
            <p className="text-[#B5B2AA] text-xs sm:text-sm max-w-md leading-relaxed">
              The founding principals and corporate counsel guiding strategic direction, superior court litigation, and client advocacy across AST Law Firm.
            </p>
          </div>

          {/* 3-Column Executive Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-10">
            {attorneys.map((partner) => (
              <div
                key={partner.slug}
                className="bg-[#142620] border border-white/10 overflow-hidden group hover:border-[#8B7355]/60 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Portrait with 3:4 Aspect Ratio */}
                  <div className="relative aspect-[3/4] w-full bg-[#0A1511] overflow-hidden">
                    {partner.image && (
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                        className="object-cover object-top filter contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#142620] via-transparent to-black/20 pointer-events-none" />

                    {/* Top Crest / Role Badge */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <div className="w-8 h-8 border border-[#8B7355]/40 bg-[#FAF8F4]/90 backdrop-blur-sm flex items-center justify-center p-1 shadow-sm">
                        <Image src="/branding/ast-monogram-exact.png" alt="AST Crest" width={22} height={22} className="object-contain" />
                      </div>
                      <span className="text-[0.55rem] tracking-[0.2em] uppercase font-mono px-2 py-0.5 bg-[#06231B] text-[#FAF8F4] font-semibold border border-[#8B7355]/30 shadow-sm">
                        PARTNER
                      </span>
                    </div>

                    {/* Overlay Title at bottom of photo */}
                    <div className="absolute inset-x-0 bottom-0 p-4 pt-8 bg-gradient-to-t from-[#142620] to-transparent pointer-events-none">
                      <div className="border-l-2 border-[#8B7355] pl-2 py-0.5 mb-1">
                        <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.16em] uppercase text-[#FAF8F4] font-bold block">
                          {partner.role}
                        </span>
                      </div>
                      <h3
                        className="text-xl sm:text-2xl text-[#FAF8F4] font-semibold"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
                      >
                        {partner.name}
                      </h3>
                      <p className="text-[0.62rem] sm:text-[0.66rem] tracking-[0.14em] uppercase text-[#8B7355] font-medium mt-0.5">
                        {partner.designation}
                      </p>
                    </div>
                  </div>

                  {/* Bio summary & Credentials */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs text-[#C8C4B8] leading-relaxed line-clamp-3">
                      {partner.shortBio}
                    </p>

                    <div className="border-t border-white/10 pt-3 space-y-1.5">
                      <p className="text-[0.58rem] tracking-[0.18em] uppercase text-[#8A8780] font-semibold">
                        Court Admissions
                      </p>
                      {partner.admissions.slice(0, 2).map((adm, i) => (
                        <p key={i} className="text-[0.72rem] text-[#E5DFD3] leading-tight">
                          · {adm}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-5 sm:p-6 pt-0 border-t border-white/10 mt-2">
                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      href={`/attorneys/${partner.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F4] hover:text-[#8B7355] uppercase tracking-wider font-medium transition-colors"
                    >
                      <span>View Full Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/contact?attorney=${encodeURIComponent(partner.name)}`}
                      className="text-[0.65rem] uppercase tracking-wider text-[#8B7355] hover:text-[#FAF8F4] transition-colors"
                    >
                      Consult →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10 text-center border-t border-white/10 mt-10">
            <Link
              href="/teams"
              className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#FAF8F4] text-[#06231B] hover:bg-[#EFECE3] font-semibold text-xs tracking-[0.18em] uppercase transition-colors duration-200 shadow-md"
            >
              <span>View Full Chamber Roster &amp; Associates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          8. CLIENT ENGAGEMENT & CONSULTATION PROTOCOL
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#F7F5EF] border-b border-[rgba(17,17,16,0.10)]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[1.5px] bg-[#8B7355]" />
              <span className="text-[0.68rem] sm:text-xs tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                Client Onboarding
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] tracking-tight leading-[1.15]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              Consultation Protocol
            </h2>
            <p className="text-[#5C5A54] text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
              We handle all client inquiries under strict standards of professional confidentiality and structured legal analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FAF8F3] border border-[rgba(17,17,16,0.12)] relative">
              <span className="text-3xl font-serif text-[#8B7355] font-semibold block mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                01
              </span>
              <h3 className="text-lg font-semibold text-[#111110] mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Confidential Briefing &amp; Records Review
              </h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Initial submission of case brief, agreements, or court records. Complete attorney-client confidentiality is maintained from the first contact.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F3] border border-[rgba(17,17,16,0.12)] relative">
              <span className="text-3xl font-serif text-[#8B7355] font-semibold block mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                02
              </span>
              <h3 className="text-lg font-semibold text-[#111110] mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Strategic Legal Assessment
              </h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Evaluation of jurisdiction, statutory limitation, applicable legal precedents, and available procedural remedies by chamber partners.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F3] border border-[rgba(17,17,16,0.12)] relative">
              <span className="text-3xl font-serif text-[#8B7355] font-semibold block mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                03
              </span>
              <h3 className="text-lg font-semibold text-[#111110] mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Formal Representation &amp; Court Action
              </h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Execution of Vakalatnama / Retainer agreement, drafting of pleadings, urgent interim injunctions, and assertive courtroom advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          9. FINAL EXECUTIVE CTA & DIRECT CONSULTATION
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#EFECE3] border-t border-[rgba(17,17,16,0.10)] py-18 sm:py-24 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-[#8B7355]" />
            <span className="text-[0.62rem] sm:text-xs tracking-[0.3em] uppercase text-[#8B7355] font-semibold">
              Retain Legal Counsel
            </span>
            <span className="w-10 h-[1px] bg-[#8B7355]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111110] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
          >
            Discuss Your Legal Matter With AST Law Firm
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#5C5A54] max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you require high-stakes litigation, corporate advisory, contract documentation, or legal representation before the superior courts of Pakistan, our partners provide seasoned counsel.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello AST Law Firm, I would like to schedule a consultation regarding a legal matter.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md"
            >
              <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-3.5 h-3.5 fill-current text-white" />
              </div>
              <span>Chat on WhatsApp · 0315 6559995</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#111110]/30 hover:border-[#111110] bg-transparent text-[#111110] text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              <span>Schedule Formal Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
