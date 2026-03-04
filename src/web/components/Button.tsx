import { cn } from "../../lib/utils";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

type Variant = "orange-complex" | "green-complex" | "gray-round";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "orange-complex",
  className,
  onClick,
  isLoading,
  disabled,
  fullWidth,
}: ButtonProps) {
  const isComplex = variant === "orange-complex" || variant === "green-complex";

  return (
    <motion.button
      whileTap={{ scale: 1.085 }}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "relative overflow-hidden rounded-[40px] h-14 px-8 font-semibold text-base leading-none",
        "flex items-center justify-center gap-2",
        "transition-all duration-100 ease-out",
        variant === "orange-complex" &&
          "bg-[#e87c00] hover:bg-[#d16f00] text-white shadow-[0px_10px_32px_0px_rgba(215,90,40,0.24)] hover:shadow-[0_8px_24px_rgba(245,110,15,0.45)]",
        variant === "green-complex" &&
          "bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-[0px_10px_32px_0px_rgba(34,197,94,0.24)]",
        variant === "gray-round" &&
          "bg-[#f5f5f5] hover:bg-gray-200 text-gray-900 shadow-[0px_13px_30px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_0px_rgba(0,0,0,0.1),inset_4px_5px_10px_0px_rgba(255,255,255,0.1)]",
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {/* Inner 3D shadow overlays — mix-blend-overlay like production */}
      {isComplex && (
        <>
          <span className="absolute inset-0 rounded-[40px] shadow-[inset_4px_2px_6px_0px_rgba(255,255,255,0.52)] mix-blend-overlay" />
          <span className="absolute inset-0 rounded-[40px] shadow-[inset_-4px_-4px_5px_0px_rgba(0,0,0,0.38)] mix-blend-overlay" />
        </>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : children}
      </span>
    </motion.button>
  );
}
