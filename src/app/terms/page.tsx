import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use | AST Law Firm",
  description:
    "Terms of use and engagement notice for AST Law Firm — Ahmed Sabir Tanoli.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="border-b border-[rgba(17,17,16,0.10)] pb-8 space-y-4">
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#8A8780] font-medium block">
            Institutional Governance
          </span>
          <h1
            className="text-4xl sm:text-5xl text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Terms of Use
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
              1. Non-Creation of Advocate-Client Relationship
            </h2>
            <p>
              Accessing this website or submitting an inquiry via digital channels does not create an advocate-client relationship between you and AST Law Firm. An advocate-client relationship is formally established only upon mutual agreement, conflict verification, and formal execution of a Letter of Engagement and Wakalatnama.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className="text-2xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              2. Informational Purpose
            </h2>
            <p>
              Materials and information presented on this website are provided solely for general informational purposes and do not constitute formal legal advice. Legal issues require individualized assessment based on specific factual circumstances and applicable statutes and case law.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className="text-2xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              3. Intellectual Property
            </h2>
            <p>
              The AST Law Firm name, monogram, text, and visual identity are the intellectual property of AST Law Firm. Unauthorized copying or distribution without prior written authorization is prohibited.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
