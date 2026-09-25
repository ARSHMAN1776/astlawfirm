import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { vacancy, careerBenefits, careerValues, careerSteps } from "@/data/careers";
import { VacancyCard } from "@/components/VacancyCard";
import { StripeColumns, RuleColumns } from "@/components/CareersBlocks";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your practice at AST Law Firm — Ahmed Sabir Tanoli. Current vacancy: Office Clerk / Legal Office Assistant, Islamabad. Chambers in Islamabad, Abbottabad and Karachi.",
  alternates: { canonical: "/careers" },
};

const serif = { fontFamily: "var(--font-cormorant), Georgia, serif" } as const;

export default function CareersPage() {
  const { contact, legacy } = siteConfig;

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-16 sm:pb-24">
      {/* Hero */}
      <section className="border-b border-[rgba(17,17,16,0.10)] pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-5 h-[1px] bg-[#8B7355]" />
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">
              Careers · Join the Chambers
            </span>
          </div>

          <div className="border-l-2 border-[#8B7355] pl-4 py-1">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-[#111110] max-w-4xl leading-[1.12] tracking-tight"
              style={{ ...serif, fontWeight: 400 }}
            >
              Build Your Practice on Principled Advocacy
            </h1>
          </div>

          <p className="text-[#5C5A54] text-base sm:text-xl max-w-3xl leading-relaxed">
            AST Law Firm brings together a heritage dating to {legacy.since} and a modern multi-city practice. We are
            always interested in advocates, researchers and chamber staff who share our commitment to rigorous
            preparation and honest advocacy.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#open-roles"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] text-[0.68rem] uppercase tracking-[0.18em] font-semibold transition-colors"
            >
              View vacancy
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#EFECE3] border border-[rgba(17,17,16,0.12)] text-xs text-[#111110]">
              <span className="w-2 h-2 rounded-full bg-[#8B7355]" />
              <span className="font-semibold uppercase tracking-wider text-[0.65rem]">Islamabad · Abbottabad · Karachi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why AST */}
      <section className="py-20 sm:py-24 border-b border-[rgba(17,17,16,0.10)] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <Reveal className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#8B7355]" />
              <span className="text-[0.62rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">Life at the Chambers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] leading-tight" style={{ ...serif, fontWeight: 400 }}>
              Why Practise With Us
            </h2>
          </Reveal>

          <StripeColumns items={careerBenefits} />
        </div>
      </section>

      {/* Open vacancy */}
      <section id="open-roles" className="py-20 sm:py-28 border-b border-[rgba(17,17,16,0.10)] bg-[#F5F2EB] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <Reveal className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#8B7355]" />
              <span className="text-[0.62rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] leading-tight" style={{ ...serif, fontWeight: 400 }}>
              Current Vacancy
            </h2>
            <p className="text-[#5C5A54] text-sm sm:text-base leading-relaxed max-w-xl">
              Our current opening is shown here. Open the details, then apply by email or WhatsApp, or submit your
              updated CV at our Islamabad chambers.
            </p>
          </Reveal>

          <VacancyCard vacancy={vacancy} />
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 border-b border-[rgba(17,17,16,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <Reveal className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#8B7355]" />
              <span className="text-[0.62rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">What We Expect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#111110] leading-tight" style={{ ...serif, fontWeight: 400 }}>
              The Standards Every Member Keeps
            </h2>
          </Reveal>

          <RuleColumns items={careerValues} columnsClass="sm:grid-cols-2 lg:grid-cols-5" />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24 bg-[#EFECE3]/80 border-b border-[rgba(17,17,16,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <Reveal className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#8B7355]" />
              <span className="text-[0.62rem] tracking-[0.3em] uppercase text-[#8B7355] font-semibold">How to Apply</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#111110] leading-tight" style={{ ...serif, fontWeight: 400 }}>
              From First Email to First Brief
            </h2>
          </Reveal>

          <RuleColumns items={careerSteps} columnsClass="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* Closing call to action */}
      <section className="py-16 sm:py-20 bg-[#06231B] text-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#B09A6E] font-semibold">Send Us Your CV</span>
            <h3 className="text-3xl sm:text-4xl text-[#F7F5EF] font-light" style={serif}>
              Don’t see the right role? Write to us.
            </h3>
            <p className="text-[#C8C4B8] text-xs sm:text-sm leading-relaxed">
              Email {contact.email} with your CV and a short note about the chamber and practice area that interest you.
              All applications are handled in confidence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent("Career enquiry — AST Law Firm")}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF8F4] text-[#111110] hover:bg-white text-[0.7rem] uppercase tracking-widest font-semibold transition-colors shadow-sm"
            >
              <span>Email your CV</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={getWhatsAppUrl("Hello AST Law Firm, I would like to enquire about career opportunities at your chambers.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#F7F5EF]/30 hover:border-[#F7F5EF] text-[#F7F5EF] text-[0.7rem] uppercase tracking-widest font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/teams"
              className="inline-flex items-center gap-1.5 text-[0.68rem] tracking-[0.16em] uppercase font-semibold text-[#F7F5EF]/80 hover:text-white transition-colors"
            >
              Meet the team <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
