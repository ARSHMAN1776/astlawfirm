"use client";

import React from "react";
import { useInView, stagger } from "@/lib/useInView";

const serif = { fontFamily: "var(--font-cormorant), Georgia, serif" } as const;

/** Vertical stripes side by side, each with its paragraph to the right of the line. */
export const StripeColumns: React.FC<{ items: { title: string; text: string }[] }> = ({ items }) => {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 ${inView ? "is-in" : ""}`}>
      {items.map((item, i) => (
        <div key={item.title} className="stripe-item py-1" style={stagger(i)}>
          <span className="stripe-v" aria-hidden="true" />
          <div className="stripe-body space-y-2.5">
            <h3
              className="stripe-lead-text text-xl sm:text-[1.4rem] leading-snug text-[#111110] font-semibold transition-colors duration-300"
              style={serif}
            >
              {item.title}
            </h3>
            <p className="text-[0.9rem] text-[#4E4C47] leading-[1.75]">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/** Columns that each open with a rule drawing across the top: values and process steps. */
export const RuleColumns: React.FC<{
  items: { num: string; title: string; text: string }[];
  columnsClass: string;
}> = ({ items, columnsClass }) => {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`grid grid-cols-1 gap-x-8 gap-y-10 ${columnsClass} ${inView ? "is-in" : ""}`}>
      {items.map((item, i) => (
        <div key={item.num} className="relative pt-6" style={stagger(i)}>
          <span className="stripe-h" style={{ "--d": i * 120 } as React.CSSProperties} aria-hidden="true" />
          <div className="stripe-lead" style={stagger(i)}>
            <span className="text-3xl leading-none text-[#8B7355]/60" style={{ ...serif, fontVariantNumeric: "lining-nums" }}>
              {item.num}
            </span>
            <h3 className="mt-3 text-xl text-[#111110] font-semibold" style={serif}>
              {item.title}
            </h3>
            <p className="mt-2 text-[0.86rem] text-[#5C5A54] leading-[1.7]">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
