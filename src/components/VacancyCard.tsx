"use client";

import React, { useState } from "react";
import { MapPin, ChevronDown, Navigation, Mail, MessageCircle } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import type { Vacancy } from "@/data/careers";

const serif = { fontFamily: "var(--font-cormorant), Georgia, serif" } as const;

const Bullets: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-1.5">
    {items.map((text) => (
      <li key={text} className="flex gap-2.5 text-[0.88rem] leading-[1.6] text-[#3D3B37]">
        <span className="mt-[0.5rem] h-1 w-1 shrink-0 rotate-45 bg-[#8B7355]" aria-hidden="true" />
        <span>{text}</span>
      </li>
    ))}
  </ul>
);

const H = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-2.5 text-[0.64rem] font-bold uppercase tracking-[0.22em] text-[#06231B]">{children}</h3>
);

/** Small vacancy card: title and apply buttons up front, everything else behind "View details". */
export const VacancyCard: React.FC<{ vacancy: Vacancy }> = ({ vacancy }) => {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView<HTMLElement>(0.1);
  const office = siteConfig.contact.offices[0];
  const employment = (label: string) => vacancy.employment.find((e) => e.label === label)?.value ?? "";
  const address = vacancy.howToApply.addressLines.map((l) => l.replace(/[.,]$/, "")).join(", ") + ".";

  const mailHref = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Application — ${vacancy.title}`)}&body=${encodeURIComponent(
    [
      "Dear AST Law Firm,",
      "",
      `I would like to apply for the position of ${vacancy.title}.`,
      "",
      "Full name:",
      "Qualification:",
      "Experience (if any):",
      "",
      "My updated CV is attached.",
    ].join("\n")
  )}`;
  const whatsappHref = getWhatsAppUrl(
    `Hello AST Law Firm, I would like to apply for the position of ${vacancy.title}. Please let me know how to submit my updated CV.`
  );

  return (
    <article
      id="vacancy"
      ref={ref}
      aria-labelledby="vacancy-title"
      className={`reveal-up scroll-mt-28 relative w-full max-w-[32rem] border border-[#8B7355]/40 bg-[#FBF9F4] shadow-[0_14px_30px_-22px_rgba(6,35,27,0.35)] ${
        inView ? "is-in" : ""
      }`}
    >
      <span
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#8B7355] via-[#D9C7A0] to-[#8B7355]"
        aria-hidden="true"
      />

      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 bg-[#06231B] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#D9C7A0]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#25D366]" aria-hidden="true" />
            Vacancy
          </span>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#6B6860]">{employment("Employment")}</span>
        </div>

        <h2
          id="vacancy-title"
          className="mt-5 text-[1.65rem] font-semibold leading-[1.18] text-[#111110] sm:text-[1.9rem]"
          style={serif}
        >
          {vacancy.title}
        </h2>

        <p className="mt-3 inline-flex items-center gap-2 text-[0.88rem] text-[#5C5A54]">
          <MapPin className="h-4 w-4 text-[#8B7355]" aria-hidden="true" />
          {employment("Location")}
        </p>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#8B7355]/25 pt-5">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="vacancy-details"
            className="group inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#111110] transition-colors hover:text-[#8B7355]"
          >
            {open ? "Hide details" : "View details"}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : "group-hover:translate-y-0.5"}`}
              aria-hidden="true"
            />
          </button>

          <div className="flex items-center gap-2">
            <span className="mr-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#8A8780]">Apply</span>
            <a
              href={mailHref}
              aria-label="Apply by email"
              title="Apply by email"
              className="grid h-11 w-11 place-items-center bg-[#06231B] text-[#F7F5EF] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A3328] hover:shadow-md"
            >
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apply on WhatsApp"
              title="Apply on WhatsApp"
              className="grid h-11 w-11 place-items-center bg-[#25D366] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20ba59] hover:shadow-md"
            >
              <MessageCircle className="h-[18px] w-[18px] fill-current" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Details (collapsed by default) */}
      <div
        id="vacancy-details"
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className="max-h-[26rem] space-y-6 overflow-y-auto overscroll-contain border-t border-[#8B7355]/30 px-6 py-6 sm:px-7 [scrollbar-width:thin] [scrollbar-color:#B09A6E_transparent]"
            aria-hidden={!open}
            tabIndex={open ? 0 : -1}
          >
            <p className="text-[0.9rem] leading-[1.7] text-[#5C5A54]">{vacancy.intro}</p>

            <section>
              <H>Key responsibilities</H>
              <Bullets items={vacancy.responsibilities} />
            </section>

            <section>
              <H>Eligibility</H>
              <Bullets items={vacancy.eligibility} />
            </section>

            <section>
              <H>Experience &amp; salary</H>
              <p className="text-[0.88rem] leading-[1.65] text-[#3D3B37]">{vacancy.experience}</p>
              <p className="mt-1 text-[0.88rem] leading-[1.65] text-[#3D3B37]">Salary: {employment("Salary")}</p>
            </section>

            <section className="border-l-2 border-[#8B7355] bg-[#F3EFE4] px-4 py-3">
              <H>How to apply</H>
              <p className="text-[0.88rem] leading-[1.65] text-[#3D3B37]">
                {vacancy.howToApply.lead} <span className="font-medium text-[#111110]">{address}</span>
              </p>
              <p className="mt-1.5 text-[0.8rem] italic text-[#6B6860]">{vacancy.howToApply.note}</p>
              <a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#06231B] underline-offset-4 hover:text-[#8B7355] hover:underline"
              >
                <Navigation className="h-3 w-3" aria-hidden="true" />
                Get directions
              </a>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};
