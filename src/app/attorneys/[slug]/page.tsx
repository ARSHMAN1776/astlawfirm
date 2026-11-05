import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { attorneys } from "@/data/attorneys";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AhmedTanoliProfileView } from "@/components/AhmedTanoliProfileView";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return attorneys.map((at) => ({
    slug: at.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const attorney = attorneys.find((a) => a.slug === params.slug);
  if (!attorney) return { title: "Counsel Profile Not Found" };

  return {
    title: `${attorney.name} | AST Law Firm`,
    description: attorney.shortBio,
  };
}

export default function AttorneyProfilePage({ params }: Props) {
  const attorney = attorneys.find((a) => a.slug === params.slug);

  if (!attorney) {
    notFound();
  }

  if (attorney.slug === "ahmed-hussain-tanoli") {
    return <AhmedTanoliProfileView attorney={attorney} />;
  }

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6">
        <Link
          href="/attorneys"
          className="inline-flex items-center gap-2 text-[0.65rem] tracking-widest uppercase text-[#8A8780] hover:text-[#111110] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Attorneys</span>
        </Link>
      </div>

      {/* Main Profile Header */}
      <section className="border-b border-[rgba(17,17,16,0.10)] pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Editorial Frame (Rectangular, strictly NOT circular) */}
            <div className="lg:col-span-4 space-y-6">
              {attorney.image ? (
                <div className="relative aspect-[3/4] bg-[#E8E3D6] border border-[rgba(17,17,16,0.18)] shadow-md overflow-hidden group">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-top filter contrast-[1.02]"
                  />
                  {/* Subtle top badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <div className="w-8 h-8 border border-[#8B7355]/40 bg-[#FAF8F4]/90 backdrop-blur-sm flex items-center justify-center p-1 shadow-sm">
                      <Image
                        src="/branding/ast-monogram-exact.png"
                        alt="AST Crest"
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[0.55rem] tracking-[0.2em] uppercase font-mono px-2 py-0.5 bg-[#06231B] text-[#F7F5EF] font-semibold shadow-sm">
                      PARTNER
                    </span>
                  </div>
                  {/* Bottom caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111110]/95 via-[#111110]/50 to-transparent p-4 pt-10 text-white pointer-events-none">
                    <div className="border-l-2 border-[#8B7355] pl-2 py-0.5 mb-1">
                      <span className="text-[0.68rem] tracking-[0.16em] uppercase text-[#FAF8F4] font-bold block">
                        {attorney.role}
                      </span>
                    </div>
                    <p className="text-[0.62rem] tracking-[0.14em] uppercase text-[#E5DFD3] font-bold">
                      {attorney.designation}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="aspect-[4/5] bg-[#EFECE3] border border-[rgba(17,17,16,0.12)] p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="w-10 h-10 border border-[rgba(17,17,16,0.18)] flex items-center justify-center font-serif text-sm text-[#5C5A54]">
                    AST
                  </div>
                  <div className="space-y-1">
                    <div className="border-l-2 border-[#8B7355] pl-2.5 py-0.5">
                      <span className="text-[0.7rem] tracking-[0.18em] uppercase text-[#06231B] font-bold block">
                        {attorney.role}
                      </span>
                    </div>
                    <h1
                      className="text-3xl sm:text-4xl text-[#111110] font-semibold mt-1"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
                    >
                      {attorney.name}
                    </h1>
                    <p className="text-[0.68rem] tracking-[0.16em] uppercase text-[#8B7355] font-bold mt-1">
                      {attorney.designation}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Box */}
              <div className="border border-[rgba(17,17,16,0.12)] p-6 space-y-4 bg-[#EFECE3]">
                <h3 className="text-[0.6rem] tracking-widest uppercase text-[#8A8780]">
                  Inquiries
                </h3>
                <p className="text-xs text-[#5C5A54] leading-relaxed">
                  To schedule a consultation with {attorney.name}, please contact our chambers.
                </p>
                <Link
                  href={`/contact?attorney=${encodeURIComponent(attorney.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#111110] text-[#F7F5EF] hover:bg-[#2D2C2A] text-[0.65rem] uppercase tracking-widest font-medium transition-colors"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Information & Credentials */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-3 pb-5 border-b border-[rgba(17,17,16,0.10)]">
                {/* Bold Role with Premium Side Line */}
                <div className="flex items-center gap-3 border-l-2 border-[#8B7355] pl-3.5 py-0.5">
                  <span className="text-xs sm:text-[0.85rem] tracking-[0.18em] uppercase text-[#06231B] font-bold">
                    {attorney.role}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
                </div>

                {/* Prominent Name */}
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl text-[#111110] font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
                >
                  {attorney.name}
                </h1>

                {/* Bold Court Designation */}
                <p className="text-xs sm:text-[0.85rem] tracking-[0.16em] uppercase text-[#8B7355] font-bold">
                  {attorney.designation}
                </p>
              </div>

              {/* Biography */}
              <div className="space-y-4">
                <h2 className="text-[0.6rem] tracking-widest uppercase text-[#8A8780]">
                  Professional Biography
                </h2>
                <div className="space-y-4 text-[#5C5A54] text-sm sm:text-base leading-relaxed">
                  {attorney.biography.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Practice Areas */}
              <div className="border-t border-[rgba(17,17,16,0.08)] pt-8 space-y-4">
                <h2 className="text-[0.6rem] tracking-widest uppercase text-[#8A8780]">
                  Areas of Practice
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {attorney.practiceAreas.map((pa, idx) => (
                    <div key={idx} className="border border-[rgba(17,17,16,0.12)] bg-[#F7F5EF] p-3 text-xs text-[#5C5A54] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C4BFB3] rounded-full" />
                      <span>{pa}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admissions & Qualifications */}
              <div className="border-t border-[rgba(17,17,16,0.08)] pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-[0.6rem] tracking-widest uppercase text-[#8A8780]">
                    Bar Admissions &amp; Enrolment
                  </h3>
                  <ul className="space-y-2 text-xs text-[#5C5A54]">
                    {attorney.admissions.map((adm, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C4BFB3]">—</span>
                        <span>{adm}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[0.6rem] tracking-widest uppercase text-[#8A8780]">
                    Education &amp; Qualifications
                  </h3>
                  <ul className="space-y-2 text-xs text-[#5C5A54]">
                    {attorney.education.map((edu, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C4BFB3]">—</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-[rgba(17,17,16,0.08)] pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-[0.6rem] tracking-widest uppercase text-[#8A8780]">
                    Professional Memberships
                  </h3>
                  <ul className="space-y-2 text-xs text-[#5C5A54]">
                    {attorney.memberships.map((mem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C4BFB3]">—</span>
                        <span>{mem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {attorney.publications.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-[0.6rem] tracking-widest uppercase text-[#8A8780]">
                      Publications
                    </h3>
                    <ul className="space-y-2 text-xs text-[#5C5A54]">
                      {attorney.publications.map((pub, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#C4BFB3]">—</span>
                          <span className="italic">{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
