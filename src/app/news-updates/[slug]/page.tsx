import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { newsItems, getNewsItem } from "@/data/news";
import { siteConfig } from "@/config/site";

interface Props {
  params: { slug: string };
}

const serif = { fontFamily: "var(--font-cormorant), Georgia, serif" } as const;

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getNewsItem(params.slug);
  if (!item) return { title: "Update Not Found" };
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/news-updates/${item.slug}` },
    openGraph: { type: "article", title: item.title, description: item.excerpt },
  };
}

export default function NewsArticlePage({ params }: Props) {
  const item = getNewsItem(params.slug);
  if (!item) notFound();

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6">
        <Link
          href="/news-updates"
          className="inline-flex items-center gap-2 text-[0.65rem] tracking-widest uppercase text-[#8A8780] hover:text-[#111110] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All News &amp; Updates</span>
        </Link>
      </div>

      {/* Article header */}
      <header className="pt-8 pb-12 border-b border-[rgba(17,17,16,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.62rem] tracking-[0.22em] uppercase font-mono">
              <span className="inline-flex items-center gap-2.5 text-[#8B7355] font-bold">
                <span className="w-5 h-px bg-[#8B7355]" />
                {item.category}
              </span>
              <span className="text-[#8A8780]">{item.dateLabel}</span>
            </div>

            <div className="border-l-2 border-[#8B7355] pl-4 py-0.5">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl leading-[1.14] tracking-tight text-[#111110] font-semibold"
                style={serif}
              >
                {item.title}
              </h1>
            </div>

            <p className="text-[#5C5A54] text-lg sm:text-xl leading-relaxed max-w-3xl">{item.excerpt}</p>
          </div>
        </div>
      </header>

      {/* Body + aside */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <article className="lg:col-span-8 space-y-10">
            {item.body.map((block, i) => (
              <div key={i} className="space-y-4">
                {block.heading && (
                  <h2 className="text-2xl sm:text-[1.75rem] text-[#111110] font-semibold" style={serif}>
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="text-[1.02rem] text-[#3D3B37] leading-[1.85]">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {item.takeaways && (
              <div className="pt-4 space-y-5">
                <p className="text-[0.62rem] tracking-[0.24em] uppercase font-mono text-[#06231B] font-bold">Key takeaways</p>
                <ul className="space-y-4">
                  {item.takeaways.map((t) => (
                    <li key={t} className="border-l-2 border-[#8B7355] pl-4 text-[0.98rem] text-[#3D3B37] leading-[1.7]">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.sources && (
              <div className="pt-4 space-y-4">
                <p className="text-[0.62rem] tracking-[0.24em] uppercase font-mono text-[#8A8780] font-bold">
                  Sources &amp; further reading
                </p>
                <ul className="space-y-2.5">
                  {item.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-2 text-[0.86rem] text-[#06231B] hover:text-[#8B7355] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                        <span className="underline underline-offset-4 decoration-[rgba(6,35,27,0.3)] group-hover:decoration-[#8B7355]">
                          {s.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="border-t border-[rgba(17,17,16,0.10)] pt-6 text-[0.72rem] text-[#8A8780] leading-relaxed">
              This update is published for general information only.
            </p>
          </article>

          {/* Aside */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-8">
              {item.relatedPractice && (
                <div className="border-l-2 border-[#06231B] pl-5 space-y-2">
                  <p className="text-[0.6rem] tracking-[0.24em] uppercase font-mono text-[#8A8780]">Related practice</p>
                  <Link
                    href={item.relatedPractice.href}
                    className="inline-flex items-start gap-2 text-lg text-[#111110] hover:text-[#8B7355] transition-colors leading-snug"
                    style={serif}
                  >
                    {item.relatedPractice.label}
                    <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0" />
                  </Link>
                </div>
              )}

              <div className="border-l-2 border-[#8B7355] pl-5 space-y-3">
                <p className="text-[0.6rem] tracking-[0.24em] uppercase font-mono text-[#8A8780]">Speak to our chambers</p>
                <p className="text-sm text-[#5C5A54] leading-relaxed">
                  Discuss how this development affects your matter with an advocate at AST Law Firm.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#06231B] text-[#F7F5EF] hover:bg-[#0A3328] text-[0.66rem] uppercase tracking-[0.18em] font-semibold transition-colors"
                >
                  Request a Consultation
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-[0.72rem] text-[#8A8780] font-mono">
                  {siteConfig.contact.phoneDisplay} · {siteConfig.contact.email}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Back to the newsroom */}
      <div className="border-t border-[rgba(17,17,16,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <Link
            href="/news-updates"
            className="inline-flex items-center gap-2 text-[0.66rem] tracking-[0.18em] uppercase font-semibold text-[#111110] hover:text-[#8B7355] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All News &amp; Updates
          </Link>
        </div>
      </div>
    </div>
  );
}
