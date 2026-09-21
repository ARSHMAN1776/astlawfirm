import React from "react";
import type { Metadata } from "next";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { ConsultationForm } from "@/components/ConsultationForm";
import { MapPin, Phone, Mail, Clock, MessageSquare, MessageCircle, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | AST Law Firm — Ahmed Sabir Tanoli",
  description:
    "Request a consultation with AST Law Firm (Ahmed Sabir Tanoli). Advocates, Solicitors & Corporate Counsellors in Pakistan.",
};

export default function ContactPage() {
  const { contact, legacy } = siteConfig;

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      {/* 1. Header Banner */}
      <section className="border-b border-[rgba(17,17,16,0.10)] pb-16 pt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-5 h-[1px] bg-[#8B7355]" />
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8A8780] font-medium">
              Consultation & Inquiries
            </span>
          </div>

          <div className="border-l-2 border-[#8B7355] pl-4 py-1">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111110] max-w-4xl leading-[1.12] tracking-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 700 }}
            >
              Contact AST Law Firm
            </h1>
          </div>

          <p className="text-[#5C5A54] text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            All inquiries are handled under professional standards of discretion and confidentiality. We provide structured guidance to understand your matter and identify available legal options.
          </p>

          {/* Direct WhatsApp Action Button */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={getWhatsAppUrl("Hello AST Law Firm, I would like to inquire about legal representation and schedule a consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#06231B] hover:bg-[#0A3328] text-[#F7F5EF] text-[0.72rem] uppercase tracking-widest font-semibold transition-all duration-200 shadow-sm"
            >
              <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-3.5 h-3.5 fill-current text-white" />
              </div>
              <span>Chat on WhatsApp · 0315 6559995</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8B7355] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="tel:03156559995"
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#111110]/25 hover:border-[#111110] bg-transparent text-[#111110] text-[0.72rem] uppercase tracking-widest font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B7355]" />
              <span>Call: 0315 6559995</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Layout */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: Chambers Directory & Verified Placeholders */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-3">
                <span className="text-[0.65rem] tracking-[0.26em] uppercase text-[#8A8780] block">
                  Chambers Directory
                </span>
                <div className="border-l-2 border-[#8B7355] pl-3 py-0.5">
                  <h2
                    className="text-3xl sm:text-4xl text-[#111110] font-bold"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 700 }}
                  >
                    Discuss Your Legal Matter
                  </h2>
                </div>
                <p className="text-[#5C5A54] text-sm leading-relaxed">
                  We schedule consultations to review circumstances, identify applicable legal frameworks, and evaluate available legal remedies.
                </p>
              </div>

              {/* Information List */}
              <div className="space-y-6 border-t border-[rgba(17,17,16,0.10)] pt-8">
                {/* Office 1 — Islamabad */}
                <div className="flex items-start gap-4 p-4 bg-[#FAF8F3] border border-[rgba(17,17,16,0.08)] relative group hover:border-[#8B7355]/40 transition-all duration-200">
                  <div className="w-10 h-10 border border-[rgba(17,17,16,0.12)] bg-[#EFECE3] flex items-center justify-center flex-shrink-0 text-[#111110]">
                    <MapPin className="w-4 h-4 text-[#8B7355]" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[0.62rem] tracking-[0.2em] uppercase text-[#8B7355] font-semibold">
                        Islamabad Chambers
                      </span>
                      <span className="text-[0.55rem] tracking-wider uppercase px-1.5 py-0.5 bg-[#06231B] text-[#F7F5EF] font-mono">
                        Office 1
                      </span>
                    </div>
                    <p className="text-[#111110] text-xs font-semibold uppercase tracking-wider">
                      Ahmed Sabir Tanoli / AST Law Firm
                    </p>
                    <p className="text-[#33312E] text-xs sm:text-sm leading-relaxed">
                      Flat No. 1, Barrister Arcade, Opposite Family Courts Complex, G 10/1, Islamabad
                    </p>
                    <div className="pt-1.5">
                      <a
                        href={contact.offices[0].mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#06231B] hover:bg-[#0A3328] text-[#F7F5EF] text-[0.62rem] tracking-[0.16em] uppercase font-semibold transition-all duration-200 shadow-xs group/btn"
                      >
                        <MapPin className="w-3 h-3 text-[#8B7355]" />
                        <span>Google Maps Location</span>
                        <ArrowUpRight className="w-3 h-3 text-[#8B7355] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office 2 — Abbottabad */}
                <div className="flex items-start gap-4 p-4 bg-[#FAF8F3] border border-[rgba(17,17,16,0.08)] relative group hover:border-[#8B7355]/40 transition-all duration-200">
                  <div className="w-10 h-10 border border-[rgba(17,17,16,0.12)] bg-[#EFECE3] flex items-center justify-center flex-shrink-0 text-[#111110]">
                    <MapPin className="w-4 h-4 text-[#8B7355]" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[0.62rem] tracking-[0.2em] uppercase text-[#8B7355] font-semibold">
                        Abbottabad Office
                      </span>
                      <span className="text-[0.55rem] tracking-wider uppercase px-1.5 py-0.5 bg-[#06231B] text-[#F7F5EF] font-mono">
                        Office 2
                      </span>
                    </div>
                    <p className="text-[#111110] text-xs font-semibold uppercase tracking-wider">
                      AST Law Firm — Abbottabad Chambers
                    </p>
                    <p className="text-[#33312E] text-xs sm:text-sm leading-relaxed">
                      Office No. 44 &amp; 45, Sherpao Lawyers Plaza, Near District Bar Room, Abbottabad
                    </p>
                    <div className="pt-1.5">
                      <a
                        href={contact.offices[1].mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#06231B] hover:bg-[#0A3328] text-[#F7F5EF] text-[0.62rem] tracking-[0.16em] uppercase font-semibold transition-all duration-200 shadow-xs group/btn"
                      >
                        <MapPin className="w-3 h-3 text-[#8B7355]" />
                        <span>Google Maps Location</span>
                        <ArrowUpRight className="w-3 h-3 text-[#8B7355] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[rgba(17,17,16,0.12)] bg-[#EFECE3] flex items-center justify-center flex-shrink-0 text-[#111110]">
                    <Phone className="w-4 h-4 text-[#8B7355]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8A8780] font-medium">
                      Phone Number
                    </h3>
                    <p className="text-[#111110] text-sm font-medium font-mono">
                      <a href="tel:03156559995" className="hover:text-[#8B7355] transition-colors">
                        0315 6559995
                      </a>
                    </p>
                    <p className="text-[#8A8780] text-xs">
                      Official Chamber Inquiries &amp; Appointments
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[rgba(17,17,16,0.12)] bg-[#EFECE3] flex items-center justify-center flex-shrink-0 text-[#111110]">
                    <Mail className="w-4 h-4 text-[#8B7355]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8A8780] font-medium">
                      Email Address
                    </h3>
                    <p className="text-[#111110] text-sm font-medium font-mono">
                      <a href="mailto:contact@astlawfirms.com" className="hover:text-[#8B7355] transition-colors">
                        contact@astlawfirms.com
                      </a>
                    </p>
                    <p className="text-[#8A8780] text-xs">
                      Official Firm Communications
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[rgba(17,17,16,0.12)] bg-[#EFECE3] flex items-center justify-center flex-shrink-0 text-[#111110]">
                    <Clock className="w-4 h-4 text-[#8B7355]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8A8780] font-medium">
                      Office Hours
                    </h3>
                    <p className="text-[#111110] text-sm font-medium">
                      10:00 AM to 5:00 PM (Monday to Friday)
                    </p>
                    <p className="text-[#8A8780] text-xs">
                      Closed on Weekends &amp; Court Holidays
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Firm Legacy Note */}
              <div className="border border-[rgba(17,17,16,0.10)] bg-[#EFECE3] p-6 space-y-2">
                <p className="text-[0.65rem] tracking-[0.24em] uppercase text-[#8B7355] font-medium">
                  Professional Practice
                </p>
                <p className="text-sm text-[#111110] font-medium">
                  AST Law Firm — Legacy Since {legacy.since}
                </p>
                <p className="text-xs text-[#5C5A54] leading-relaxed">
                  Founded by Haji Sabir Hussain Tanoli, Advocate Supreme Court of Pakistan, and Ahmed Hussain Tanoli, Advocate High Court.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Consultation Form */}
            <div className="lg:col-span-7">
              <div className="border border-[rgba(17,17,16,0.12)] bg-[#EFECE3]/60 p-8 sm:p-12 space-y-8">
                <div className="space-y-3 border-b border-[rgba(17,17,16,0.10)] pb-6">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <span className="text-[0.65rem] tracking-[0.26em] uppercase text-[#8A8780] block">
                        Direct Inquiry
                      </span>
                      <div className="border-l-2 border-[#8B7355] pl-3 py-0.5 mt-1">
                        <h3
                          className="text-2xl sm:text-3xl text-[#111110] font-bold"
                          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 700 }}
                        >
                          Request a Consultation
                        </h3>
                      </div>
                    </div>

                    <a
                      href={getWhatsAppUrl("Hello AST Law Firm, I would like to request a legal consultation.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-[0.65rem] uppercase tracking-widest font-semibold transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current text-white" />
                      <span>WhatsApp Direct</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <p className="text-[#5C5A54] text-xs sm:text-sm">
                    Complete the particulars below. AST Law Firm provides a structured and professional approach to evaluating your legal matter.
                  </p>
                </div>

                <ConsultationForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Chambers Locations & Google Maps Section */}
      <section className="border-t border-[rgba(17,17,16,0.10)] pt-16 pb-8 bg-[#EFECE3]/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[rgba(17,17,16,0.10)]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-[1px] bg-[#8B7355]" />
                <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#8B7355] font-semibold">
                  Chambers Map Access
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111110]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Find Our Chambers &amp; Offices
              </h2>
            </div>
            <p className="text-[#5C5A54] text-xs sm:text-sm max-w-md">
              Direct navigation links to AST Law Firm chambers in Islamabad and Abbottabad. Click below to open verified location in Google Maps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contact.offices.map((office, idx) => (
              <div
                key={office.city}
                className="relative bg-[#FAF8F3] border border-[rgba(17,17,16,0.12)] p-6 sm:p-8 flex flex-col justify-between hover:shadow-[0_12px_28px_-5px_rgba(0,0,0,0.08)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[0.62rem] tracking-[0.22em] uppercase text-[#8B7355] font-semibold">
                      {office.city} • Office {idx + 1}
                    </span>
                    <span className="text-[0.55rem] tracking-wider uppercase px-2 py-0.5 bg-[#06231B]/10 text-[#06231B] font-semibold">
                      {office.detail}
                    </span>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl text-[#111110] font-bold mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {office.name}
                  </h3>

                  <div className="flex items-start gap-3 text-[#5C5A54] text-xs sm:text-sm leading-relaxed mb-6">
                    <MapPin className="w-4 h-4 text-[#8B7355] flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                </div>

                <div className="pt-5 border-t border-[rgba(17,17,16,0.08)] flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#06231B] hover:bg-[#0A3328] text-[#F7F5EF] text-[0.68rem] uppercase tracking-widest font-semibold transition-all duration-200 shadow-sm group/btn"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#8B7355]" />
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8B7355] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  <a
                    href="tel:03156559995"
                    className="inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.16em] uppercase text-[#5C5A54] hover:text-[#111110] font-medium transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#8B7355]" />
                    <span>0315 6559995</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
