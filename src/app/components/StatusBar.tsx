interface StatusBarProps {
  light?: boolean;
}

export function StatusBar({ light }: StatusBarProps) {
  const color = light ? "text-white" : "text-black";
  return (
    <div className={`relative z-40 flex items-center justify-between px-8 pt-3 pb-1 ${color}`}>
      <span className="text-sm font-semibold">9:41</span>
      <div className="flex items-center gap-1.5">
        {/* Signal */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
          <rect x="9" y="2" width="3" height="10" rx="0.5" />
          <rect x="13" y="0" width="3" height="12" rx="0.5" />
        </svg>
        {/* Wifi */}
        <svg width="15" height="12" viewBox="0 0 15 12" fill="currentColor">
          <path d="M7.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM3.75 7.5a5.25 5.25 0 0 1 7.5 0l-1.07 1.07a3.75 3.75 0 0 0-5.36 0L3.75 7.5zM0 4.5a10.5 10.5 0 0 1 15 0l-1.07 1.07A9 9 0 0 0 1.07 5.57L0 4.5z" />
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor">
          <rect x="0" y="1" width="22" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="1.5" y="2.5" width="19" height="7" rx="1" />
          <rect x="23" y="4" width="2" height="4" rx="0.5" />
        </svg>
      </div>
    </div>
  );
}
