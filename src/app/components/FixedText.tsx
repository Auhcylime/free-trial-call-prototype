import { cn } from "../../lib/utils";

interface FixedTextProps {
  children: React.ReactNode;
  className?: string;
  font?: "rethink" | "young-serif";
}

export function FixedText({ children, className, font = "rethink" }: FixedTextProps) {
  return (
    <span
      className={cn(className)}
      style={{
        fontFamily: font === "young-serif" ? '"Young Serif", serif' : '"Rethink Sans", sans-serif',
      }}
    >
      {children}
    </span>
  );
}
