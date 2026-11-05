import React from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  inverted?: boolean;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  inverted = false,
  align = "left",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div className={`space-y-4 ${isCenter ? "text-center mx-auto" : ""} ${className}`}>
      {label && (
        <div className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
          <span
            className={`text-[0.65rem] tracking-[0.28em] uppercase ${
              inverted ? "text-[#8A8780]" : "text-[#8B7355]"
            } font-medium`}
          >
            {label}
          </span>
          <span
            className={`w-8 h-[1px] ${inverted ? "bg-[rgba(255,255,255,0.15)]" : "bg-[rgba(17,17,16,0.15)]"}`}
            aria-hidden="true"
          />
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight ${
          inverted ? "text-[#F7F5EF]" : "text-[#111110]"
        }`}
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed max-w-2xl font-normal ${
            inverted ? "text-[#A09D96]" : "text-[#5C5A54]"
          } ${isCenter ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
