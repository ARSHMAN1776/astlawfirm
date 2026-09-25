"use client";

import React from "react";
import { useInView, stagger } from "@/lib/useInView";

interface RevealProps {
  children: React.ReactNode;
  /** Position in a group; delays the reveal so siblings cascade in. */
  index?: number;
  className?: string;
  as?: "div" | "article" | "li";
}

/** Fades and lifts its children in the first time they scroll into view. */
export const Reveal: React.FC<RevealProps> = ({ children, index = 0, className = "", as = "div" }) => {
  const [ref, inView] = useInView<HTMLElement>(0.12);
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      style={stagger(index % 6)}
      className={`reveal-up ${inView ? "is-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
};
