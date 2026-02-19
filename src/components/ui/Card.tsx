import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card = ({
  children,
  className = "",
  hover = true,
  glass = true,
}: CardProps) => {
  const baseClass = "rounded-2xl p-6 transition-all duration-500";
  const glassClass = glass ? "glass-card" : "bg-white shadow-xl";
  const hoverClass = hover ? "card-hover" : "";
  const combinedClassName =
    `${baseClass} ${glassClass} ${hoverClass} ${className}`.trim();

  return <div className={combinedClassName}>{children}</div>;
};
