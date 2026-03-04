import { motion } from "framer-motion";
import { Button } from "../components/Button";

interface SuccessScreenProps {
  onNavigate: (screen: string) => void;
  variant?: "free-call" | "buy-now";
  onSwitchToApp?: () => void;
}

export function SuccessScreen({ onNavigate, variant = "free-call", onSwitchToApp }: SuccessScreenProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Full-bleed background image */}
      <img
        src="/success-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex flex-col items-center flex-1">
        {/* Meow Mobile logo */}
        <div className="pt-10 pb-6">
          <img src="/logo-white.svg" alt="Meow Mobile" className="h-16 w-auto" />
        </div>

        <div className="pt-32" />

        {/* Success message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center px-8"
        >
          <h1 className="font-young-serif text-[40px] text-white leading-tight mb-3">
            {variant === "buy-now" ? "Your order's in" : "You're in!"}
          </h1>
          <p className="text-white/80 text-[17px] leading-relaxed">
            {variant === "buy-now"
              ? "Finish activating your eSIM in the Meow Mobile app to get started."
              : "Get set up in the Meow Mobile app for your first vet call."}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="px-10 pt-8"
        >
          <Button variant="orange-complex" fullWidth onClick={onSwitchToApp}>
            Get the app
          </Button>
        </motion.div>

        {/* Bottom spacer */}
        <div className="flex-1" />
      </div>
    </div>
  );
}
