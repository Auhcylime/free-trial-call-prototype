import { cn } from "../../lib/utils";

type Variant = "default" | "success" | "secondary" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  default: "bg-orange-primary text-white",
  success: "bg-emerald-500 text-white",
  secondary: "bg-gray-100 text-gray-700",
  outline: "border border-gray-300 text-gray-700 bg-transparent",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
