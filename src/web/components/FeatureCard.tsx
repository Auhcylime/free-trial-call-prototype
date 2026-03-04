import { Check } from "lucide-react";

const benefits = [
  {
    title: "Zero wait time",
    desc: "Connect to a real vet in 20 secs",
  },
  {
    title: "Smart triage",
    desc: "Decide if a ER visit is needed before a $1,000 bill",
  },
  {
    title: "Personalized advice",
    desc: "Get advice you can act on at home, right now",
  },
];

export function FeatureCard() {
  return (
    <div className="relative rounded-[48px] overflow-hidden min-h-[480px] flex flex-col bg-[#1a1400]">
      {/* Background image */}
      <img
        src="/free-plan-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay — images are pre-tinted, light overlay for text readability */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex flex-col flex-1 px-7 pt-8 pb-8">
        {/* TRY IT FOR FREE badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-[#2ecc71] text-white text-[12px] font-bold uppercase tracking-[0.1em] px-4 py-1.5 rounded-full">
            TRY IT FOR FREE
          </span>
        </div>

        {/* Title */}
        <h2 className="font-young-serif text-white text-[32px] leading-tight text-center mb-6">
          Your first vet call
        </h2>

        {/* Benefits list */}
        <div className="flex flex-col gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2ecc71] flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-white text-[16px] font-bold leading-snug">{b.title}</p>
                <p className="text-white/70 text-[14px] leading-snug">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Price — $65 strikethrough + Free */}
        <div className="flex items-baseline justify-center gap-3 mt-3">
          <span className="text-[#ffbd71]/60 text-[28px] font-young-serif line-through decoration-2">
            $65*
          </span>
          <span className="text-[#ffbd71] text-[42px] font-young-serif">
            Free
          </span>
        </div>

        {/* Fine print — inside the tile */}
        <p className="text-[#ffbd71]/50 text-[12px] text-center mt-2">
          Estimated costs based on a vet near you
        </p>
      </div>
    </div>
  );
}
