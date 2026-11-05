import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | AST Law Firm",
  description:
    "Privacy Policy and client data protection practices of AST Law Firm — Ahmed Sabir Tanoli.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              1. Professional Secrecy & Client Confidentiality
            </h2>
            <p>
              AST Law Firm operates under strict standards of professional secrecy, client-advocate privilege, and fiduciary confidentiality mandated by the Legal Practitioners and Bar Councils Act 1973 and the canons of legal ethics in Pakistan.
            </p>
            <p>
              Client information and legal documents are handled with appropriate professional care and confidentiality.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className="text-2xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              2. Information Collected
            </h2>
            <p>
              When you submit a consultation request or contact our chambers, we collect only information that you voluntarily provide:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#5C5A54]">
              <li>Full name, company or entity affiliation.</li>
              <li>Contact telephone number and email address.</li>
              <li>Relevant practice area and general nature of your legal inquiry.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2
              className="text-2xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              3. Purpose of Processing
            </h2>
            <p>
              Information submitted via our inquiry channels is utilized strictly for evaluating conflict of interests, responding to legitimate client inquiries, and scheduling consultations with legal counsel. We do not sell, rent, or distribute contact details to commercial third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className="text-2xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              4. Contact for Inquiries
            </h2>
            <p>
              For questions regarding our privacy practices, please contact:
            </p>
            <p className="text-xs text-[#111110] bg-[#EFECE3] p-4 border border-[rgba(17,17,16,0.10)]">
              AST Law Firm — Ahmed Sabir Tanoli<br />
              Email: {siteConfig.contact.email}<br />
              Address: {siteConfig.contact.officeAddress}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
