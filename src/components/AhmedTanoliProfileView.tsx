"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView, stagger } from "@/lib/useInView";
import { Attorney } from "@/data/attorneys";
import { practiceDomains, type PracticeDomain } from "@/data/ahmedDomains";
import { siteConfig } from "@/config/site";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Scale,
  Award,
  Calendar,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Layers,
  Gavel,
  Landmark,
  FileCheck,
  Users,
  Building,
} from "lucide-react";

interface Props {
  attorney: Attorney;
}

const serif = { fontFamily: "var(--font-cormorant), Georgia, serif" } as const;

/** Renders `*term*` as italics for transliterated legal terms. */
const Rich: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(/(\*[^*]+\*)/g).map((part, i) =>
      part.length > 2 && part.startsWith("*") && part.endsWith("*") ? (
        <em key={i} className="italic">
          {part.slice(1, -1)}
        </em>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    )}
  </>
);

const mandate = [
  {
    icon: Users,
    title: "Personal Consultation Leadership",
    text: "Ahmed Hussain Tanoli personally attends every preliminary client conference, case review and retainer briefing, ensuring close attention to detail and clear accountability from day one.",
  },
  {
    icon: Scale,
    title: "Strategic Litigation Architecture",
    text: "Formulates overarching case theories, identifies constitutional remedies under Article 199, and coordinates chamber research across trial courts and superior appellate benches.",
  },
  {
    icon: Building,
    title: "Multi-City Chamber Coordination",
    text: "Directs liaison between the Islamabad Principal Chambers (Barrister Arcade), the Abbottabad chambers (Hazara Division) and commercial counsel in Karachi.",
  },
];

/** Three vertical stripes side by side, each with its paragraph to the right of the line. */
const MandateStripes: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 ${inView ? "is-in" : ""}`}
    >
      {mandate.map((m, i) => (
        <div key={m.title} className="stripe-item py-1" style={stagger(i)}>
          <span className="stripe-v" aria-hidden="true" />
          <div className="stripe-body space-y-2.5">
            <m.icon className="w-4 h-4 text-[#8B7355]" aria-hidden="true" />
            <h3
              className="stripe-lead-text text-xl sm:text-[1.4rem] leading-snug text-[#111110] font-semibold transition-colors duration-300"
              style={serif}
            >
              {m.title}
            </h3>
            <p className="text-[0.9rem] text-[#4E4C47] leading-[1.75]">{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/** One ruled row per practice area: title on the left, striped paragraphs on the right. */
const DomainRow: React.FC<{ domain: PracticeDomain }> = ({ domain }) => {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <article ref={ref} className={`stripe-row ${inView ? "is-in" : ""}`}>
      <span className="stripe-h" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-14 gap-y-8 py-10 sm:py-12 lg:px-4">
        {/* Left — index, category, title, governing statute */}
        <header className="stripe-lead lg:col-span-5 xl:col-span-4" style={stagger(0)}>
          <div className="flex items-baseline gap-4">
            <span className="stripe-num text-5xl sm:text-6xl leading-none font-light" style={serif}>
              {domain.number}
            </span>
            <span className="text-[0.6rem] tracking-[0.2em] uppercase font-mono text-[#8B7355] font-bold">
              {domain.category}
            </span>
          </div>
          <h3
            className="stripe-title mt-4 text-2xl sm:text-[1.9rem] leading-[1.2] text-[#111110] font-semibold transition-colors duration-300"
            style={serif}
          >
            {domain.title}
          </h3>
          <p className="mt-4 inline-flex items-center gap-2.5 text-[0.62rem] tracking-[0.18em] uppercase font-mono text-[#06231B] font-semibold">
            <span className="h-px w-6 bg-[#06231B]" aria-hidden="true" />
            {domain.authority}
          </p>
        </header>

        {/* Right — each paragraph sits beside its own vertical stripe */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-7">
          <div className="stripe-item" style={stagger(1)}>
            <span className="stripe-v stripe-v--green" aria-hidden="true" />
            <div className="stripe-body">
              <p className="text-[0.62rem] tracking-[0.2em] uppercase font-mono text-[#06231B] font-bold mb-1.5">
                Statutory Framework &amp; Forums
              </p>
              <p className="text-[0.9rem] text-[#4E4C47] leading-[1.75]">
                <Rich text={domain.framework} />
              </p>
            </div>
          </div>

          {domain.scope.map((item, i) => (
            <div key={item.lead} className="stripe-item" style={stagger(i + 2)}>
              <span className="stripe-v" aria-hidden="true" />
              <div className="stripe-body">
                <p className="stripe-lead-text text-[0.95rem] text-[#111110] font-semibold mb-1 transition-colors duration-300">
                  {item.lead}
                </p>
                <p className="text-[0.9rem] text-[#4E4C47] leading-[1.75]">
                  <Rich text={item.text} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export const AhmedTanoliProfileView: React.FC<Props> = ({ attorney }) => {
  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      {/* ─── Breadcrumb & Top Bar ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(17,17,16,0.10)] pb-4">
          <Link
            href="/attorneys"
            className="inline-flex items-center gap-2 text-[0.68rem] tracking-widest uppercase text-[#8A8780] hover:text-[#06231B] font-mono transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Counsel &amp; Leadership</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#06231B]/8 text-[#06231B] text-[0.62rem] font-mono uppercase tracking-widest font-semibold border border-[#06231B]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              Direct Chamber Desk Active
            </span>
            <span className="text-[0.62rem] text-[#8B7355] font-mono uppercase tracking-wider hidden sm:inline">
              Islamabad · Abbottabad · Superior Courts
            </span>
          </div>
        </div>
      </div>

      {/* ─── Hero Executive Header ────────────────────────────── */}
      <section className="pt-10 pb-16 border-b border-[rgba(17,17,16,0.10)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Portrait & Direct Chamber Desk */}
            <div className="lg:col-span-4 space-y-6">
              {/* Editorial Frame with Monogram & Gold Corners */}
              <div className="relative aspect-[3/4] bg-[#E8E3D6] border border-[rgba(17,17,16,0.20)] shadow-xl overflow-hidden group">
                {/* Gold corner brackets */}
                <div className="corner-bracket-tl" />
                <div className="corner-bracket-tr" />
                <div className="corner-bracket-bl" />
                <div className="corner-bracket-br" />

                <Image
                  src={attorney.image || "/ahmed-tanoli-portrait.jpg"}
                  alt={attorney.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Top Badge: Crest + Role */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                  <div className="w-9 h-9 border border-[#8B7355]/50 bg-[#FAF8F4]/90 backdrop-blur-sm flex items-center justify-center p-1.5 shadow-sm">
                    <Image
                      src="/branding/ast-monogram-exact.png"
                      alt="AST Crest"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[0.58rem] tracking-[0.22em] uppercase font-mono px-2.5 py-1 bg-[#06231B] text-[#F7F5EF] font-bold shadow-md border border-[#8B7355]/40">
                    MANAGING PARTNER
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111110] via-[#111110]/80 to-transparent p-5 pt-12 text-white pointer-events-none z-10">
                  <div className="border-l-2 border-[#8B7355] pl-2.5 py-0.5 mb-1.5">
                    <span className="text-[0.72rem] tracking-[0.18em] uppercase text-[#FAF8F4] font-bold block">
                      {attorney.role}
                    </span>
                  </div>
                  <p className="text-[0.65rem] tracking-[0.16em] uppercase text-[#D4AF37] font-semibold">
                    {attorney.designation} · AST Law Firm
                  </p>
                </div>
              </div>

              {/* Direct Chamber Intake Action Box */}
              <div className="border border-[rgba(17,17,16,0.14)] p-6 space-y-4 bg-[#FFFFFF] shadow-sm">
                <div className="flex items-center justify-between border-b border-[rgba(17,17,16,0.08)] pb-3">
                  <span className="text-[0.62rem] font-mono tracking-widest uppercase text-[#8B7355] font-semibold">
                    Executive Intake Desk
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                </div>

                <div className="space-y-1.5">
                  <h3
                    className="text-lg text-[#111110] font-semibold"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Direct Case Consultation
                  </h3>
                  <p className="text-xs text-[#5C5A54] leading-relaxed">
                    All client consultations, legal retainers, and strategy conferences are personally attended and directed by Ahmed Hussain Tanoli.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <Link
                    href={`/contact?attorney=${encodeURIComponent(attorney.name)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] text-[0.68rem] uppercase tracking-widest font-semibold transition-all duration-200 shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Schedule Consultation</span>
                  </Link>

                  <a
                    href={`https://wa.me/923259540470?text=${encodeURIComponent(
                      "Hello Advocate Ahmed Hussain Tanoli, I am requesting a direct consultation regarding a legal matter."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-[0.68rem] uppercase tracking-widest font-bold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Priority WhatsApp Line</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-[rgba(17,17,16,0.08)] space-y-2 text-[0.72rem] text-[#6B6860] font-mono">
                  <div className="flex items-center justify-between">
                    <span>Chamber Mobile:</span>
                    <a href="tel:03156559995" className="text-[#06231B] font-semibold hover:underline">
                      0315 6559995
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Principal Desk:</span>
                    <a href="tel:0512352396" className="text-[#06231B] font-semibold hover:underline">
                      051-2352396
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Identity, Mandate & Executive Metrics */}
            <div className="lg:col-span-8 space-y-8">
              {/* Title & Distinction Header */}
              <div className="space-y-3 pb-6 border-b border-[rgba(17,17,16,0.10)]">
                <div className="flex items-center gap-3 border-l-2 border-[#8B7355] pl-3.5 py-0.5">
                  <span className="text-xs sm:text-[0.82rem] tracking-[0.2em] uppercase font-mono text-[#06231B] font-bold">
                    Co-Founder &amp; Managing Partner · AST Law Firm
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                </div>

                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl text-[#111110] font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {attorney.name}
                </h1>

                <p className="text-sm sm:text-base tracking-[0.14em] uppercase text-[#8B7355] font-semibold">
                  Advocate High Court · Principal Chambers Executive Director
                </p>
              </div>

              {/* Managing Partner VIP Intake Highlight Banner */}
              <div className="p-5 sm:p-6 bg-[#06231B] text-[#FAF8F4] border-l-4 border-[#D4AF37] shadow-md relative overflow-hidden">
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[0.62rem] tracking-[0.22em] uppercase font-mono text-[#D4AF37] font-bold">
                      Central Case Intake &amp; Client Representation Mandate
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#FAF8F4]/90 font-light leading-relaxed">
                    At AST Law Firm, every prospective engagement, legal retainer, and litigation brief is personally received, reviewed, and conducted by Managing Partner <strong className="text-white font-medium">Ahmed Hussain Tanoli</strong>. Clients maintain direct access to executive counsel throughout the lifespan of their legal matter.
                  </p>
                </div>
              </div>

              {/* Key Quantitative & Qualitative Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#FFFFFF] border border-[rgba(17,17,16,0.12)]">
                <div className="border-r border-[rgba(17,17,16,0.08)] pr-3">
                  <span className="block text-2xl sm:text-3xl text-[#06231B] font-serif font-bold">100%</span>
                  <span className="text-[0.58rem] tracking-[0.14em] uppercase font-mono text-[#8A8780] block mt-0.5">
                    Intake Chaired Personally
                  </span>
                </div>
                <div className="border-r border-[rgba(17,17,16,0.08)] pr-3">
                  <span className="block text-2xl sm:text-3xl text-[#06231B] font-serif font-bold">Dual</span>
                  <span className="text-[0.58rem] tracking-[0.14em] uppercase font-mono text-[#8A8780] block mt-0.5">
                    KPK &amp; Punjab Mines &amp; Minerals
                  </span>
                </div>
                <div className="border-r border-[rgba(17,17,16,0.08)] pr-3">
                  <span className="block text-2xl sm:text-3xl text-[#06231B] font-serif font-bold">Superior</span>
                  <span className="text-[0.58rem] tracking-[0.14em] uppercase font-mono text-[#8A8780] block mt-0.5">
                    High Courts Enrolled
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl text-[#06231B] font-serif font-bold">34 Yrs</span>
                  <span className="text-[0.58rem] tracking-[0.14em] uppercase font-mono text-[#8A8780] block mt-0.5">
                    Consolidated Firm Legacy
                  </span>
                </div>
              </div>

              {/* Comprehensive Narrative Biography */}
              <div className="space-y-4 text-[#5C5A54] text-sm sm:text-base leading-relaxed">
                <h2 className="text-[0.62rem] tracking-[0.24em] uppercase font-mono text-[#8B7355] font-bold">
                  Managing Partner Executive Biography
                </h2>
                {attorney.biography.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Areas of Practice (Exact Original Theme & Layout) */}
              <div className="border-t border-[rgba(17,17,16,0.08)] pt-8 space-y-4">
                <h2 className="text-[0.6rem] tracking-widest uppercase text-[#8A8780]">
                  Areas of Practice
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {attorney.practiceAreas.map((pa, idx) => (
                    <div
                      key={idx}
                      className="border border-[rgba(17,17,16,0.12)] bg-[#F7F5EF] p-3.5 text-xs text-[#5C5A54] flex items-center gap-2.5 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-[#C4BFB3] rounded-full flex-shrink-0" />
                      <span>{pa}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: THE MANAGING PARTNER'S MANDATE ──────────────── */}
      <section className="py-16 sm:py-20 border-b border-[rgba(17,17,16,0.10)] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#8B7355]" />
              <span className="text-[0.62rem] tracking-[0.28em] uppercase font-mono text-[#8B7355] font-semibold">
                Executive Leadership &amp; Operational Stewardship
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl text-[#111110] font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              The Managing Partner’s Mandate
            </h2>
            <p className="text-sm sm:text-base text-[#5C5A54] leading-relaxed">
              Following the 2026 consolidation that brought together the founding courtroom heritage of Tanawal Law Associates (founded 1992 by Haji Sabir Hussain Tanoli) and AST Law Firm, Ahmed Hussain Tanoli exercises executive stewardship over the firm's national practice.
            </p>
          </div>

          <MandateStripes />
        </div>
      </section>

      {/* ─── SECTION 2: PRACTICE AREAS & DOMAINS OF EXPERTISE (stripe ledger) ─── */}
      <section id="practice-domains" className="py-16 sm:py-24 border-b border-[rgba(17,17,16,0.10)] bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-12">

          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#8B7355]" />
              <span className="text-[0.62rem] tracking-[0.28em] uppercase font-mono text-[#8B7355] font-semibold">
                Comprehensive Practice Portfolio · Managing Partner Expertise
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Practice Areas &amp; Domain Expertise
            </h2>
            <p className="text-xs tracking-[0.18em] uppercase font-mono text-[#06231B] font-semibold">
              Authoritative Legal Counsel &amp; Superior Courtroom Advocacy Across Pakistan
            </p>
            <p className="text-sm sm:text-base text-[#5C5A54] leading-relaxed">
              Ahmed Hussain Tanoli combines senior appellate advocacy before High Courts with deep domain authority across statutory and regulatory frameworks in Pakistan. Each practice area is managed under his direct personal supervision, from preliminary brief analysis to courtroom oral arguments.
            </p>
          </div>

          {/* Stripe ledger — one ruled row per practice area */}
          <div className="border-b border-[rgba(17,17,16,0.14)]">
            {practiceDomains.map((domain) => (
              <DomainRow key={domain.id} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CREDENTIALS, ADMISSIONS & EDUCATION ──────────── */}
      <section className="py-16 sm:py-20 border-b border-[rgba(17,17,16,0.10)] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          <div className="space-y-2">
            <span className="text-[0.62rem] tracking-[0.26em] uppercase font-mono text-[#8B7355] font-semibold">
              Institutional Credentials &amp; Bar Enrolments
            </span>
            <h2
              className="text-3xl sm:text-4xl text-[#111110] font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Professional Profile &amp; Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[rgba(17,17,16,0.08)]">
            {/* Bar Admissions */}
            <div className="space-y-3">
              <h3 className="text-[0.65rem] tracking-widest uppercase font-mono text-[#06231B] font-bold">
                Court Admissions &amp; Enrolment
              </h3>
              <ul className="space-y-2 text-xs text-[#5C5A54]">
                {attorney.admissions.map((adm, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8B7355] font-bold">—</span>
                    <span>{adm}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-[0.65rem] tracking-widest uppercase font-mono text-[#06231B] font-bold">
                Education &amp; Professional Studies
              </h3>
              <ul className="space-y-2 text-xs text-[#5C5A54]">
                {attorney.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8B7355] font-bold">—</span>
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Memberships */}
            <div className="space-y-3">
              <h3 className="text-[0.65rem] tracking-widest uppercase font-mono text-[#06231B] font-bold">
                Bar Memberships &amp; Chamber Roles
              </h3>
              <ul className="space-y-2 text-xs text-[#5C5A54]">
                {attorney.memberships.map((mem, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8B7355] font-bold">—</span>
                    <span>{mem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: FIRM LEADERSHIP CROSS-LINKING ───────────────── */}
      <section className="py-12 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[0.6rem] tracking-[0.24em] uppercase font-mono text-[#8A8780] block">
                AST Law Firm Partners
              </span>
              <h4
                className="text-xl text-[#111110] font-semibold"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Executive Chamber Leadership
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <Link
                href="/attorneys/haji-sabir-hussain-tanoli"
                className="px-3.5 py-2 border border-[rgba(17,17,16,0.15)] bg-white hover:border-[#111110] text-[#111110] transition-colors"
              >
                Haji Sabir Hussain Tanoli (Advocate Supreme Court) →
              </Link>
              <Link
                href="/attorneys/muhammad-javed-khan-tanoli"
                className="px-3.5 py-2 border border-[rgba(17,17,16,0.15)] bg-white hover:border-[#111110] text-[#111110] transition-colors"
              >
                Muhammad Javed Khan Tanoli (Karachi) →
              </Link>
              <Link
                href="/attorneys/muhammad-amjad-hussain-tanoli"
                className="px-3.5 py-2 border border-[rgba(17,17,16,0.15)] bg-white hover:border-[#111110] text-[#111110] transition-colors"
              >
                Muhammad Amjad Hussain Tanoli (Abbottabad) →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
