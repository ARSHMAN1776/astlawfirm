import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie Policy | AST Law Firm",
  description: "Information regarding cookie usage on the AST Law Firm website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="border-b border-[rgba(17,17,16,0.10)] pb-8 space-y-4">
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#8A8780] font-medium block">
            Digital Governance
          </span>
          <h1
            className="text-4xl sm:text-5xl text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Cookie Policy
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
              1. Minimalist Digital Practice
            </h2>
            <p>
              In alignment with our firm’s professional standards, AST Law Firm does not employ invasive tracking cookies, third-party advertising cookies, or behavioural profiling tools on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className="text-2xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              2. Technical Cookies Only
            </h2>
            <p>
              Any cookies or local storage utilized by this website are strictly limited to technical functionality required for secure browsing, font loading, and standard website performance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
