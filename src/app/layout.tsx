import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollBar } from "@/components/ScrollBar";
import { siteConfig } from "@/config/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AST LAW FIRM",
    template: `%s | AST LAW FIRM`,
  },
  icons: {
    icon: [
      { url: "/branding/ast-monogram-exact.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/branding/ast-monogram-exact.png",
  },
  description: `${siteConfig.name} — Ahmed Sabir Tanoli. Advocates, Solicitors & Corporate Counsellors. Professional Legal Representation • Strategic Counsel • Trusted Advocacy.`,
  keywords: [
    "AST Law Firm",
    "Ahmed Sabir Tanoli",
    "Haji Sabir Hussain Tanoli",
    "Ahmed Hussain Tanoli",
    "Advocate Supreme Court of Pakistan",
    "Advocate High Court Pakistan",
    "Corporate Law Firm Islamabad",
    "Litigation Pakistan",
    "Commercial Dispute Resolution",
  ],
  authors: [{ name: "AST Law Firm" }],
  creator: "AST Law Firm",
  publisher: "AST Law Firm",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.url,
    title: "AST LAW FIRM",
    description: "Advocates · Solicitors · Corporate Counsellors. Strategic legal counsel grounded in clarity, experience, and discretion.",
    siteName: "AST LAW FIRM",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for LegalService
  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    legalName: "AST Law Firm",
    founder: [
      {
        "@type": "Person",
        name: siteConfig.principals.founder.name,
        jobTitle: `${siteConfig.principals.founder.designation} — ${siteConfig.principals.founder.role}`,
      },
      {
        "@type": "Person",
        name: siteConfig.principals.coFounder.name,
        jobTitle: `${siteConfig.principals.coFounder.designation} — ${siteConfig.principals.coFounder.role}`,
      },
    ],
    description: siteConfig.positioning,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${cinzel.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/branding/ast-monogram-exact.png" type="image/png" />
        <link rel="shortcut icon" href="/branding/ast-monogram-exact.png" type="image/png" />
        <link rel="apple-touch-icon" href="/branding/ast-monogram-exact.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
      </head>
      <body className="bg-[#F7F5EF] text-[#111110] font-sans antialiased selection:bg-[#111110] selection:text-[#F7F5EF]">
        <ScrollBar />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
