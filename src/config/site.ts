export const siteConfig = {
  name: "AST LAW FIRM",
  legalName: "AST Law Firm",
  // Firm identity as per verified branding
  firmBrand: "AHMED SABIR TANOLI",
  descriptor: "ADVOCATES | SOLICITORS | CORPORATE COUNSELLORS",
  tagline: "Legacy Since 1992",
  positioning: "Professional Legal Representation. Strategic Counsel. Trusted Advocacy.",
  jurisdiction: "Advocate Supreme Court of Pakistan · High Courts · District & Specialised Tribunals",
  url: "https://astlawfirm.com",

  // Verified Principals
  principals: {
    founder: {
      name: "Haji Sabir Hussain Tanoli",
      designation: "Advocate Supreme Court of Pakistan",
      role: "Founder & Senior Partner",
    },
    coFounder: {
      name: "Ahmed Hussain Tanoli",
      designation: "Advocate High Court",
      role: "Co-Founder & Managing Partner",
    },
  },

  // Legacy Information
  legacy: {
    since: "1992",
    originalFirm: "TANAWAL LAW ASSOCIATES (TLA)",
    mergerYear: "2026",
    currentName: "AST LAW FIRM",
  },

  // Contact — Official firm chambers and branches
  contact: {
    whatsappNumber: "923259540470",
    whatsappDisplay: "0325 9540470",
    phone: "0315 6559995",
    phoneDisplay: "0315 6559995",
    landline: "051 2352396",
    landlineDisplay: "051-2352396",
    email: "contact@astlawfirms.com",
    hours: "9:00 AM – 7:00 PM (Monday to Saturday)",
    officeAddress: "Flat No. 1, Barrister Arcade, Opposite Family Courts Complex, G 10/1, Islamabad",
    offices: [
      {
        city: "Islamabad",
        name: "AST LAW FIRM ISLAMABAD",
        address: "Flat No. 1, Barrister Arcade, Opposite Family Courts Complex, G 10/1, Islamabad",
        detail: "Islamabad Principal Chambers",
        phone: "0315 6559995",
        landline: "051-2352396",
        mapUrl: "https://maps.google.com/maps?q=33.6696297%2C73.0145609&z=17&hl=en",
      },
      {
        city: "Abbottabad",
        name: "AST LAW FIRM ABBOTTABAD",
        address: "Office No. 44 & 45, Sherpao Lawyers Plaza, Near District Bar Room, Abbottabad",
        detail: "District Bar & Judicial Complex Liaison",
        mapUrl: "https://maps.google.com/maps?q=34.14509582519531%2C73.21002960205078&z=17&hl=en",
      },
      {
        city: "Karachi",
        name: "AST LAW FIRM KARACHI",
        address: "Room # 13, 2nd Floor, Namco Centre, Campbell Street, Karachi",
        detail: "Karachi Chamber",
        mapUrl: "https://maps.google.com/maps?q=24.8532639%2C67.0069225&z=17&hl=en",
      },
    ],
  },

  navigation: [
    { label: "About", href: "/about" },
    { label: "Our Legacy", href: "/legacy" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Teams", href: "/teams" },
    { label: "News & Updates", href: "/news-updates" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],

  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Engagement", href: "/terms" },
    { label: "Legal Disclaimer", href: "/legal-disclaimer" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export function getWhatsAppUrl(message?: string): string {
  const number = siteConfig.contact.whatsappNumber;
  if (number === "WHATSAPP_NUMBER_PLACEHOLDER") {
    return `https://wa.me/?text=${encodeURIComponent(message || "Inquiry for AST Law Firm — Ahmed Sabir Tanoli")}`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message || "Inquiry for AST Law Firm — Ahmed Sabir Tanoli")}`;
}
