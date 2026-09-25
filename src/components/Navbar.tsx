"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";

/** Extra routes that should keep a nav item highlighted (they render the same section). */
const ACTIVE_ALIASES: Record<string, string[]> = {
  "/teams": ["/attorneys"],
  "/legacy": ["/our-legacy"],
};

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    [href, ...(ACTIVE_ALIASES[href] ?? [])].some((h) => pathname === h || pathname.startsWith(`${h}/`));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F5EF]/98 backdrop-blur-md shadow-[0_1px_0_rgba(17,17,16,0.08)] py-2"
          : "bg-[#F7F5EF] border-b border-[rgba(17,17,16,0.10)] py-2.5 sm:py-3"
      }`}
    >
      {/* Same container as the page content and footer, so edges line up */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
        <div className="flex-shrink-0">
          <Logo variant="full" />
        </div>

        {/* Desktop navigation — centred between logo and CTA */}
        <nav
          className="hidden xl:flex flex-1 items-center justify-center gap-6"
          aria-label="Main Navigation"
        >
          {siteConfig.navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative whitespace-nowrap py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                  active ? "text-[#111110]" : "text-[#5C5A54] hover:text-[#111110]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-[1.5px] origin-left bg-[#8B7355] transition-transform duration-300 ease-out ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop consultation CTA */}
        <div className="hidden xl:flex items-center flex-shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] text-[0.68rem] font-medium uppercase tracking-[0.16em] whitespace-nowrap transition-colors duration-300"
          >
            <span>Consultation</span>
            <span className="text-sm leading-none transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        {/* Mobile / tablet controls */}
        <div className="flex xl:hidden items-center gap-3">
          <Link
            href="/contact"
            className="text-[0.62rem] tracking-[0.14em] uppercase px-3 py-1.5 bg-[#111110] text-[#F7F5EF] whitespace-nowrap"
          >
            Consult
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-[#111110] hover:text-[#8B7355] focus-visible:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden nav-drawer-in absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#F7F5EF] border-b border-[rgba(17,17,16,0.12)] shadow-xl">
          <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex flex-col" aria-label="Mobile Navigation">
            {siteConfig.navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between text-xs tracking-[0.18em] uppercase transition-colors py-3.5 border-b border-[rgba(17,17,16,0.08)] ${
                    active ? "text-[#111110] font-semibold" : "text-[#5C5A54] hover:text-[#111110]"
                  }`}
                >
                  {item.label}
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-[#8B7355]" aria-hidden="true" />}
                </Link>
              );
            })}
            <div className="pt-5">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center text-xs tracking-[0.18em] uppercase py-3.5 bg-[#06231B] text-[#F7F5EF] font-medium"
              >
                Request a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
