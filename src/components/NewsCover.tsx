import React from "react";
import Image from "next/image";
import {
  Gavel,
  Landmark,
  Scale,
  Pickaxe,
  Mountain,
  Banknote,
  Building2,
  FileText,
  Zap,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import type { CoverIcon, CoverMotif, CoverTone, NewsItem } from "@/data/news";

const ICONS: Record<CoverIcon, LucideIcon> = {
  gavel: Gavel,
  landmark: Landmark,
  scale: Scale,
  pickaxe: Pickaxe,
  mountain: Mountain,
  banknote: Banknote,
  building: Building2,
  file: FileText,
  zap: Zap,
  handshake: Handshake,
};

/** Props that make a shape draw itself in (see `.news-motif .draw` in globals.css). k staggers the start. */
const draw = (k: number) =>
  ({ className: "draw", pathLength: 1, style: { "--k": k } as React.CSSProperties }) as const;

/**
 * Line-art illustrations, drawn on an 800×500 canvas with the artwork on the
 * right so the kicker can sit bottom-left. Stroke colour comes from currentColor.
 */
const Motif: React.FC<{ kind: CoverMotif }> = ({ kind }) => {
  switch (kind) {
    case "columns": {
      const xs = [396, 464, 532, 600, 668, 736];
      return (
        <g>
          <path d="M372 196 L580 104 L788 196 Z" {...draw(0)} />
          <path d="M404 190 L580 112 L756 190" {...draw(1)} />
          <rect x="372" y="196" width="416" height="22" {...draw(2)} />
          {xs.map((x, i) => (
            <g key={x}>
              <rect x={x - 4} y="218" width="40" height="10" {...draw(3 + i)} />
              <rect x={x} y="228" width="32" height="170" {...draw(3 + i)} />
              <line x1={x + 11} y1="234" x2={x + 11} y2="392" {...draw(4 + i)} />
              <line x1={x + 21} y1="234" x2={x + 21} y2="392" {...draw(4 + i)} />
              <rect x={x - 4} y="398" width="40" height="10" {...draw(3 + i)} />
            </g>
          ))}
          <rect x="364" y="408" width="432" height="10" {...draw(9)} />
          <rect x="354" y="418" width="452" height="10" {...draw(10)} />
          <rect x="344" y="428" width="472" height="10" {...draw(11)} />
        </g>
      );
    }
    case "arches": {
      const x0s = [396, 528, 660];
      return (
        <g>
          <rect x="372" y="150" width="416" height="16" {...draw(0)} />
          <line x1="384" y1="178" x2="776" y2="178" {...draw(1)} />
          {x0s.map((x0, i) => (
            <g key={x0}>
              <path d={`M${x0} 430 V270 A58 58 0 0 1 ${x0 + 116} 270 V430`} {...draw(2 + i * 2)} />
              <path d={`M${x0 + 14} 430 V270 A44 44 0 0 1 ${x0 + 102} 270 V430`} {...draw(3 + i * 2)} />
              <path d={`M${x0 + 28} 430 V270 A30 30 0 0 1 ${x0 + 88} 270 V430`} {...draw(4 + i * 2)} />
              <line x1={x0 + 58} y1="200" x2={x0 + 58} y2="212" {...draw(5 + i)} />
            </g>
          ))}
          <rect x="372" y="430" width="416" height="12" {...draw(9)} />
          <rect x="360" y="442" width="440" height="12" {...draw(10)} />
        </g>
      );
    }
    case "scales":
      return (
        <g>
          <circle cx="580" cy="118" r="9" {...draw(0)} />
          <line x1="580" y1="127" x2="580" y2="404" {...draw(1)} />
          <rect x="536" y="404" width="88" height="14" {...draw(2)} />
          <rect x="508" y="418" width="144" height="14" {...draw(3)} />
          <line x1="430" y1="170" x2="730" y2="170" {...draw(2)} />
          <circle cx="580" cy="170" r="7" {...draw(3)} />
          {/* left pan */}
          <path d="M430 170 L382 318 M430 170 L478 318" {...draw(4)} />
          <path d="M374 318 H486 A56 34 0 0 1 374 318 Z" {...draw(5)} />
          {/* right pan */}
          <path d="M730 170 L682 318 M730 170 L778 318" {...draw(4)} />
          <path d="M674 318 H786 A56 34 0 0 1 674 318 Z" {...draw(5)} />
        </g>
      );
    case "merger":
      return (
        <g>
          <g className="motif-spin">
            <circle cx="580" cy="165" r="60" strokeDasharray="4 10" />
            <circle cx="580" cy="165" r="110" strokeDasharray="4 12" />
            <circle cx="580" cy="165" r="160" strokeDasharray="4 14" />
          </g>
          <path d="M372 70 C470 70 500 165 580 165" {...draw(0)} />
          <path d="M372 260 C470 260 500 165 580 165" {...draw(0)} />
          <path d="M580 165 H776" {...draw(3)} />
          <circle cx="372" cy="70" r="7" {...draw(1)} />
          <circle cx="372" cy="260" r="7" {...draw(1)} />
          <circle cx="776" cy="165" r="10" {...draw(5)} />
          <circle cx="776" cy="165" r="3.5" fill="currentColor" stroke="none" />
        </g>
      );
  }
};

interface NewsCoverProps {
  item: Pick<NewsItem, "category" | "cover" | "title">;
  /** Phone-sized thumbnail: smaller type, no caption or rules (applies below the sm breakpoint only) */
  compact?: boolean;
  /** Larger type for the featured / article header cover */
  large?: boolean;
}

const TONES: Record<
  CoverTone,
  { bg: string; kicker: string; label: string; line: string; icon: string; art: string; light: boolean }
> = {
  green: {
    bg: "bg-[#06231B]",
    kicker: "text-[#D9C7A0]",
    label: "text-[#F7F5EF]/70",
    line: "bg-[#8B7355]/55",
    icon: "text-[#8B7355]",
    art: "text-[#B09A6E] opacity-75",
    light: false,
  },
  ink: {
    bg: "bg-[#161512]",
    kicker: "text-[#D9C7A0]",
    label: "text-[#F7F5EF]/65",
    line: "bg-[#8B7355]/50",
    icon: "text-[#8B7355]",
    art: "text-[#B09A6E] opacity-75",
    light: false,
  },
  sand: {
    bg: "bg-[#EFECE3]",
    kicker: "text-[#06231B]",
    label: "text-[#5C5A54]",
    line: "bg-[#8B7355]/60",
    icon: "text-[#8B7355]",
    art: "text-[#8B7355] opacity-70",
    light: true,
  },
};

const defaultTone = (category: NewsItem["category"]): CoverTone =>
  category === "Legal Updates" ? "green" : category === "Case Updates" ? "ink" : "sand";

/**
 * Designed cover in the site palette — deep green for legal updates, ink for
 * case updates, sand for firm news — with optional line-art that draws itself in.
 */
export const NewsCover: React.FC<NewsCoverProps> = ({ item, large, compact }) => {
  const { cover } = item;
  const tone = TONES[cover.tone ?? defaultTone(item.category)];
  const Icon = ICONS[cover.icon];

  return (
    <div className={`news-motif absolute inset-0 overflow-hidden ${tone.bg}`}>
      {cover.motif ? (
        <svg
          viewBox="0 0 800 500"
          preserveAspectRatio="xMaxYMid meet"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-right group-hover:scale-[1.035] ${tone.art}`}
        >
          <Motif kind={cover.motif} />
        </svg>
      ) : (
        <Image
          src="/branding/ast-monogram-exact-white.png"
          alt=""
          width={420}
          height={370}
          aria-hidden="true"
          className={`absolute -right-10 -bottom-12 w-[62%] max-w-none select-none transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
            tone.light ? "opacity-[0.07] invert" : "opacity-[0.06]"
          }`}
        />
      )}

      {/* architectural rules */}
      {!cover.motif && (
        <>
          <span className={`absolute left-0 right-0 top-[28%] h-px ${tone.line} ${compact ? "max-sm:hidden" : ""}`} aria-hidden="true" />
          <span className={`absolute top-0 bottom-0 left-[10%] w-px ${tone.line} opacity-60 ${compact ? "max-sm:hidden" : ""}`} aria-hidden="true" />
        </>
      )}

      <div className={`relative h-full flex flex-col justify-between ${compact ? "max-sm:p-2.5 p-4 sm:p-5" : "p-4 sm:p-5"}`}>
        <Icon className={`${large ? "w-6 h-6" : "w-5 h-5"} ${compact ? "max-sm:w-4 max-sm:h-4" : ""} ${tone.icon}`} aria-hidden="true" />
        <div
          className={`${cover.motif ? (compact ? "max-sm:max-w-none max-w-[44%]" : "max-w-[44%]") : ""} ${
            cover.motif ? "" : compact ? "max-sm:pl-0 pl-[calc(10%-0.5rem)]" : "pl-[calc(10%-0.5rem)]"
          }`}
        >
          <p
            className={`${tone.kicker} leading-none tracking-tight ${large ? "whitespace-nowrap text-[1.9rem] sm:text-5xl lg:text-6xl" : "text-[1.75rem] sm:text-[1.9rem]"} ${compact ? "max-sm:!text-[1.2rem]" : ""}`}
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400, fontVariantNumeric: "lining-nums" }}
          >
            {cover.kicker}
          </p>
          <p className={`mt-2 text-[0.58rem] sm:text-[0.62rem] leading-[1.5] tracking-[0.18em] uppercase font-mono ${tone.label} ${compact ? "max-sm:hidden" : ""}`}>
            {cover.label}
          </p>
        </div>
      </div>
    </div>
  );
};
