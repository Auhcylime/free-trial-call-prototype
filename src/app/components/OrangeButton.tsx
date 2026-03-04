import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface OrangeButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function OrangeButton({ children, className, onClick, disabled }: OrangeButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative w-full h-14 rounded-full text-white font-semibold text-base overflow-hidden",
        "flex items-center justify-center",
        disabled && "opacity-70",
        className
      )}
      style={{
        background: "linear-gradient(to bottom, #F0A900 0%, #E87C00 15%, #E87C00 85%, #E35E00 100%)",
      }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
