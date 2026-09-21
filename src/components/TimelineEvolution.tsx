"use client";

import React, { useEffect, useRef, useState } from "react";

export interface TimelineEra {
  year: string;
  period: string;
  title: string;
  summary: string;
  highlights: string[];
}

export function TimelineEvolution({ eras }: { eras: TimelineEra[] }) {
  return (
    <div className="space-y-12 sm:space-y-16 relative">
      {/* Central continuous vertical timeline spine with active scroll glow */}
      <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-[2px] bg-[rgba(17,17,16,0.12)] -translate-x-1/2 pointer-events-none overflow-hidden">
        <div className="w-full h-full bg-gradient-to-b from-[#8B7355] via-[#06231B] to-[#8B7355] opacity-40 animate-pulse" />
      </div>

      {eras.map((era, index) => {
        const isEven = index % 2 === 0;
        return (
          <TimelineItem
            key={era.year}
            era={era}
            isEven={isEven}
            index={index}
          />
        );
      })}
    </div>
  );
}

function TimelineItem({
  era,
  isEven,
  index,
}: {
  era: TimelineEra;
  isEven: boolean;
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Card side */}
      <div
        className={`lg:col-span-6 ${
          isEven ? "lg:pr-12" : "lg:order-2 lg:pl-12"
        }`}
      >
        <div
          className={`bg-[#FAF8F4] border border-[rgba(17,17,16,0.14)] p-6 sm:p-8 space-y-4 shadow-sm relative group hover:border-[#8B7355] hover:shadow-[0_16px_36px_-8px_rgba(6,35,27,0.12)] transition-all duration-700 ease-out will-change-transform ${
            isVisible
              ? "opacity-100 translate-y-0 translate-x-0 scale-100"
              : isEven
              ? "opacity-0 -translate-x-8 sm:-translate-x-12 translate-y-4 scale-[0.97]"
              : "opacity-0 translate-x-8 sm:translate-x-12 translate-y-4 scale-[0.97]"
          }`}
          style={{
            transitionDelay: `${index * 80}ms`,
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[rgba(17,17,16,0.08)] pb-3">
            <span className="font-serif text-2xl sm:text-3xl text-[#06231B] font-bold tracking-tight">
              {era.year}
            </span>
            <span className="text-[0.6rem] tracking-[0.2em] uppercase font-mono px-2.5 py-1 bg-[#06231B] text-[#F7F5EF] font-semibold shadow-xs">
              {era.period}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-xl sm:text-2xl text-[#111110] font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
          >
            {era.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-[#5C5A54] leading-relaxed">
            {era.summary}
          </p>

          {/* Bullet points */}
          <div className="space-y-2 pt-3 border-t border-[rgba(17,17,16,0.08)]">
            {era.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#42403B]">
                <span className="text-[#8B7355] font-bold text-sm leading-none mt-0.5">·</span>
                <span className="leading-normal">{h}</span>
              </div>
            ))}
          </div>

          {/* Desktop Animated Connector line to center spine */}
          {isEven ? (
            <div className="hidden lg:flex items-center absolute -right-12 top-1/2 -translate-y-1/2 w-12 z-20 pointer-events-none">
              {/* Growing Horizontal Line */}
              <div
                className={`relative w-full h-[2px] bg-[#8B7355]/30 overflow-hidden origin-left transition-transform duration-700 ease-out delay-200 ${
                  isVisible ? "scale-x-100" : "scale-x-0"
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#8B7355] to-[#06231B]" />
                <span className="absolute top-0 bottom-0 w-4 bg-white/80 blur-[1px] animate-pulse" />
              </div>
              {/* Diamond Node */}
              <div
                className={`relative -mr-[7px] w-3.5 h-3.5 rotate-45 border-2 border-[#8B7355] bg-[#FAF8F4] flex items-center justify-center shadow-md transition-all duration-500 delay-500 group-hover:scale-125 group-hover:bg-[#06231B] group-hover:border-[#06231B] ${
                  isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                }`}
              >
                <span className="w-1.5 h-1.5 bg-[#06231B] group-hover:bg-[#FAF8F4] transition-colors" />
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex items-center flex-row-reverse absolute -left-12 top-1/2 -translate-y-1/2 w-12 z-20 pointer-events-none">
              {/* Growing Horizontal Line */}
              <div
                className={`relative w-full h-[2px] bg-[#8B7355]/30 overflow-hidden origin-right transition-transform duration-700 ease-out delay-200 ${
                  isVisible ? "scale-x-100" : "scale-x-0"
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-l from-[#8B7355] to-[#06231B]" />
                <span className="absolute top-0 bottom-0 w-4 bg-white/80 blur-[1px] animate-pulse" />
              </div>
              {/* Diamond Node */}
              <div
                className={`relative -ml-[7px] w-3.5 h-3.5 rotate-45 border-2 border-[#8B7355] bg-[#FAF8F4] flex items-center justify-center shadow-md transition-all duration-500 delay-500 group-hover:scale-125 group-hover:bg-[#06231B] group-hover:border-[#06231B] ${
                  isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                }`}
              >
                <span className="w-1.5 h-1.5 bg-[#06231B] group-hover:bg-[#FAF8F4] transition-colors" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Center Year Badge on Desktop */}
      <div
        className={`hidden lg:flex lg:col-span-6 items-center transition-all duration-700 ease-out delay-300 ${
          isEven ? "justify-start pl-12" : "lg:order-1 justify-end pr-12"
        } ${
          isVisible
            ? "opacity-100 translate-x-0"
            : isEven
            ? "opacity-0 translate-x-6"
            : "opacity-0 -translate-x-6"
        }`}
      >
        <div className="flex items-center gap-3 bg-[#EFECE3]/80 px-3.5 py-1.5 border border-[rgba(17,17,16,0.12)] shadow-xs">
          <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
          <span className="text-[0.7rem] font-mono tracking-widest uppercase text-[#06231B] font-bold">
            {era.year}
          </span>
          <span className="text-[0.62rem] text-[#8A8780] uppercase tracking-wider font-medium">
            Era Milestone
          </span>
        </div>
      </div>
    </div>
  );
}
