import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "full",
  className = "",
  inverted = false,
}) => {
  const titleColor = inverted ? "#F7F5EF" : "#111110";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none ${className}`}
      aria-label="AST Law Firm"
    >
      {/* Exact Official AST Monogram */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src={inverted ? "/branding/ast-monogram-exact-white.png" : "/branding/ast-monogram-exact.png"}
          alt="AST Monogram"
          width={36}
          height={32}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {variant !== "compact" && (
        <div className="flex flex-col justify-center select-none whitespace-nowrap">
          <span
            className="tracking-[0.22em] text-[0.875rem] sm:text-[0.95rem] font-medium leading-none"
            style={{ color: titleColor, fontFamily: "var(--font-cinzel), Georgia, serif" }}
          >
            AST LAW FIRM
          </span>
        </div>
      )}
    </Link>
  );
};
