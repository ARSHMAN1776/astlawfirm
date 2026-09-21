"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { attorneys } from "@/data/attorneys";
import { seniorAssociates, associates, supportStaff } from "@/data/team";
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  Award,
  FileText,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export default function TeamsPage() {
  const [openBio, setOpenBio] = useState<number | null>(null);

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">

      {/* ═══════════════════════════════════════════════════
          1. HEADER — ORIGINAL
      ═══════════════════════════════════════════════════ */}
      <section className="border-b border-[rgba(17,17,16,0.10)] pb-16 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-5 h-[1px] bg-[#8B7355]" />
            <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#8A8780] font-medium">
              Teams &amp; Legal Counsel
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-[#111110] max-w-4xl leading-[1.15]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            The Team at AST Law Firm
          </h1>

          <p className="text-[#5C5A54] text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
            AST Law Firm brings together experienced legal leadership, seasoned High Court Advocates, qualified associates, and judicial chamber clerks working seamlessly across superior and subordinate courts in Pakistan.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[rgba(17,17,16,0.08)]">
            <div>
              <span className="block text-2xl sm:text-3xl text-[#06231B] font-serif">10+</span>
              <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[#8A8780]">Advocates &amp; Counsel</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl text-[#06231B] font-serif">30+</span>
              <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[#8A8780]">Years Founding Legacy</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl text-[#06231B] font-serif">100%</span>
              <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[#8A8780]">Bar Enrolled Counsel</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl text-[#06231B] font-serif">Full</span>
              <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[#8A8780]">Chamber Registry Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. LEADERSHIP / PARTNERS — ORIGINAL SIZE
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-b border-[rgba(17,17,16,0.10)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-12">

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#8B7355] block mb-1">
                Executive Leadership
              </span>
              <h2
                className="text-3xl sm:text-4xl text-[#111110]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Partners &amp; Leadership
              </h2>
            </div>
            <p className="text-xs text-[#6B6860] max-w-md">
              The founding principals who provide strategic direction, courtroom authority, and seasoned counsel to all matters entrusted to AST Law Firm.
            </p>
          </div>

          <div className="space-y-12">
            {attorneys.map((attorney, index) => (
              <div
                key={attorney.slug}
                className={`border border-[rgba(17,17,16,0.13)] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_4px_24px_rgba(17,17,16,0.06)] ${
                  index % 2 === 0
                    ? "bg-gradient-to-b from-[#FAF8F4] via-[#F5F2EA] to-[#EFECE3]"
                    : "bg-gradient-to-b from-[#F5F2EA] via-[#EFECE3] to-[#E7E2D5]"
                }`}
              >
                {/* Subtle Gold Corner Accents */}
                <div className="absolute top-2 left-2 text-[0.65rem] text-[#8B7355]/50 select-none font-serif">┌</div>
                <div className="absolute top-2 right-2 text-[0.65rem] text-[#8B7355]/50 select-none font-serif">┐</div>
                <div className="absolute bottom-2 left-2 text-[0.65rem] text-[#8B7355]/50 select-none font-serif">└</div>
                <div className="absolute bottom-2 right-2 text-[0.65rem] text-[#8B7355]/50 select-none font-serif">┘</div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  {/* Left — Identity Panel */}
                  <div className="lg:col-span-4 space-y-6">
                    {attorney.image ? (
                      <div className="relative aspect-[3/4] bg-[#E8E3D6] border border-[rgba(17,17,16,0.18)] shadow-md overflow-hidden group">
                        <Image
                          src={attorney.image}
                          alt={attorney.name}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 380px"
                          className="object-cover object-top filter contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        {/* Subtle top crest badge */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                          <div className="w-9 h-9 border border-[#8B7355]/40 bg-[#FAF8F4]/85 backdrop-blur-sm flex items-center justify-center p-1.5 shadow-sm">
                            <Image src="/branding/ast-monogram-exact.png" alt="AST Crest" width={24} height={24} className="object-contain" />
                          </div>
                          <span className="text-[0.56rem] tracking-[0.22em] uppercase font-mono px-2 py-0.5 bg-[#06231B] text-[#F7F5EF] font-semibold shadow-sm">
                            PARTNER
                          </span>
                        </div>
                        {/* Subtle bottom caption bar */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111110]/90 via-[#111110]/50 to-transparent p-4 pt-10 text-white pointer-events-none">
                          <div className="border-l-2 border-[#8B7355] pl-2.5 py-0.5">
                            <span className="text-[0.65rem] tracking-[0.16em] uppercase text-[#FAF8F4] font-bold block">{attorney.role}</span>
                          </div>
                          <h3 className="text-xl text-[#FAF8F4] font-semibold mt-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}>
                            {attorney.name}
                          </h3>
                          <p className="text-[0.62rem] tracking-[0.14em] uppercase text-[#C8C4B8] font-medium">{attorney.designation}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[4/3] bg-[#E8E3D6] border border-[rgba(17,17,16,0.14)] flex flex-col justify-between p-8 relative overflow-hidden shadow-inner">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 border border-[#8B7355]/40 bg-white/60 flex items-center justify-center p-1.5 shadow-sm">
                            <Image src="/branding/ast-monogram-exact.png" alt="AST Crest" width={32} height={32} className="object-contain" />
                          </div>
                          <span className="text-[0.58rem] tracking-[0.2em] uppercase font-mono px-2 py-0.5 bg-[#06231B] text-[#F7F5EF] font-semibold">PARTNER</span>
                        </div>
                        <div className="space-y-2">
                          <div className="border-l-2 border-[#8B7355] pl-2.5 py-0.5">
                            <span className="text-[0.68rem] tracking-[0.16em] uppercase text-[#06231B] font-bold block">{attorney.role}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl text-[#111110] font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}>
                            {attorney.name}
                          </h3>
                          <p className="text-[0.65rem] tracking-[0.14em] uppercase text-[#8B7355] font-semibold">{attorney.designation}</p>
                        </div>
                      </div>
                    )}

                    {/* Admissions & Contact */}
                    <div className="space-y-3 text-xs text-[#5C5A54] bg-[#EFECE3]/80 p-4 border border-[rgba(17,17,16,0.10)]">
                      <div>
                        <p className="text-[#8A8780] uppercase tracking-widest text-[0.58rem] font-semibold mb-1">Court Admissions</p>
                        {attorney.admissions.map((a: string, i: number) => (
                          <p key={i} className="text-[#5C5A54] text-[0.75rem] leading-relaxed">· {a}</p>
                        ))}
                      </div>
                      <div className="border-t border-[rgba(17,17,16,0.10)] pt-2.5">
                        <p className="text-[#8A8780] uppercase tracking-widest text-[0.58rem] font-semibold mb-0.5">Direct Communication</p>
                        <p className="font-mono text-[0.75rem] text-[#06231B]">contact@astlawfirms.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Right — Profile */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="space-y-3">
                      {/* Premium Side Line with Bold Role Title */}
                      <div className="flex items-center gap-3 border-l-2 border-[#8B7355] pl-3.5 py-0.5">
                        <span className="text-xs sm:text-[0.82rem] tracking-[0.18em] uppercase text-[#06231B] font-bold">{attorney.role}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                      </div>
                      <h2 className="text-3xl sm:text-4xl text-[#111110] font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}>
                        {attorney.name}
                      </h2>
                      <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[#8B7355] font-semibold">{attorney.designation}</p>
                    </div>

                    <p className="text-[#5C5A54] text-sm sm:text-base leading-relaxed">{attorney.shortBio}</p>

                    {/* Practice Areas */}
                    <div className="border-t border-[rgba(17,17,16,0.10)] pt-5 space-y-2.5">
                      <h4 className="text-[0.6rem] tracking-[0.24em] uppercase text-[#8A8780] font-medium">Areas of Practice</h4>
                      <div className="flex flex-wrap gap-2">
                        {attorney.practiceAreas
                          .filter((pa: string) => !pa.includes("[insert"))
                          .map((pa: string, idx: number) => (
                            <span key={idx} className="text-xs border border-[rgba(17,17,16,0.15)] bg-[#F7F5EF] px-3 py-1 text-[#42403B]">{pa}</span>
                          ))}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-5">
                      <Link
                        href={`/contact?attorney=${encodeURIComponent(attorney.name)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] text-[0.68rem] uppercase tracking-widest transition-colors font-medium shadow-sm"
                      >
                        <span>Schedule Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={`/attorneys/${attorney.slug}`}
                        className="text-[0.65rem] uppercase tracking-widest text-[#5C5A54] hover:text-[#111110] inline-flex items-center gap-1.5 transition-colors border-b border-transparent hover:border-[#111110] pb-0.5"
                      >
                        <span>View Full Profile →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. TEAM ROSTER — PREMIUM CARDS (new design kept)
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 relative bg-[#EAE6DC]/70 border-t border-[rgba(17,17,16,0.10)]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.03] via-black/[0.015] to-black/[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-20 relative z-10">

          {/* Section header */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#8B7355]" />
              <span className="text-[0.62rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">
                Advocates &amp; Legal Counsel
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] leading-[1.2]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
            >
              Meet Our Team
            </h2>
            <p className="text-[#5C5A54] text-sm sm:text-base leading-relaxed">
              Our firm is strengthened by experienced advocates holding recognized Bar Council enrollments across High Courts and Subordinate Courts, backed by dedicated chamber specialists.
            </p>
          </div>

          {/* ── Group A: Senior Associates ── */}
          <div className="space-y-8">
            <div
              className="flex items-center justify-between py-4 px-5 border"
              style={{ background: "rgba(17,17,16,0.04)", borderColor: "rgba(17,17,16,0.12)" }}
            >
              <div className="flex items-center gap-3">
                <Scale className="w-4 h-4 text-[#8B7355]" />
                <div>
                  <h3 className="text-xs uppercase tracking-[0.22em] text-[#111110] font-bold">Senior Associates</h3>
                  <p className="text-[0.58rem] text-[#8A8780] uppercase tracking-widest mt-0.5">Advocates High Court</p>
                </div>
              </div>
              <span
                className="font-mono text-[0.65rem] px-3 py-1 border font-semibold"
                style={{ borderColor: "rgba(17,17,16,0.14)", color: "#8B7355", background: "rgba(139,115,85,0.07)" }}
              >
                {seniorAssociates.length} Counsel
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {seniorAssociates.map((lawyer, i) => (
                <LawyerCard key={i} lawyer={lawyer} tier="senior" />
              ))}
            </div>
          </div>

          {/* ── Group B: Associates ── */}
          <div className="space-y-8">
            <div
              className="flex items-center justify-between py-4 px-5 border"
              style={{ background: "rgba(17,17,16,0.04)", borderColor: "rgba(17,17,16,0.12)" }}
            >
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-[#8B7355]" />
                <div>
                  <h3 className="text-xs uppercase tracking-[0.22em] text-[#111110] font-bold">Associates</h3>
                  <p className="text-[0.58rem] text-[#8A8780] uppercase tracking-widest mt-0.5">Advocates</p>
                </div>
              </div>
              <span
                className="font-mono text-[0.65rem] px-3 py-1 border font-semibold"
                style={{ borderColor: "rgba(17,17,16,0.14)", color: "#8B7355", background: "rgba(139,115,85,0.07)" }}
              >
                {associates.length} Counsel
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {associates.map((lawyer, i) => (
                <LawyerCard key={i} lawyer={lawyer} tier="associate" />
              ))}
            </div>
          </div>

          {/* ── Group C: Chamber Staff ── */}
          <div className="space-y-8">
            <div
              className="flex items-center justify-between py-4 px-5 border"
              style={{ background: "rgba(17,17,16,0.04)", borderColor: "rgba(17,17,16,0.12)" }}
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#8B7355]" />
                <div>
                  <h3 className="text-xs uppercase tracking-[0.22em] text-[#111110] font-bold">Chamber Administration</h3>
                  <p className="text-[0.58rem] text-[#8A8780] uppercase tracking-widest mt-0.5">Legal Support Services</p>
                </div>
              </div>
              <span
                className="font-mono text-[0.65rem] px-3 py-1 border font-semibold"
                style={{ borderColor: "rgba(17,17,16,0.14)", color: "#8B7355", background: "rgba(139,115,85,0.07)" }}
              >
                Chamber Ops
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {supportStaff.map((staff, i) => (
                <StaffCard key={i} staff={staff} />
              ))}
            </div>
          </div>

          {/* Verification strip */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 border"
            style={{ background: "rgba(6,35,27,0.05)", borderColor: "rgba(6,35,27,0.15)" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 bg-[#06231B]">
                <CheckCircle2 className="w-5 h-5 text-[#F7F5EF]" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-[#111110] uppercase tracking-wider">
                  Verified Bar Council Enrolment &amp; Registration
                </h4>
                <p className="text-xs text-[#5C5A54] max-w-xl leading-relaxed">
                  All practicing advocates at AST Law Firm are duly enrolled with the Bar Council and licensed to practice in accordance with the Legal Practitioners and Bar Councils Act.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] text-[0.65rem] uppercase tracking-widest transition-colors font-medium whitespace-nowrap shadow-sm"
            >
              <span>Consult Our Office</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. FINAL CTA — ORIGINAL
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 border-t border-[rgba(17,17,16,0.10)] text-center bg-[#F7F5EF]">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <div className="w-12 h-12 mx-auto border border-[#8B7355]/40 bg-[#EAE6DC] flex items-center justify-center p-2 shadow-sm">
            <Image src="/branding/ast-monogram-exact.png" alt="AST" width={32} height={32} className="object-contain" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Engage AST Law Firm
          </h2>

          <p className="text-sm sm:text-base text-[#5C5A54] max-w-xl mx-auto leading-relaxed">
            Reach out to our partners, senior associates, or chamber administration to schedule a confidential legal consultation.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300 font-medium"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:03156559995"
              className="inline-flex items-center gap-2 px-6 py-4 border border-[rgba(17,17,16,0.2)] text-[#111110] hover:bg-[#111110]/5 text-[0.7rem] tracking-[0.16em] uppercase transition-colors font-medium font-mono"
            >
              Direct: 0315 6559995
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   LAWYER CARD — Premium redesigned
═══════════════════════════════════════════════════ */
type Lawyer = {
  name: string;
  designation: string;
  association: string;
  court?: string;
  licenseNo?: string;
  image?: string;
};

function LawyerCard({ lawyer, tier }: { lawyer: Lawyer; tier: "senior" | "associate" }) {
  return (
    <div
      className="group relative flex flex-col justify-between border overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(17,17,16,0.12)]"
      style={{
        background: "linear-gradient(160deg, #FAF8F4 0%, #F2EFE7 60%, #EAE6DC 100%)",
        borderColor: "rgba(17,17,16,0.13)",
        boxShadow: "0 2px 16px rgba(17,17,16,0.05)",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#8B7355"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(17,17,16,0.13)"; }}
    >
      {/* Animated gold top bar */}
      <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: "#8B7355" }} />

      {/* Portrait Image or Monogram Header */}
      {lawyer.image ? (
        <div className="relative h-52 sm:h-56 w-full bg-[#E8E3D6] overflow-hidden border-b border-[rgba(17,17,16,0.12)] group">
          <Image
            src={lawyer.image}
            alt={lawyer.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
            className="object-cover object-top filter contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {/* Subtle gradient vignette at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

          {/* Top overlay badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="w-8 h-8 border border-[#8B7355]/40 bg-[#FAF8F4]/90 backdrop-blur-sm flex items-center justify-center p-1 shadow-sm">
              <Image src="/branding/ast-monogram-exact.png" alt="AST" width={20} height={20} className="object-contain" />
            </div>
            <span
              className="inline-flex items-center gap-1 font-mono text-[0.6rem] tracking-wider px-2.5 py-0.5 font-semibold bg-[#06231B] text-[#F7F5EF] shadow-sm border border-white/10"
            >
              <ShieldCheck className="w-3 h-3 text-[#8B7355]" />
              {lawyer.licenseNo ?? "Advocate"}
            </span>
          </div>
        </div>
      ) : null}

      <div className="p-6 sm:p-7 space-y-3.5 flex-1">
        {!lawyer.image && (
          /* Monogram top row */
          <div className="flex items-start justify-between gap-3">
            <div
              className="w-11 h-11 flex items-center justify-center p-1.5 border shadow-sm flex-shrink-0"
              style={{ background: "#E2DDD2", borderColor: "rgba(17,17,16,0.15)" }}
            >
              <Image src="/branding/ast-monogram-exact.png" alt="AST" width={28} height={28} className="object-contain" />
            </div>
            <div className="text-right">
              <span
                className="inline-flex items-center gap-1 font-mono text-[0.65rem] tracking-wider px-2.5 py-1 font-semibold border"
                style={{ background: "rgba(6,35,27,0.05)", borderColor: "rgba(6,35,27,0.20)", color: "#06231B" }}
              >
                <ShieldCheck className="w-3 h-3" />
                {lawyer.licenseNo ?? "High Court"}
              </span>
              <span className="block text-[0.52rem] uppercase tracking-widest text-[#8A8780] mt-0.5">
                {lawyer.licenseNo ? "Bar License No." : "Bar Council Enrolled"}
              </span>
            </div>
          </div>
        )}

        {/* Association */}
        <span className="text-[0.58rem] tracking-[0.24em] uppercase text-[#8B7355] font-bold block">
          {lawyer.association}
        </span>

        {/* Name */}
        <h4
          className="text-xl sm:text-2xl text-[#111110] leading-tight group-hover:text-[#06231B] transition-colors"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
        >
          {lawyer.name}
        </h4>

        {/* Designation */}
        <p className="text-[0.62rem] tracking-[0.18em] uppercase text-[#55534E] font-medium">{lawyer.designation}</p>

        {/* Jurisdiction */}
        <div className="pt-3 border-t space-y-0.5" style={{ borderColor: "rgba(17,17,16,0.09)" }}>
          <p className="text-[0.55rem] uppercase tracking-widest text-[#8A8780]">Jurisdiction</p>
          <p className="text-xs text-[#2B2926] font-semibold">{lawyer.court}</p>
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-6 sm:px-7 py-3.5 border-t"
        style={{ borderColor: "rgba(17,17,16,0.10)", background: "rgba(17,17,16,0.02)" }}
      >
        <span className="text-[0.58rem] uppercase tracking-widest text-[#8A8780]">
          {tier === "senior" ? "Official Counsel" : "Associate Counsel"}
        </span>
        <Link
          href={`/contact?counsel=${encodeURIComponent(lawyer.name)}`}
          className="inline-flex items-center gap-1 text-[0.62rem] tracking-[0.16em] uppercase text-[#06231B] hover:text-[#8B7355] font-bold transition-colors"
        >
          <span>Inquire</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   STAFF CARD — Premium redesigned
═══════════════════════════════════════════════════ */
type StaffMember = {
  name: string;
  role: string;
  position: string;
  description: string;
};

function StaffCard({ staff }: { staff: StaffMember }) {
  return (
    <div
      className="group border flex flex-col justify-between transition-all duration-300"
      style={{
        background: "linear-gradient(160deg, #FAF8F4 0%, #ECE7DC 100%)",
        borderColor: "rgba(17,17,16,0.12)",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,115,85,0.55)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(17,17,16,0.12)"; }}
    >
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span
            className="text-[0.56rem] tracking-[0.24em] uppercase font-mono px-2.5 py-1 font-semibold border"
            style={{ background: "#E2DDD2", borderColor: "rgba(17,17,16,0.10)", color: "#33312E" }}
          >
            {staff.position}
          </span>
          <span className="w-2 h-2 rounded-full bg-[#8B7355]" />
        </div>

        <h4
          className="text-xl text-[#111110] font-semibold"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
        >
          {staff.name}
        </h4>

        <p className="text-[0.62rem] tracking-[0.16em] uppercase text-[#8B7355] font-semibold">{staff.role}</p>
        <p className="text-xs text-[#5C5A54] leading-relaxed">{staff.description}</p>
      </div>

      <div
        className="flex items-center justify-between px-6 py-3.5 border-t"
        style={{ borderColor: "rgba(17,17,16,0.08)", background: "rgba(17,17,16,0.02)" }}
      >
        <span className="text-[0.58rem] uppercase tracking-widest text-[#8A8780]">Official Law Firm Staff</span>
        <span className="text-[0.6rem] text-[#06231B] font-mono font-semibold">Chamber Secretariat</span>
      </div>
    </div>
  );
}
