import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | AST Law Firm — Ahmed Sabir Tanoli",
  description:
    "AST Law Firm is the continuation of a distinguished legal practice with a professional legacy dating back to 1992, founded by Haji Sabir Hussain Tanoli, Advocate Supreme Court of Pakistan.",
};

export default function AboutPage() {
  const { principals, legacy } = siteConfig;

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">

      {/* ═══════════════════════════════════════════════════════
          1. HEADER / WHO WE ARE
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b border-[rgba(17,17,16,0.10)] pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-5 h-[1px] bg-[#8B7355]" />
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8A8780] font-medium">
              About AST Law Firm
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[#8A8780] font-medium">
              AST LAW FIRM
            </p>
            <p className="text-[0.65rem] tracking-[0.26em] uppercase text-[#A09D96]">
              AHMED SABIR TANOLI
            </p>
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#8B7355]">
              Advocates • Solicitors • Corporate Counsellors
            </p>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-[#111110] max-w-4xl leading-[1.12]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Professional Legal Representation. Strategic Counsel. Trusted Advocacy.
          </h1>

          <p className="text-[#5C5A54] text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            AST Law Firm is a professional legal practice providing legal representation, litigation, advisory, documentation and corporate legal services to individuals, businesses, companies, institutions and organizations.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. INSTITUTIONAL HERITAGE & CONTINUITY
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-b border-[rgba(17,17,16,0.10)] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold block">
                Heritage Since {legacy.since}
              </span>
              <div className="border-l-2 border-[#8B7355] pl-3.5 py-0.5">
                <h2
                  className="text-3xl sm:text-4xl text-[#111110] leading-tight font-semibold"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
                >
                  Over Three Decades of Judicial Advocacy
                </h2>
              </div>
              <p className="text-[#5C5A54] text-sm sm:text-base leading-relaxed">
                AST Law Firm carries forward a distinguished courtroom tradition founded in 1992 by Haji Sabir Hussain Tanoli, Advocate Supreme Court of Pakistan, through Tanawal Law Associates (TLA), alongside Co-Founder &amp; Managing Partner Ahmed Hussain Tanoli, Advocate High Court.
              </p>
              <div className="pt-2">
                <Link
                  href="/legacy"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] text-[0.68rem] uppercase tracking-widest font-semibold transition-colors shadow-sm"
                >
                  <span>Explore Our Full Legacy Chronicle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#EFECE3] border border-[rgba(17,17,16,0.10)] space-y-3">
                <p className="font-mono text-xs text-[#8B7355] font-bold">1992 — INCEPTION</p>
                <h3 className="text-xl text-[#111110] font-semibold font-serif">Tanawal Law Associates</h3>
                <p className="text-xs text-[#5C5A54] leading-relaxed">
                  Founded by Haji Sabir Hussain Tanoli, developing core judicial archives, trial advocacy, and appellate jurisprudence before superior courts.
                </p>
                <Link
                  href="/legacy"
                  className="inline-flex items-center gap-1 text-[0.65rem] tracking-wider uppercase text-[#8B7355] font-semibold hover:text-[#111110] transition-colors"
                >
                  <span>Timeline Archive →</span>
                </Link>
              </div>

              <div className="p-6 bg-[#EFECE3] border border-[rgba(17,17,16,0.10)] space-y-3">
                <p className="font-mono text-xs text-[#8B7355] font-bold">2026 — UNIFICATION</p>
                <h3 className="text-xl text-[#111110] font-semibold font-serif">AST Law Firm</h3>
                <p className="text-xs text-[#5C5A54] leading-relaxed">
                  Strategic merger uniting senior Supreme Court counsel with contemporary managing partner leadership under Ahmed Hussain Tanoli, Advocate High Court.
                </p>
                <Link
                  href="/legacy"
                  className="inline-flex items-center gap-1 text-[0.65rem] tracking-wider uppercase text-[#8B7355] font-semibold hover:text-[#111110] transition-colors"
                >
                  <span>Merger Details →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. AST — THE PRESENT & THE FUTURE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-b border-[rgba(17,17,16,0.10)] bg-[#EFECE3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8A8780] block">
                Firm Structure
              </span>
              <h2
                className="text-3xl sm:text-4xl text-[#111110] leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
              >
                AST — The Present & The Future
              </h2>

              <div className="border-t border-[rgba(17,17,16,0.12)] pt-6 space-y-4">
                <div>
                  <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[#8A8780] mb-1">Founded by</p>
                  <p className="text-base text-[#111110] font-medium">{principals.founder.name}</p>
                  <p className="text-xs text-[#5C5A54]">{principals.founder.designation}</p>
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[#8A8780] mb-1">Co-Founder</p>
                  <p className="text-base text-[#111110] font-medium">{principals.coFounder.name}</p>
                  <p className="text-xs text-[#5C5A54]">{principals.coFounder.designation}</p>
                </div>
                <div className="pt-2">
                  <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[#8A8780] mb-1">Present Identity</p>
                  <p className="text-base text-[#111110] font-medium">AST “THE LAW FIRM”</p>
                  <p className="text-xs text-[#5C5A54]">“AHMED SABIR TANOLI”</p>
                  <p className="text-[0.65rem] tracking-[0.16em] uppercase text-[#8A8780] mt-0.5">
                    Advocates • Solicitors • Corporate Counsellors
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#5C5A54] text-base leading-relaxed">
              <p>
                AST Law Firm is established as a professional legal practice serving clients in litigation, legal advisory, corporate and commercial matters, documentation and dispute resolution.
              </p>
              <p>
                We recognize that every legal matter is different. Our work therefore begins with understanding the client's circumstances, identifying the applicable legal framework and evaluating the available legal options.
              </p>
              <p>
                We aim to provide clients with clear legal guidance and a structured approach to resolving legal problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. PROFESSIONAL APPROACH (5 Principles)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-b border-[rgba(17,17,16,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8A8780] block">
              Methodology
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
            >
              Professional Approach
            </h2>
            <p className="text-[#5C5A54] text-sm sm:text-base">
              Five clearly defined standards guiding our legal work in every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#EFECE3] border border-[rgba(17,17,16,0.08)] space-y-4">
              <span className="text-[0.65rem] font-mono text-[#8B7355] tracking-widest uppercase block">
                01 / Method
              </span>
              <h3
                className="text-2xl text-[#111110]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Legal Research
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5A54] leading-relaxed">
                We examine the applicable legislation, rules, precedents and legal principles relevant to each matter.
              </p>
            </div>

            <div className="p-8 bg-[#EFECE3] border border-[rgba(17,17,16,0.08)] space-y-4">
              <span className="text-[0.65rem] font-mono text-[#8B7355] tracking-widest uppercase block">
                02 / Counsel
              </span>
              <h3
                className="text-2xl text-[#111110]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Strategic Advice
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5A54] leading-relaxed">
                We identify available legal remedies and develop an approach appropriate to the circumstances.
              </p>
            </div>

            <div className="p-8 bg-[#EFECE3] border border-[rgba(17,17,16,0.08)] space-y-4">
              <span className="text-[0.65rem] font-mono text-[#8B7355] tracking-widest uppercase block">
                03 / Courtroom
              </span>
              <h3
                className="text-2xl text-[#111110]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Effective Advocacy
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5A54] leading-relaxed">
                Where representation is required, we prepare and present matters with attention to facts, evidence, law and procedure.
              </p>
            </div>

            <div className="p-8 bg-[#EFECE3] border border-[rgba(17,17,16,0.08)] space-y-4">
              <span className="text-[0.65rem] font-mono text-[#8B7355] tracking-widest uppercase block">
                04 / Transparency
              </span>
              <h3
                className="text-2xl text-[#111110]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Client Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5A54] leading-relaxed">
                We believe clients should receive clear and timely information concerning significant developments in their matters.
              </p>
            </div>

            <div className="p-8 bg-[#EFECE3] border border-[rgba(17,17,16,0.08)] space-y-4 md:col-span-2 lg:col-span-1">
              <span className="text-[0.65rem] font-mono text-[#8B7355] tracking-widest uppercase block">
                05 / Fiduciary
              </span>
              <h3
                className="text-2xl text-[#111110]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Confidentiality
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5A54] leading-relaxed">
                Client information and legal documents are handled with appropriate professional care and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. FOUNDERS & LEADERSHIP
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-b border-[rgba(17,17,16,0.10)] bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[rgba(17,17,16,0.10)]">
            <div>
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8A8780] block mb-3">
                Firm Leadership
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-[#111110]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
              >
                Partners & Leadership
              </h2>
            </div>
            <Link
              href="/attorneys"
              className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-[#111110] border-b border-[#111110] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355] transition-colors"
            >
              <span>View Full Profiles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {/* Principal 1: Haji Sabir Hussain Tanoli */}
            <div className="p-8 sm:p-10 bg-[#EFECE3] border border-[rgba(17,17,16,0.10)] flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative w-28 sm:w-32 aspect-[3/4] flex-shrink-0 bg-[#E8E3D6] border border-[rgba(17,17,16,0.18)] shadow-md overflow-hidden">
                <Image
                  src="/haji-sabir-tanoli-portrait.jpg"
                  alt={principals.founder.name}
                  fill
                  className="object-cover object-top"
                  sizes="140px"
                />
              </div>

              <div className="space-y-6 flex-1 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div>
                    <div className="border-l-2 border-[#8B7355] pl-3 mb-2.5">
                      <span className="text-xs sm:text-[0.8rem] tracking-[0.16em] uppercase text-[#06231B] font-bold block">
                        {principals.founder.role}
                      </span>
                    </div>
                    <h3
                      className="text-3xl text-[#111110] font-semibold"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
                    >
                      {principals.founder.name}
                    </h3>
                    <p className="text-xs tracking-[0.16em] uppercase text-[#8B7355] mt-1 font-semibold">
                      {principals.founder.designation}
                    </p>
                  </div>

                  <div className="border-t border-[rgba(17,17,16,0.10)] pt-4 space-y-2 text-xs text-[#5C5A54]">
                    <p><span className="text-[#8A8780] uppercase tracking-wider text-[0.62rem]">Firm:</span> AST Law Firm</p>
                    <p><span className="text-[#8A8780] uppercase tracking-wider text-[0.62rem]">Courts:</span> Advocate Supreme Court of Pakistan</p>
                    <p><span className="text-[#8A8780] uppercase tracking-wider text-[0.62rem]">Founder:</span> Tanawal Law Associates (TLA) — Est. 1992</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/attorneys/haji-sabir-hussain-tanoli"
                    className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.18em] uppercase text-[#111110] border-b border-[#111110] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355] transition-colors font-medium"
                  >
                    <span>Professional Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Principal 2: Ahmed Hussain Tanoli */}
            <div className="p-8 sm:p-10 bg-[#EFECE3] border border-[rgba(17,17,16,0.10)] flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative w-28 sm:w-32 aspect-[3/4] flex-shrink-0 bg-[#E8E3D6] border border-[rgba(17,17,16,0.18)] shadow-md overflow-hidden">
                <Image
                  src="/ahmed-tanoli-portrait.jpg"
                  alt={principals.coFounder.name}
                  fill
                  className="object-cover object-top"
                  sizes="140px"
                />
              </div>

              <div className="space-y-6 flex-1 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div>
                    <div className="border-l-2 border-[#8B7355] pl-3 mb-2.5">
                      <span className="text-xs sm:text-[0.8rem] tracking-[0.16em] uppercase text-[#06231B] font-bold block">
                        {principals.coFounder.role}
                      </span>
                    </div>
                    <h3
                      className="text-3xl text-[#111110] font-semibold"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
                    >
                      {principals.coFounder.name}
                    </h3>
                    <p className="text-xs tracking-[0.16em] uppercase text-[#8B7355] mt-1 font-semibold">
                      {principals.coFounder.designation}
                    </p>
                  </div>

                  <div className="border-t border-[rgba(17,17,16,0.10)] pt-4 space-y-2 text-xs text-[#5C5A54]">
                    <p><span className="text-[#8A8780] uppercase tracking-wider text-[0.62rem]">Firm:</span> AST Law Firm</p>
                    <p><span className="text-[#8A8780] uppercase tracking-wider text-[0.62rem]">Courts:</span> Advocate High Court</p>
                    <p><span className="text-[#8A8780] uppercase tracking-wider text-[0.62rem]">Practice:</span> Litigation, Advisory &amp; Corporate</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/attorneys/ahmed-hussain-tanoli"
                    className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.18em] uppercase text-[#111110] border-b border-[#111110] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355] transition-colors font-medium"
                  >
                    <span>Professional Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. CONSULTATION CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8A8780] block">
            Legal Inquiries
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Discuss Your Legal Matter With AST Law Firm
          </h2>
          <p className="text-sm text-[#5C5A54] leading-relaxed max-w-xl mx-auto">
            Whether you require legal representation, advisory support, documentation or assistance in navigating a legal dispute, AST Law Firm provides a structured and professional approach to understanding your matter and identifying available legal options.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#111110] text-[#F7F5EF] hover:bg-[#2D2C2A] font-medium text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
