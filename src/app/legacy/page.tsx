import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, ArrowUpRight, Scale, Award, ShieldCheck, Landmark } from "lucide-react";
import { TimelineEvolution } from "@/components/TimelineEvolution";

export const metadata: Metadata = {
  title: "Our Legacy | AST Law Firm — Ahmed Sabir Tanoli",
  description:
    "Explore the 34-year legal heritage of AST Law Firm, dating back to 1992 with the founding of Tanawal Law Associates (TLA) by Haji Sabir Hussain Tanoli, Advocate Supreme Court of Pakistan.",
};

const timelineEras = [
  {
    year: "1992",
    period: "Inception & Chamber Foundation",
    title: "Establishment of Tanawal Law Associates (TLA)",
    summary:
      "The firm's historical foundation was laid in 1992 with the establishment of Tanawal Law Associates (TLA) by Haji Sabir Hussain Tanoli. Founded on unyielding principles of judicial integrity and meticulous legal research, the practice swiftly earned renown in civil litigation, revenue jurisprudence, and trial advocacy.",
    highlights: [
      "Founded by Haji Sabir Hussain Tanoli, Advocate Supreme Court of Pakistan",
      "Pioneered principled representation across civil and property disputes",
      "Established core chamber legal archives and rigorous research standards",
    ],
  },
  {
    year: "2000s",
    period: "Appellate & Superior Courts Expansion",
    title: "Ascendance to Superior Courts Representation",
    summary:
      "Expanding beyond regional trial courts, the firm became a respected counsel across High Court benches and the Supreme Court of Pakistan. Landmark constitutional petitions, civil appeals, and criminal revisions cemented the chamber's standing in superior jurisprudence.",
    highlights: [
      "Enrolment and sustained appearances before High Courts and Supreme Court",
      "Representation in complex appellate and constitutional matters",
      "Mentorship of rising advocates inducted into the chamber practice",
    ],
  },
  {
    year: "2010s",
    period: "Multi-Jurisdictional Advisory",
    title: "Institutional Counseling & Dual Chambers",
    summary:
      "With growing corporate and commercial demands across Pakistan, the firm expanded its advisory capabilities into banking, commercial agreements, institutional legal retainers, and regulatory compliance, while maintaining its active courtroom litigation practice.",
    highlights: [
      "Institutional representation for corporations and statutory entities",
      "Establishment of structured chamber facilities in Abbottabad & Islamabad",
      "Integration of modern dispute resolution and contract drafting standards",
    ],
  },
  {
    year: "2020",
    period: "Major Infrastructure & Corporate Retainers",
    title: "Hydroelectric Projects, Institutional Advisories & High Court Litigation",
    summary:
      "A period marked by high-value infrastructure counsel, landmark land acquisition proceedings, and ongoing institutional retainers across regional and superior courts. Entrusted with critical project advisories and comprehensive litigation before the Peshawar High Court (Abbottabad Bench), district courts of Mansehra and Balakot, and specialized labor tribunals.",
    highlights: [
      "SK Hydro Power Project at Naran — Comprehensive legal advisories and full litigation covering Mansehra & Balakot civil matters, and Peshawar High Court Abbottabad Bench",
      "Land Acquisition Matters — 100% success results in land acquisition disputes and compensation claims",
      "Hazara University Mansehra — Continued standing legal advisory & institutional representation",
      "AUFT — Retained legal advisory services and service/employment matters",
      "HRSG (House Source Company based in Islamabad) — Retained legal matters related to Labour Courts and Peshawar High Court Abbottabad Bench",
      "East and West Company — Strategic litigation and legal representation in Peshawar High Court Abbottabad Bench",
    ],
  },
  {
    year: "2026",
    period: "Unification & Future Direction",
    title: "The Strategic Merger: AST Law Firm",
    summary:
      "In a decisive milestone, Tanawal Law Associates (TLA) and Ahmed Sabir Tanoli Law Firm formally merged under a unified identity: AST Law Firm (Ahmed Sabir Tanoli). This union joins Haji Sabir Hussain Tanoli's senior Supreme Court heritage with Ahmed Hussain Tanoli's modern, agile managing partner leadership.",
    highlights: [
      "Formal brand consolidation: AST Law Firm — Ahmed Sabir Tanoli",
      "Executive management led by Ahmed Hussain Tanoli, Advocate High Court",
      "Coordinated chambers across Islamabad (Barrister Arcade, G 10/1), Abbottabad (KPK), and Karachi",
    ],
  },
];

export default function LegacyPage() {
  const { principals, legacy } = siteConfig;

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      {/* ═══════════════════════════════════════════════════════
          1. HERO — The Historical Chronicle
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b border-[rgba(17,17,16,0.10)] pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-5 h-[1px] bg-[#8B7355]" />
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">
              Chamber Heritage · Legacy Since {legacy.since}
            </span>
          </div>

          <div className="border-l-2 border-[#8B7355] pl-4 py-1">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111110] max-w-4xl leading-[1.12] tracking-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              The Chronicle of Our Practice
            </h1>
          </div>

          <p className="text-[#5C5A54] text-base sm:text-xl max-w-3xl leading-relaxed font-normal">
            A 34-year legal heritage rooted in principled advocacy, superior court jurisprudence, and unwavering client fidelity — carrying forward the values established in 1992 into contemporary legal practice.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#EFECE3] border border-[rgba(17,17,16,0.12)] text-xs text-[#111110]">
              <span className="w-2 h-2 rounded-full bg-[#8B7355]" />
              <span className="font-semibold uppercase tracking-wider text-[0.65rem]">Established 1992</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#EFECE3] border border-[rgba(17,17,16,0.12)] text-xs text-[#111110]">
              <span className="w-2 h-2 rounded-full bg-[#06231B]" />
              <span className="font-semibold uppercase tracking-wider text-[0.65rem]">Merger &amp; Unification 2026</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#EFECE3] border border-[rgba(17,17,16,0.12)] text-xs text-[#111110]">
              <span className="w-2 h-2 rounded-full bg-[#8B7355]" />
              <span className="font-semibold uppercase tracking-wider text-[0.65rem]">Supreme Court &amp; High Court Enrolment</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. ORIGIN & ARCHIVAL VISUAL PRESENTATION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-b border-[rgba(17,17,16,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#8B7355] font-semibold block">
                  The Founding Chapter
                </span>
                <div className="border-l-2 border-[#8B7355] pl-3 py-0.5">
                  <h2
                    className="text-3xl sm:text-4xl text-[#111110] font-semibold"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
                  >
                    From Tanawal Law Associates to AST Law Firm
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#5C5A54] leading-relaxed">
                <p>
                  In {legacy.since},{" "}
                  <strong className="text-[#111110] font-semibold">{principals.founder.name}</strong>,{" "}
                  {principals.founder.designation}, established{" "}
                  <strong className="text-[#111110] font-semibold">{legacy.originalFirm}</strong>. At the time, the practice began with a singular focus: providing principled, meticulous, and fearless representation in superior and subordinate courts.
                </p>
                <p>
                  Over more than three decades, the firm handled complex civil suits, property and land disputes, criminal appeals, and constitutional writs, establishing a reputation for courtroom thoroughness and unwavering client loyalty.
                </p>
                <p>
                  In {legacy.mergerYear}, the practice entered an evolutionary new chapter. To address the demands of contemporary commerce, cross-border corporate governance, and multi-city litigation, the original practice united with{" "}
                  <strong className="text-[#111110] font-semibold">AHMED SABIR TANOLI (AST) LAW FIRM</strong>, led by{" "}
                  <strong className="text-[#111110] font-semibold">{principals.coFounder.name}</strong>.
                </p>
              </div>

              <div className="border-l-2 border-[#8B7355] pl-5 py-3 bg-[#EFECE3]/70 space-y-1">
                <p className="text-[#111110] font-semibold tracking-wide text-base">AST LAW FIRM</p>
                <p className="text-[0.68rem] tracking-[0.24em] uppercase text-[#5C5A54] font-medium">AHMED SABIR TANOLI</p>
                <p className="text-[0.58rem] tracking-[0.2em] uppercase text-[#8A8780]">ADVOCATES | SOLICITORS | CORPORATE COUNSELLORS</p>
              </div>
            </div>

            {/* Right Visuals — Classical Desk Frame & Feature Wall */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Framed Classical Research Desk */}
              <div className="bg-[#FAF8F4] border border-[rgba(17,17,16,0.14)] p-3 shadow-md space-y-3">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-[rgba(17,17,16,0.10)]">
                  <Image
                    src="/desk-pakistan.jpg"
                    alt="AST Law Firm — Chambers Archival Research"
                    fill
                    className="object-cover object-center"
                    sizes="320px"
                  />
                </div>
                <div className="px-1 pt-1 border-t border-[rgba(17,17,16,0.08)]">
                  <p className="text-[0.62rem] tracking-[0.2em] uppercase text-[#8B7355] font-semibold">
                    Judicial Research Chambers
                  </p>
                  <p className="text-[0.72rem] text-[#5C5A54] mt-0.5">
                    Original law library collection &amp; Supreme Court case law volumes.
                  </p>
                </div>
              </div>

              {/* Illuminated Reception Feature Wall */}
              <div className="bg-[#FAF8F4] border border-[rgba(17,17,16,0.14)] p-3 shadow-md space-y-3">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-[rgba(17,17,16,0.10)]">
                  <Image
                    src="/hero-ast-wall-feature.jpg"
                    alt="AST Law Firm — Ahmad Sabir Tanoli Wall Feature"
                    fill
                    className="object-cover object-center"
                    sizes="320px"
                  />
                </div>
                <div className="px-1 pt-1 border-t border-[rgba(17,17,16,0.08)]">
                  <p className="text-[0.62rem] tracking-[0.2em] uppercase text-[#8B7355] font-semibold">
                    Contemporary Unification
                  </p>
                  <p className="text-[0.72rem] text-[#5C5A54] mt-0.5">
                    Illuminated feature wall in the modern Islamabad principal chambers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. HISTORICAL TIMELINE — 4 ERAS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#EFECE3]/80 border-b border-[rgba(17,17,16,0.10)] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#8B7355]" />
              <span className="text-[0.62rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">
                Historical Progression
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              The Evolution Across Decades
            </h2>
            <p className="text-[#5C5A54] text-sm sm:text-base leading-relaxed">
              Tracing thirty-four years from an independent chamber founded on superior courtroom advocacy to a comprehensive multi-city practice.
            </p>
          </div>

          <TimelineEvolution eras={timelineEras} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. THE CUSTODIANS OF THE LEGACY
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-b border-[rgba(17,17,16,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#8B7355]" />
              <span className="text-[0.62rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">
                Leadership Heritage
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              Custodians of the Firm's Values
            </h2>
            <p className="text-[#5C5A54] text-sm sm:text-base leading-relaxed">
              A partnership bridging seasoned Supreme Court jurisprudence with contemporary corporate acumen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {/* Founder: Haji Sabir Hussain Tanoli */}
            <div className="p-8 sm:p-10 bg-[#EFECE3] border border-[rgba(17,17,16,0.12)] flex flex-col sm:flex-row gap-6 items-start shadow-sm">
              <div className="relative w-28 sm:w-36 aspect-[3/4] flex-shrink-0 bg-[#E8E3D6] border border-[rgba(17,17,16,0.18)] shadow-md overflow-hidden">
                <Image
                  src="/haji-sabir-tanoli-portrait.jpg"
                  alt={principals.founder.name}
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>

              <div className="space-y-5 flex-1 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div>
                    <div className="border-l-2 border-[#8B7355] pl-3 mb-2">
                      <span className="text-xs tracking-[0.16em] uppercase text-[#06231B] font-bold block">
                        {principals.founder.role}
                      </span>
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl text-[#111110] font-semibold"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
                    >
                      {principals.founder.name}
                    </h3>
                    <p className="text-xs tracking-[0.16em] uppercase text-[#8B7355] mt-1 font-bold">
                      {principals.founder.designation}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5A54] leading-relaxed">
                    Founder of Tanawal Law Associates in 1992. Over 30 years of principled advocacy before the Supreme Court of Pakistan and High Courts, establishing the bedrock of integrity that guides AST Law Firm today.
                  </p>
                </div>

                <div className="pt-2 border-t border-[rgba(17,17,16,0.10)]">
                  <Link
                    href="/attorneys/haji-sabir-hussain-tanoli"
                    className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.18em] uppercase text-[#111110] border-b border-[#111110] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355] transition-colors font-semibold"
                  >
                    <span>Read Full Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Co-Founder & Managing Partner: Ahmed Hussain Tanoli */}
            <div className="p-8 sm:p-10 bg-[#EFECE3] border border-[rgba(17,17,16,0.12)] flex flex-col sm:flex-row gap-6 items-start shadow-sm">
              <div className="relative w-28 sm:w-36 aspect-[3/4] flex-shrink-0 bg-[#E8E3D6] border border-[rgba(17,17,16,0.18)] shadow-md overflow-hidden">
                <Image
                  src="/ahmed-tanoli-portrait.jpg"
                  alt={principals.coFounder.name}
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>

              <div className="space-y-5 flex-1 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div>
                    <div className="border-l-2 border-[#8B7355] pl-3 mb-2">
                      <span className="text-xs tracking-[0.16em] uppercase text-[#06231B] font-bold block">
                        {principals.coFounder.role}
                      </span>
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl text-[#111110] font-semibold"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
                    >
                      {principals.coFounder.name}
                    </h3>
                    <p className="text-xs tracking-[0.16em] uppercase text-[#8B7355] mt-1 font-bold">
                      {principals.coFounder.designation}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5A54] leading-relaxed">
                    Architect of the 2026 unification. Leads AST Law Firm's contemporary practice, overseeing high-stakes litigation, corporate advisory, documentation, and institutional client portfolios across Pakistan.
                  </p>
                </div>

                <div className="pt-2 border-t border-[rgba(17,17,16,0.10)]">
                  <Link
                    href="/attorneys/ahmed-hussain-tanoli"
                    className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.18em] uppercase text-[#111110] border-b border-[#111110] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355] transition-colors font-semibold"
                  >
                    <span>Read Full Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. GUIDING PRINCIPLES SINCE 1992
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#FAF8F4] border-b border-[rgba(17,17,16,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#8B7355]" />
              <span className="text-[0.62rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">
                Judicial Foundations
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl text-[#111110] font-normal"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              The Pillars That Have Guided Us For 34 Years
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#EFECE3]/70 border border-[rgba(17,17,16,0.10)] space-y-3">
              <Scale className="w-6 h-6 text-[#8B7355]" />
              <h3 className="text-lg text-[#111110] font-semibold font-serif">Principled Advocacy</h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Upholding the letter and spirit of constitutional jurisprudence in every court appearance and client representation.
              </p>
            </div>

            <div className="p-6 bg-[#EFECE3]/70 border border-[rgba(17,17,16,0.10)] space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#8B7355]" />
              <h3 className="text-lg text-[#111110] font-semibold font-serif">Fiduciary Fidelity</h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Absolute confidentiality and uncompromising diligence in safeguarding every client matter entrusted to our chambers.
              </p>
            </div>

            <div className="p-6 bg-[#EFECE3]/70 border border-[rgba(17,17,16,0.10)] space-y-3">
              <Landmark className="w-6 h-6 text-[#8B7355]" />
              <h3 className="text-lg text-[#111110] font-semibold font-serif">Superior Court Rigour</h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Deep archival legal research and rigorous case preparation drawn from decades of appellate and Supreme Court precedents.
              </p>
            </div>

            <div className="p-6 bg-[#EFECE3]/70 border border-[rgba(17,17,16,0.10)] space-y-3">
              <Award className="w-6 h-6 text-[#8B7355]" />
              <h3 className="text-lg text-[#111110] font-semibold font-serif">Generational Continuity</h3>
              <p className="text-xs text-[#5C5A54] leading-relaxed">
                Seamlessly joining three decades of proven judicial heritage with dynamic, forward-looking modern legal counsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. NAVIGATION CALL TO ACTION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#06231B] text-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
              Looking Forward
            </span>
            <h3
              className="text-3xl sm:text-4xl text-[#F7F5EF] font-light"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Explore Our Modern Practice &amp; Team
            </h3>
            <p className="text-[#C8C4B8] text-xs sm:text-sm leading-relaxed">
              Discover how our 34-year legacy translates into decisive, strategic legal representation for you or your organization today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF8F4] text-[#111110] hover:bg-white text-[0.7rem] uppercase tracking-widest font-semibold transition-colors shadow-sm"
            >
              <span>About The Firm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/teams"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#F7F5EF]/30 hover:border-[#F7F5EF] text-[#F7F5EF] text-[0.7rem] uppercase tracking-widest font-semibold transition-colors"
            >
              <span>Meet Our Advocates</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
