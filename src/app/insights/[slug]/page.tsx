import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insightArticles } from "@/data/insights";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return insightArticles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = insightArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found | AST Law Firm" };

  return {
    title: `${article.title} | AST Law Firm Insights`,
    description: article.summary,
  };
}

export default function InsightDetailPage({ params }: Props) {
  const article = insightArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-[#F7F5EF] text-[#111110] pt-28 pb-24">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-6">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#8A8780] hover:text-[#111110] transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Publications & Insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 sm:px-8 pt-8 pb-16 border-b border-[rgba(17,17,16,0.10)]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#8A8780]">
            <span className="text-[#8B7355] font-medium">{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#111110] leading-[1.18]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            {article.title}
          </h1>

          <div className="pt-4 border-t border-[rgba(17,17,16,0.10)] flex items-center justify-between text-xs text-[#5C5A54]">
            <div>
              <p className="text-[#111110] uppercase tracking-wider font-medium">{article.author}</p>
              <p className="text-[#8A8780]">{article.authorTitle}</p>
            </div>
            <span className="border border-[rgba(17,17,16,0.12)] px-2.5 py-1 text-[0.65rem] uppercase tracking-widest text-[#8A8780] bg-[#EFECE3]">
              Legal Editorial
            </span>
          </div>
        </div>

        {/* Lead Summary */}
        <div className="my-10 p-6 sm:p-8 border-l-2 border-[#8B7355] bg-[#EFECE3] text-[#2D2C2A] text-base leading-relaxed italic">
          {article.summary}
        </div>

        {/* Longform Editorial Reading Content */}
        <div className="space-y-10 text-[#5C5A54] text-base sm:text-lg leading-[1.8] font-normal">
          <p>{article.content.introduction}</p>

          {article.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-4">
              <h2
                className="text-2xl sm:text-3xl text-[#111110]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                {section.heading}
              </h2>
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-[#5C5A54] leading-relaxed font-normal text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* Conclusion */}
          <div className="pt-6 border-t border-[rgba(17,17,16,0.10)] space-y-4">
            <h3
              className="text-2xl text-[#111110]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              Conclusion & Strategic Takeaways
            </h3>
            <p className="text-base text-[#5C5A54] leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
