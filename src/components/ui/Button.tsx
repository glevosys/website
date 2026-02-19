import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  // Ajout de w-full (mobile) et md:w-auto (desktop)
  const baseClasses =
    "w-full md:w-auto font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center";

  const variants: Record<string, string> = {
    primary: "bg-blue-700 hover:bg-blue-800 text-white focus:ring-blue-500",
    secondary:
      "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-300",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const finalClassName = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};
