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
          1. HERO — Luxury Full-Bleed (Premium · No Scroll · Viewport Perfect)
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative bg-[#F7F5EF] overflow-hidden"
        style={{ height: "100vh", maxHeight: "100vh" }}
      >
        {/* RIGHT PANEL — frosted glass AST logo image, strictly right half */}
        <div
          className="absolute top-0 bottom-0 right-0 z-0 overflow-hidden hidden lg:block"
          style={{ width: "48%" }}
        >
          <Image
            src="/hero-glass-logo.png"
            alt="AST Law Firm"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            priority
            sizes="48vw"
          />
          {/* Dark glassy overlay — premium black glass effect */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(6,5,4,0.32)" }}
          />
          {/* Edge vignette — darker corners for depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 30%, rgba(0,0,0,0.22) 100%)",
            }}
          />
        </div>

        {/* Mobile fallback — wide reception image full-bleed with strong left overlay */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <Image
            src="/hero-luxury-bg.jpg"
            alt="AST Law Firm — Premium Chambers"
            fill
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #F7F5EF 0%, #F7F5EF 30%, rgba(247,245,239,0.85) 50%, rgba(247,245,239,0.55) 100%)",
            }}
          />
        </div>

        {/* TEXT CONTENT — vertically centered, clears navbar */}
        <div
          className="relative z-10 flex flex-col justify-center"
          style={{ height: "100vh", paddingTop: "56px" }}
        >
          <div className="px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[40rem]">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="w-7 h-px bg-[#8B7355]" />
              <span className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                AST Law Firm · Est. {legacy.since}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="leading-[1.10] tracking-[-0.01em] text-[#0A1A15] mb-4 sm:mb-5"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(2.4rem, 4.4vw + 0.5rem, 4.2rem)",
              }}
            >
              <span className="block">Professional Legal</span>
              <span className="block">Representation.</span>
              <span
                className="block mt-1.5"
                style={{ fontStyle: "italic", fontWeight: 300, color: "#8B7355" }}
              >
                Strategic Counsel.
              </span>
              <span className="block" style={{ color: "#0A1A15" }}>
                Trusted Advocacy.
              </span>
            </h1>

            {/* Gold accent rule */}
            <div className="w-12 h-px bg-[#8B7355]/50 mb-4 sm:mb-5" />

            {/* Description */}
            <p
              className="text-[#4E4C47] leading-[1.68] max-w-[30rem] mb-6 sm:mb-8"
              style={{ fontSize: "clamp(0.78rem, 1.1vw, 0.92rem)" }}
            >
              Superior court litigation, legal advisory, corporate governance, and commercial documentation across Pakistan — backed by a 34-year lineage rooted in Supreme Court jurisprudence.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] font-medium text-[0.65rem] sm:text-[0.70rem] tracking-[0.18em] uppercase transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <span>Request a Consultation</span>
                <span className="leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Thin gold bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-[#8B7355]/20" />
      </section>



      {/* ═══════════════════════════════════════════════════════
          2. JURISDICTION & CHAMBERS NETWORK (Full Bleed · No Outer Side Spaces · No Corners)
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F3] border-t border-b border-[rgba(17,17,16,0.14)] w-full py-8 sm:py-10 lg:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          
          {/* Header Eyebrow */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-[rgba(17,17,16,0.10)]">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-[1.5px] bg-[#8B7355]" />
              <span className="text-[0.65rem] sm:text-xs tracking-[0.26em] uppercase text-[#8B7355] font-semibold">
                Institutional Authority &amp; Nationwide Reach
              </span>
            </div>
            <span className="text-[0.58rem] sm:text-[0.62rem] tracking-[0.18em] uppercase text-[#6B6860] font-mono hidden sm:inline-block">
              Supreme Court · Islamabad · Karachi · Abbottabad
            </span>
          </div>

          {/* 4 Separate Cards Grid — Full Width Coverage & Zero Shadows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Box 1 — Apex Court */}
            <div className="bg-white border border-[rgba(17,17,16,0.14)] p-5 sm:p-6 hover:border-[#8B7355] transition-colors flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-sm bg-[#06231B] text-[#FAF8F4] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Landmark className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div className="min-w-0">
                <span className="text-[0.62rem] tracking-[0.2em] uppercase text-[#8B7355] font-semibold block">Apex Jurisdiction</span>
                <p className="text-base font-bold text-[#111110] mt-0.5" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Supreme Court</p>
                <p className="text-xs text-[#5C5A54] mt-0.5">Supreme Court of Pakistan</p>
              </div>
            </div>

            {/* Box 2 — Islamabad Principal */}
            <div className="bg-white border border-[rgba(17,17,16,0.14)] p-5 sm:p-6 hover:border-[#8B7355] transition-colors flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-sm bg-[#06231B] text-[#FAF8F4] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Building2 className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div className="min-w-0">
                <span className="text-[0.62rem] tracking-[0.2em] uppercase text-[#8B7355] font-semibold block">Principal Chambers</span>
                <p className="text-base font-bold text-[#111110] mt-0.5" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Islamabad Practice</p>
                <p className="text-xs text-[#5C5A54] mt-0.5">Barrister Arcade, G 10/1</p>
              </div>
            </div>

            {/* Box 3 — Karachi Practice */}
            <div className="bg-white border border-[rgba(17,17,16,0.14)] p-5 sm:p-6 hover:border-[#8B7355] transition-colors flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-sm bg-[#06231B] text-[#FAF8F4] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Briefcase className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div className="min-w-0">
                <span className="text-[0.62rem] tracking-[0.2em] uppercase text-[#8B7355] font-semibold block">Corporate Counsel</span>
                <p className="text-base font-bold text-[#111110] mt-0.5" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Karachi Chambers</p>
                <p className="text-xs text-[#5C5A54] mt-0.5">High Court of Sindh Counsel</p>
              </div>
            </div>

            {/* Box 4 — 34+ Years Lineage */}
            <div className="bg-white border border-[rgba(17,17,16,0.14)] p-5 sm:p-6 hover:border-[#8B7355] transition-colors flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-sm bg-[#06231B] text-[#FAF8F4] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Award className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div className="min-w-0">
                <span className="text-[0.62rem] tracking-[0.2em] uppercase text-[#8B7355] font-semibold block">Chamber Lineage</span>
                <p className="text-base font-bold text-[#111110] mt-0.5" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>34+ Years Legacy</p>
                <p className="text-xs text-[#5C5A54] mt-0.5">Continuous Practice Since 1992</p>
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

          {/* Left Column — Historical Narrative & Epoch Cards (Spacious, Elegant Typography) */}
          <div className="lg:col-span-7 xl:col-span-7 px-5 sm:px-8 lg:px-12 xl:px-14 py-14 sm:py-18 lg:py-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[rgba(17,17,16,0.10)]">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1.5px] bg-[#8B7355]" />
                <span className="text-[0.65rem] sm:text-xs tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                  Chamber Lineage Since {legacy.since} · Over 34 Years
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.75rem] text-[#111110] mb-6 leading-[1.18] tracking-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                A Tradition of Principled Courtroom Advocacy
              </h2>

              {/* Lead Paragraph */}
              <p
                className="text-base sm:text-lg text-[#2D2C2A] leading-relaxed mb-8 font-normal"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                AST Law Firm is the continuation of a distinguished legal practice with a professional legacy dating back to {legacy.since}—built on principled courtroom advocacy, meticulous preparation, and enduring client confidence across the superior courts of Pakistan.
              </p>

              {/* Two Heritage Epoch Cards (Generous & Spacious) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
                {/* 1992 Foundation */}
                <div className="p-5 sm:p-6 bg-[#FAF8F3] border border-[rgba(17,17,16,0.12)] hover:border-[#8B7355]/40 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-serif text-[#8B7355] tracking-widest font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                        FOUNDATION · 1992
                      </span>
                      <span className="text-[0.58rem] tracking-[0.16em] uppercase text-[#5C5A54] bg-[#EFECE3] px-2.5 py-0.5 font-medium">
                        Origin
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-[#111110] mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                      Tanawal Law Associates (TLA)
                    </h4>
                    <p className="text-xs sm:text-[0.8rem] text-[#5C5A54] leading-relaxed">
                      Established by <strong className="text-[#111110] font-medium">Haji Sabir Hussain Tanoli</strong>, Advocate Supreme Court of Pakistan, setting the foundation of trial and appellate advocacy.
                    </p>
                  </div>
                </div>

                {/* 2026 Unified Practice */}
                <div className="p-5 sm:p-6 bg-[#FAF8F3] border border-[rgba(17,17,16,0.12)] hover:border-[#06231B]/40 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-serif text-[#06231B] tracking-widest font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                        UNIFIED PRACTICE · 2026
                      </span>
                      <span className="text-[0.58rem] tracking-[0.16em] uppercase text-[#06231B] bg-[#06231B]/10 px-2.5 py-0.5 font-medium">
                        Modern Era
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-[#111110] mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                      AST LAW FIRM
                    </h4>
                    <p className="text-xs sm:text-[0.8rem] text-[#5C5A54] leading-relaxed">
                      Consolidated under <strong className="text-[#111110] font-medium">Haji Sabir Hussain Tanoli</strong> &amp; <strong className="text-[#111110] font-medium">Ahmed Hussain Tanoli</strong>, unifying senior Supreme Court advocacy with corporate counseling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Narrative Summary */}
              <p className="text-xs sm:text-sm text-[#5C5A54] leading-relaxed font-normal mb-8">
                AST combines the legacy and experience of a legal practice established in {legacy.since} with a contemporary multi-city professional identity serving corporate enterprises, financial institutions, and private clients across Pakistan.
              </p>
            </div>

            {/* Bottom Citation & Link */}
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
          <div className="lg:col-span-5 xl:col-span-5 bg-[#F2EFE9] px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 flex flex-col justify-between gap-5">
            <div className="relative bg-[#FAF8F3] p-3 sm:p-4 border border-[rgba(17,17,16,0.12)] shadow-md flex-1 flex flex-col justify-between">
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[350px] lg:min-h-[390px] overflow-hidden border border-[rgba(17,17,16,0.10)] bg-[#111110] group">
                <Image
                  src="/desk-pakistan.jpg"
                  alt="AST Law Firm — Chambers & Legal Research"
                  fill
                  className="object-cover object-left transition-transform duration-500 group-hover:scale-[1.02]"
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
                    3 Provinces
                  </span>
                  <Building2 className="w-4 h-4 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[#111110] font-bold">Jurisdictional Footprint</p>
                  <p className="text-[0.58rem] text-[#8A8780] mt-0.5">Islamabad (ICT) · KPK · Sindh</p>
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
          7. LEADERSHIP & COUNSEL (Theme Matched · Ivory, Charcoal & Gold)
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F3] text-[#111110] py-16 sm:py-24 border-t border-b border-[rgba(17,17,16,0.12)] relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[rgba(17,17,16,0.12)]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-[1.5px] bg-[#8B7355]" />
                <span className="text-[0.68rem] sm:text-xs tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                  Executive Counsel
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] tracking-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Partners &amp; Leadership
              </h2>
            </div>
            <p className="text-[#5C5A54] text-xs sm:text-sm max-w-md leading-relaxed">
              The founding principals and corporate counsel providing courtroom authority, strategic direction, and client advocacy across AST Law Firm.
            </p>
          </div>

          {/* 4 Animated Sleek Partner Cards (Compact Size) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-6">
            {attorneys.map((partner, idx) => (
              <div
                key={partner.slug}
                className="relative p-[1.5px] overflow-hidden group bg-[rgba(17,17,16,0.08)] hover:bg-[rgba(17,17,16,0.15)] transition-all duration-300"
              >
                {/* Continuous Running Border Beam Animation in Antique Gold */}
                <div
                  className="absolute inset-[-180%] animate-border-beam opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg 315deg, rgba(139,115,85,0.9) 345deg, rgba(17,17,16,1) 360deg)",
                    animationDelay: `${idx * 0.8}s`,
                  }}
                />

                {/* Inner Card Content — Compact */}
                <div className="relative bg-[#FFFFFF] group-hover:bg-[#FCFBF8] p-4 sm:p-5 h-full flex flex-col justify-between transition-colors duration-300">
                  <div>
                    {/* Top Row: Monogram Crest + Role Badge */}
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-[rgba(17,17,16,0.08)]">
                      <div className="w-7 h-7 border border-[#8B7355]/40 bg-[#FAF8F3] flex items-center justify-center p-1 shadow-sm">
                        <Image src="/branding/ast-monogram-exact.png" alt="AST Crest" width={18} height={18} className="object-contain" />
                      </div>
                      <span className="text-[0.52rem] tracking-[0.18em] uppercase font-mono px-2 py-0.5 bg-[#F7F5EF] text-[#111110] font-semibold border border-[rgba(17,17,16,0.12)]">
                        {partner.isFounder ? "FOUNDER" : "PARTNER"}
                      </span>
                    </div>

                    {/* Role Title with Gold Accent Bar */}
                    <div className="border-l-2 border-[#8B7355] pl-2 py-0.5 mb-1.5">
                      <span className="text-[0.62rem] tracking-[0.14em] uppercase text-[#111110] font-bold block">
                        {partner.role}
                      </span>
                    </div>

                    {/* Partner Name */}
                    <h3
                      className="text-lg sm:text-xl text-[#111110] font-semibold mb-0.5 group-hover:text-[#111110] transition-colors"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
                    >
                      {partner.name}
                    </h3>

                    {/* Court Designation */}
                    <p className="text-[0.62rem] tracking-[0.12em] uppercase text-[#8B7355] font-semibold mb-2.5">
                      {partner.designation}
                    </p>

                    {/* Bio Snippet — Compact 2 Lines */}
                    <p className="text-[0.75rem] text-[#5C5A54] leading-relaxed line-clamp-2 mb-3">
                      {partner.shortBio}
                    </p>
                  </div>

                  {/* Bottom: Link */}
                  <div className="pt-2.5 border-t border-[rgba(17,17,16,0.08)] flex items-center justify-between">
                    <Link
                      href={`/attorneys/${partner.slug}`}
                      className="text-[0.68rem] uppercase tracking-wider text-[#111110] hover:text-[#8B7355] inline-flex items-center gap-1 transition-colors font-semibold"
                    >
                      <span>View Profile</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link
                      href={`/contact?attorney=${encodeURIComponent(partner.name)}`}
                      className="text-[0.62rem] uppercase tracking-wider text-[#8B7355] hover:text-[#111110] transition-colors font-medium"
                    >
                      Consult →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Animated Main Action */}
          <div className="pt-12 text-center">
            <Link
              href="/teams"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#111110] text-[#FAF8F4] hover:bg-[#2A2825] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01]"
            >
              <span>Explore Our Leadership &amp; Team</span>
              <ArrowRight className="w-4 h-4 text-[#8B7355] transition-transform duration-300 group-hover:translate-x-1.5" />
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
          9. FINAL EXECUTIVE CTA & CHAMBER STANDARD
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-[#F7F5EF] via-[#EFECE3] to-[#E8E3D6] border-t border-[rgba(17,17,16,0.12)] py-16 sm:py-24 lg:py-28 relative overflow-hidden">
        {/* Subtle background ambient watermark */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-[0.03] pointer-events-none select-none">
          <Image src="/branding/ast-monogram-exact.png" alt="" fill className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column (5 Cols) — Official Chamber Standard Framed Showcase */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#FAF8F4] p-3 sm:p-4 border border-[rgba(17,17,16,0.14)] shadow-[0_12px_36px_rgba(17,17,16,0.08)]">
                {/* Antique Gold Corner Accents */}
                <div className="absolute top-2 left-2 text-[0.65rem] text-[#8B7355]/60 select-none font-serif">┌</div>
                <div className="absolute top-2 right-2 text-[0.65rem] text-[#8B7355]/60 select-none font-serif">┐</div>
                <div className="absolute bottom-2 left-2 text-[0.65rem] text-[#8B7355]/60 select-none font-serif">└</div>
                <div className="absolute bottom-2 right-2 text-[0.65rem] text-[#8B7355]/60 select-none font-serif">┘</div>

                {/* Top Badge Strip */}
                <div className="flex items-center justify-between pb-3 px-1 border-b border-[rgba(17,17,16,0.08)] mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 border border-[#8B7355]/40 bg-[#FAF8F3] flex items-center justify-center p-1 shadow-sm">
                      <Image src="/branding/ast-monogram-exact.png" alt="AST Crest" width={18} height={18} className="object-contain" />
                    </div>
                    <span className="text-[0.62rem] tracking-[0.2em] uppercase font-semibold text-[#06231B]">
                      AST Law Firm
                    </span>
                  </div>
                  <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase px-2 py-0.5 bg-[#06231B] text-[#FAF8F4] font-semibold">
                    OFFICIAL STANDARD
                  </span>
                </div>

                {/* The Flag Image */}
                <div className="relative aspect-[5/4] w-full overflow-hidden border border-[rgba(17,17,16,0.10)] bg-[#EAE6DC] group">
                  <Image
                    src="/ast-pakistan-flags.png"
                    alt="AST Law Firm Official Chamber Flag with Pakistan National Flag"
                    fill
                    className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 95vw, 480px"
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Caption Strip */}
                <div className="pt-3 px-1 mt-3 border-t border-[rgba(17,17,16,0.08)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                    <span className="text-[0.64rem] tracking-[0.16em] uppercase text-[#111110] font-bold">
                      Chamber Standard &amp; National Bar
                    </span>
                  </div>
                  <span className="text-[0.58rem] tracking-[0.14em] uppercase text-[#8A8780] font-mono">
                    Est. 1992
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols) — Executive Consultation & Retainer Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-[1.5px] bg-[#8B7355]" />
                  <span className="text-[0.65rem] sm:text-xs tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                    Retain Legal Counsel
                  </span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] tracking-tight leading-[1.15]"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
                >
                  Discuss Your Legal Matter With AST Law Firm
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-[#5C5A54] leading-relaxed">
                Carrying forward a founding legacy established in 1992 by Haji Sabir Hussain Tanoli (Advocate Supreme Court) and consolidated under Ahmed Hussain Tanoli (Advocate High Court), AST Law Firm counsels corporate enterprises, financial institutions, and private clients across superior appellate benches and regional subordinate courts.
              </p>

              {/* 3 Jurisdictional Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2 border-y border-[rgba(17,17,16,0.10)]">
                <div className="space-y-1">
                  <span className="block text-xs uppercase tracking-wider text-[#06231B] font-bold">
                    Supreme Court
                  </span>
                  <span className="text-[0.68rem] text-[#8A8780] block">
                    Apex Appellate Advocacy
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs uppercase tracking-wider text-[#06231B] font-bold">
                    3 Provinces
                  </span>
                  <span className="text-[0.68rem] text-[#8A8780] block">
                    ICT · KPK · Sindh Presence
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs uppercase tracking-wider text-[#06231B] font-bold">
                    Privileged
                  </span>
                  <span className="text-[0.68rem] text-[#8A8780] block">
                    Strict Confidentiality
                  </span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={getWhatsAppUrl("Hello AST Law Firm, I would like to schedule a consultation regarding a legal matter.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md"
                >
                  <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-white" />
                  </div>
                  <span>Chat on WhatsApp · 0315 6559995</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#111110]/40 hover:border-[#111110] bg-white/70 hover:bg-white text-[#111110] text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="tel:0512352396"
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-[#5C5A54] hover:text-[#06231B] text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8B7355]" />
                  <span>051-2352396</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
