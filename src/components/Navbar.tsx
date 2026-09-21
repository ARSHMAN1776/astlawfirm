"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F5EF]/98 backdrop-blur-md shadow-[0_1px_0_rgba(17,17,16,0.08)] py-2"
          : "bg-[#F7F5EF] border-b border-[rgba(17,17,16,0.10)] py-2.5 sm:py-3"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-2 lg:gap-4">
        {/* AST Logo Left */}
        <div className="flex-shrink-0">
          <Logo variant="full" />
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8"
          aria-label="Main Navigation"
        >
          {siteConfig.navigation.map((item) => {
            const isActive =
              item.href === "/about#legacy"
                ? false
                : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-[0.64rem] xl:text-[0.72rem] tracking-[0.12em] xl:tracking-[0.16em] uppercase transition-colors duration-200 py-1 relative ${
                  isActive
                    ? "text-[#111110] font-medium after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1.5px] after:bg-[#8B7355]"
                    : "text-[#5C5A54] hover:text-[#111110]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Consultation CTA */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 xl:gap-2 text-[0.62rem] xl:text-[0.68rem] tracking-[0.14em] xl:tracking-[0.18em] uppercase px-3.5 py-2 xl:px-5 xl:py-2.5 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] transition-colors duration-300 whitespace-nowrap font-medium"
          >
            <span>Request a Consultation</span>
            <span className="text-sm leading-none transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/contact"
            className="text-[0.62rem] tracking-[0.14em] uppercase px-3 py-1.5 bg-[#111110] text-[#F7F5EF] whitespace-nowrap"
          >
            Consult
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111110] hover:text-[#8B7355] focus-visible:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#F7F5EF] border-b border-[rgba(17,17,16,0.12)] shadow-xl px-6 py-8 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/about#legacy"
                  ? false
                  : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs tracking-[0.18em] uppercase transition-colors py-2 border-b border-[rgba(17,17,16,0.08)] ${
                    isActive ? "text-[#111110] font-medium" : "text-[#5C5A54] hover:text-[#111110]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center text-xs tracking-[0.18em] uppercase py-3 bg-[#111110] text-[#F7F5EF] font-medium"
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
