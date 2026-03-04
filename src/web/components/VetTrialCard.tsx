import { Badge } from "./Badge";
import { Button } from "./Button";

const perks = [
  { emoji: "🩺", label: "Licensed vet" },
  { emoji: "📱", label: "Video call" },
  { emoji: "🐾", label: "Any pet, any Q" },
];

interface VetTrialCardProps {
  onClaim?: () => void;
}

export function VetTrialCard({ onClaim }: VetTrialCardProps) {
  return (
    <div
      className="rounded-[20px] border-2 border-[#F5A623] p-[22px] relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #FFF3E6 100%)" }}
    >
      {/* Badge */}
      <div className="flex justify-center mb-3">
        <span
          className="inline-block text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full"
          style={{
            background: "linear-gradient(135deg, #f7971e, #f56e0f)",
            letterSpacing: "0.8px",
          }}
        >
          TRY IT FREE
        </span>
      </div>

      {/* Title */}
      <div className="text-center mb-1.5">
        <h3 className="text-[20px] font-black text-[#1a1a1a] leading-tight">
          Your first vet call
        </h3>
        <p className="text-[#888] text-[14px] mt-1.5">
          Talk to a licensed vet — video or phone, 24/7
        </p>
      </div>

      {/* Perks — square icon boxes with shadow, not pills */}
      <div className="flex flex-col gap-2.5 my-4">
        {perks.map((perk) => (
          <div key={perk.label} className="flex items-center gap-2.5">
            <div className="flex-shrink-0 w-8 h-8 bg-white rounded-[10px] flex items-center justify-center text-[16px] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
              {perk.emoji}
            </div>
            <span className="text-[14px] font-semibold text-[#444]">{perk.label}</span>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-[18px] font-extrabold text-[#ccc] line-through">$65</span>
        <span className="text-[22px] font-black text-[#2ecc71]">FREE</span>
      </div>

      {/* CTA — gradient button matching prototype */}
      <button
        onClick={onClaim}
        className="w-full py-4 border-none rounded-full text-white text-[16px] font-extrabold cursor-pointer transition-all duration-150 hover:-translate-y-px"
        style={{
          background: "linear-gradient(135deg, #FFB347 0%, #F56E0F 100%)",
          boxShadow: "0 6px 20px rgba(245,110,15,0.35)",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.boxShadow = "0 8px 24px rgba(245,110,15,0.45)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.boxShadow = "0 6px 20px rgba(245,110,15,0.35)";
        }}
      >
        Claim my free vet call
      </button>

      <p className="text-center text-[11px] text-[#999] mt-3">
        Card required to verify — you won't be charged
      </p>
    </div>
  );
}
