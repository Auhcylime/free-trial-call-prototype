import { motion } from "framer-motion";
import { StatusBar } from "../components/StatusBar";
import { WhiteButton } from "../components/WhiteButton";

interface NumberSelectScreenProps {
  onNext: () => void;
}

export function NumberSelectScreen({ onNext }: NumberSelectScreenProps) {
  return (
    <div className="relative bg-[#0A0300] overflow-hidden" style={{ height: 844 }}>
      {/* Background image — woman with cat, heavy bottom fade */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: "url(/choose-plan-bg.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 via-50% to-black/90" />

      <StatusBar light />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-6 pb-10 flex flex-col items-center"
        >
          {/* Phone icon — filled, 79x79 */}
          <div className="flex items-center justify-center mb-6" style={{ width: 79, height: 79 }}>
            <svg width="79" height="79" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>

          {/* Heading */}
          <h1
            className="text-white text-[28px] font-bold text-center leading-tight mb-2"
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
          >
            Want to keep your current number?
          </h1>
          <p
            className="text-white/70 text-base text-center font-semibold mb-10 px-4"
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
          >
            Choose now to transfer it, or get a new number. This cannot be changed after setup.
          </p>

          {/* Buttons */}
          <div className="w-[75%] flex flex-col gap-2">
            <WhiteButton onClick={onNext}>
              Transfer my number
            </WhiteButton>
            <button
              onClick={onNext}
              className="w-full h-14 rounded-full text-white/80 font-semibold text-base"
            >
              Get a new number
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
