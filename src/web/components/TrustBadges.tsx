import { Shield, Lock, Wifi, Check } from "lucide-react";

export function TrustBadges() {
  return (
    <div className="flex items-center justify-center gap-4 text-[11px] text-gray-500">
      <span className="flex items-center gap-1.5">
        <span className="relative inline-flex items-center justify-center w-4 h-4">
          <Shield className="w-4 h-4 text-green-600" />
          <Check className="absolute w-2.5 h-2.5 text-green-600" strokeWidth={4} />
        </span>
        Secure Payment
      </span>
      <span className="flex items-center gap-1.5">
        <Lock className="w-4 h-4" style={{ color: "#005AE0" }} />
        SSL Encrypted
      </span>
      <span className="flex items-center gap-1.5">
        <Wifi className="w-4 h-4" style={{ color: "#E87C00" }} />
        Top 3 Network
      </span>
    </div>
  );
}
