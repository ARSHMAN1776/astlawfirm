import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { practiceAreas } from "@/data/practiceAreas";

export const Footer: React.FC = () => {
  const { principals, legacy } = siteConfig;

  return (
    <footer
      style={{ background: "#0D0C0B" }}
      className="text-white border-t border-white/[0.06]"
    >
      {/* ── MAIN GRID ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-white/[0.07]">

          {/* ── COL 1: Firm Identity ── lg:col-span-4 */}
          <div className="lg:col-span-4 space-y-6">

            {/* Logo + Name */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/branding/ast-monogram-exact-white.png"
                  alt="AST Monogram"
                  width={30}
                  height={26}
                  className="object-contain brightness-0 invert"
                />
                {/* Divider */}
                <span className="w-[1px] h-7 bg-white/15 block" />
                <span
                  className="text-white text-sm font-medium tracking-[0.20em]"
                  style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}
                >
                  AST LAW FIRM
                </span>
              </div>

              <div className="space-y-0.5 pl-[1px]">
                <p className="text-[0.6rem] tracking-[0.28em] uppercase text-white/40 font-medium">
                  Ahmed Sabir Tanoli
                </p>
                <p className="text-[0.52rem] tracking-[0.18em] uppercase text-white/25">
                  Advocates | Solicitors | Corporate Counsellors
                </p>
              </div>

              {/* Legacy line */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="w-5 h-[1px] bg-white/20" />
                <span className="text-[0.52rem] tracking-[0.22em] uppercase text-white/35 font-medium">
                  Legacy Since {legacy.since}
                </span>
              </div>
            </div>

            {/* Principals */}
            <div className="border-t border-white/[0.07] pt-5 space-y-4">
              <div className="space-y-0.5">
                <p className="text-[0.75rem] font-semibold text-white/90 tracking-wide">
                  {principals.founder.name}
                </p>
                <p className="text-[0.6rem] text-white/35 tracking-wide leading-relaxed">
                  {principals.founder.designation} · {principals.founder.role}
                </p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[0.75rem] font-semibold text-white/90 tracking-wide">
                  {principals.coFounder.name}
                </p>
                <p className="text-[0.6rem] text-white/35 tracking-wide leading-relaxed">
                  {principals.coFounder.designation} · {principals.coFounder.role}
                </p>
              </div>
            </div>
          </div>

          {/* ── COL 2: Navigation ── lg:col-span-2 */}
          <div className="lg:col-span-2 space-y-5">
            <div className="space-y-1.5">
              <h4 className="text-[0.58rem] tracking-[0.30em] uppercase text-white/30 font-semibold">
                Navigation
              </h4>
              <div className="w-5 h-[1px] bg-white/15" />
            </div>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Our Legacy", href: "/legacy" },
                { label: "Practice Areas", href: "/practice-areas" },
                { label: "Teams", href: "/teams" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between text-[0.72rem] text-white/45 hover:text-white/90 transition-colors duration-200"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: Practice Areas ── lg:col-span-3 */}
          <div className="lg:col-span-3 space-y-5">
            <div className="space-y-1.5">
              <h4 className="text-[0.58rem] tracking-[0.30em] uppercase text-white/30 font-semibold">
                Practice Areas
              </h4>
              <div className="w-5 h-[1px] bg-white/15" />
            </div>
            <ul className="space-y-2.5">
              {practiceAreas.map((pa) => (
                <li key={pa.slug}>
                  <Link
                    href={`/practice-areas/${pa.slug}`}
                    className="group flex items-center justify-between text-[0.72rem] text-white/45 hover:text-white/90 transition-colors duration-200"
                  >
                    <span className="line-clamp-1">{pa.title}</span>
                    <ArrowRight className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-50 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: Inquiries ── lg:col-span-3 */}
          <div className="lg:col-span-3 space-y-5">
            <div className="space-y-1.5">
              <h4 className="text-[0.58rem] tracking-[0.30em] uppercase text-white/30 font-semibold">
                Inquiries
              </h4>
              <div className="w-5 h-[1px] bg-white/15" />
            </div>

            <div className="space-y-4">
              {/* Office 1 */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3 h-3 flex-shrink-0 text-white/25 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[0.7rem] font-semibold text-white/80 tracking-wide">
                    1. Islamabad Chambers
                  </p>
                  <p className="text-[0.62rem] text-white/35 leading-relaxed">
                    Flat No.1, Barrister Arcade, Opp. Family Courts Complex, G 10/1, Islamabad
                  </p>
                </div>
              </div>

              {/* Office 2 */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3 h-3 flex-shrink-0 text-white/25 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[0.7rem] font-semibold text-white/80 tracking-wide">
                    2. Abbottabad Office
                  </p>
                  <p className="text-[0.62rem] text-white/35 leading-relaxed">
                    Office No. 44 &amp; 45, Sherpao Lawyers Plaza, Near District Bar Room, Abbottabad
                  </p>
                </div>
              </div>

              {/* Contact details */}
              <div className="pt-2 border-t border-white/[0.07] space-y-2">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3 h-3 flex-shrink-0 text-white/25" />
                  <span className="text-[0.6rem] text-white/30">Phone:</span>
                  <a
                    href="tel:03156559995"
                    className="text-[0.62rem] text-white/60 hover:text-white transition-colors font-mono"
                  >
                    0311 5559995
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3 h-3 flex-shrink-0 text-white/25" />
                  <span className="text-[0.6rem] text-white/30">Email:</span>
                  <a
                    href="mailto:contact@astlawfirms.com"
                    className="text-[0.62rem] text-white/60 hover:text-white transition-colors font-mono"
                  >
                    contact@astlawfirms.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3 h-3 flex-shrink-0 text-white/25" />
                  <span className="text-[0.6rem] text-white/30">Hours:</span>
                  <span className="text-[0.62rem] text-white/45">
                    10:00 AM to 5:00 PM (Mon – Fri)
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 px-5 py-2.5 text-[0.62rem] tracking-[0.18em] uppercase text-white/60 hover:text-white transition-all duration-200"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ────────────────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.62rem] text-white/20 tracking-wide">
            © {new Date().getFullYear()} AST Law Firm. All rights reserved.
          </p>
          <p className="text-[0.58rem] tracking-[0.28em] uppercase text-white/18">
            Justice&nbsp;/&nbsp;Integrity&nbsp;/&nbsp;Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
