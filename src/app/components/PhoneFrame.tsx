interface PhoneFrameProps {
  children: React.ReactNode;
  dark?: boolean;
  overlay?: React.ReactNode;
}

export function PhoneFrame({ children, dark, overlay }: PhoneFrameProps) {
  return (
    <div
      className="relative mx-auto"
      style={{ width: 390, height: 844, borderRadius: 48, boxShadow: "0 0 0 2px #2A2A2C, 0 0 0 6px #1A1A1C, 0 0 50px rgba(255,255,255,0.12)" }}
    >
      {/* Metal frame */}
      <div
        className={`absolute inset-0 rounded-[48px] overflow-hidden ${
          dark ? "bg-[#0A0300]" : "bg-white"
        }`}
        style={{ border: "3px solid #3A3A3C" }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-full z-30" />

        {/* Content area — bottom padding reserves space for home indicator */}
        <div className="absolute inset-0 overflow-y-auto phone-scroll pb-0">
          {children}
        </div>

        {/* Persistent overlay (e.g. nav bar) — sits above content */}
        {overlay}

        {/* Home indicator — floats on top of content */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-gray-400/40 rounded-full z-30" />
      </div>

      {/* Side buttons */}
      {/* Power button — right side */}
      <div className="absolute -right-[8px] top-[140px] w-[5px] h-[72px] rounded-r-sm" style={{ background: "#2A2A2C" }} />
      {/* Volume up — left side */}
      <div className="absolute -left-[8px] top-[140px] w-[5px] h-[44px] rounded-l-sm" style={{ background: "#2A2A2C" }} />
      {/* Volume down — left side */}
      <div className="absolute -left-[8px] top-[196px] w-[5px] h-[44px] rounded-l-sm" style={{ background: "#2A2A2C" }} />
      {/* Silent switch — left side */}
      <div className="absolute -left-[8px] top-[100px] w-[5px] h-[24px] rounded-l-sm" style={{ background: "#2A2A2C" }} />
    </div>
  );
}
