import { Check } from "lucide-react";

const benefits = [
  {
    title: "24/7 Vet Care",
    desc: "Real vet on call, day or night",
  },
  {
    title: "Full phone plan",
    desc: "50GB premium speed data &\nUnlimited Talk & Text",
  },
  {
    title: "All fur babies included",
    desc: "Every pet in your home, covered",
  },
];

export function FullPlanCard() {
  return (
    <div className="relative rounded-[48px] overflow-hidden">
      {/* Background image — different from free plan tile */}
      <img
        src="/full-plan-bg.png?v=2"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay — images are pre-tinted, light overlay for text readability */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex flex-col px-7 pt-10 pb-8">
        {/* Benefits list */}
        <div className="flex flex-col gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#2ecc71] flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-white text-[18px] font-bold leading-snug">{b.title}</p>
                <p className="text-white/70 text-[16px] leading-snug whitespace-pre-line">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 50% off badge */}
        <div id="full-plan-badge" className="flex justify-center mt-8 mb-3">
          <span className="relative overflow-hidden inline-block bg-[#2ecc71] text-white text-[12px] font-bold uppercase tracking-[0.1em] px-4 py-1.5 rounded-full shimmer-pill">
            50% off
          </span>
        </div>

        {/* Price — $30 strikethrough + $15/mo in gold */}
        <div className="flex items-baseline justify-center gap-3">
          <span className="text-[#ffbd71]/60 text-[28px] font-young-serif line-through decoration-2">
            $30
          </span>
          <span className="text-[#ffbd71] text-[56px] font-young-serif leading-none">
            $15<span className="text-[28px]">/mo</span>
          </span>
        </div>

        {/* Upfront note */}
        <p className="text-white/70 text-[14px] text-center mt-1">
          ($45 upfront for 3 months)
        </p>

        {/* Fee lines — gold text */}
        <div className="text-center mt-4 space-y-0.5">
          <p className="text-[#ffbd71]/70 text-[14px]">Recovery fee $6.00</p>
          <p className="text-[#ffbd71]/70 text-[14px]">Taxes & Surcharges $1.63</p>
        </div>
      </div>
    </div>
  );
}
