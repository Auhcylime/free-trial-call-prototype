import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface WhiteButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function WhiteButton({ children, className, onClick }: WhiteButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative w-full h-14 rounded-full text-gray-600 font-semibold text-base overflow-hidden",
        "flex items-center justify-center",
        className
      )}
      style={{
        background: "linear-gradient(to bottom, #F6F6F6, #C5C5C5)",
      }}
    >
      {/* Bottom shadow — 40% height, fades in from 60% */}
      <span
        className="absolute bottom-0 left-0 right-0 rounded-full"
        style={{
          height: "40%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)",
        }}
      />
      {/* Right shadow — 10% width, fades in from 60% */}
      <span
        className="absolute top-0 bottom-0 right-0 rounded-full"
        style={{
          width: "10%",
          background: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 100%)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
