import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Legal Disclaimer | AST Law Firm",
  description:
    "Legal disclaimer and regulatory compliance statement for AST Law Firm — Ahmed Sabir Tanoli.",
};

export default function LegalDisclaimerPage() {
  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="border-b border-[rgba(17,17,16,0.10)] pb-8 space-y-4">
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#8A8780] font-medium block">
            Regulatory Compliance
          </span>
          <h1
            className="text-4xl sm:text-5xl text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Legal Disclaimer
          </h1>
          <p className="text-xs text-[#8A8780]">
            AST Law Firm — Ahmed Sabir Tanoli · Advocates | Solicitors | Corporate Counsellors
          </p>
        </div>

        <div className="space-y-8 text-[#5C5A54] text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2
              className="text-2xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              1. Non-Solicitation & Bar Council Rules
            </h2>
            <p>
              In compliance with the rules of the Pakistan Bar Council and applicable Canons of Professional Conduct and Etiquette, this website does not constitute advertising, solicitation, personal communication, invitation, or inducement of any sort by AST Law Firm or its advocates to solicit work.
            </p>
            <p>
              The user acknowledges that the contents of this website are meant exclusively to provide general information regarding the firm’s background and practice areas at the user’s voluntary request.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className="text-2xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              2. No Guaranteed Outcomes
            </h2>
            <p>
              AST Law Firm does not promise guaranteed legal outcomes, successful litigation, or specific case results. Every legal matter depends on its specific factual matrix, evidence, applicable law, and judicial interpretation.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className="text-2xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              3. Jurisdictional Notice
            </h2>
            <p>
              The advocates of AST Law Firm practice before the courts and statutory tribunals of the Islamic Republic of Pakistan, subject to the relevant rules and enrollments of the competent Bar Councils.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
