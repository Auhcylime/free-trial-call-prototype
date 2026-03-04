import { Shield } from "lucide-react";

export function MoneyBackGuarantee() {
  return (
    <div className="flex items-center justify-center gap-2 py-3">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md" />
        <Shield className="relative w-5 h-5 text-emerald-500" />
      </div>
      <span className="text-[13px] font-medium text-gray-500">
        Money-back guarantee · Cancel anytime
      </span>
    </div>
  );
}
