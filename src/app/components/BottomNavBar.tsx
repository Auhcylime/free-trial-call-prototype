import { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Home, Gift, Settings } from "lucide-react";

export type NavTab = "home" | "rewards" | "profile";

interface BottomNavBarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const ICON_MAP = { home: Home, rewards: Gift, profile: Settings } as const;
const TABS: NavTab[] = ["home", "rewards", "profile"];

// Icon center-X positions — evenly spaced across the 366px nav bar
const CENTER_X: Record<NavTab, number> = {
  home: 67,
  rewards: 183,
  profile: 290,
};

const CIRCLE_SIZE = 56;
const ICON_BTN = 44; // tap target size

// Snappy spring — fast settle, minimal overshoot
const SPRING = { stiffness: 300, damping: 28, mass: 0.8 };

/**
 * Build the full SVG bar path with the cutout centered at `cx`.
 * The cutout flares wider at the opening (S-curve shoulders)
 * and wraps around the circle arc at the bottom.
 */
function makeBarPath(cx: number): string {
  const oh = 48; // opening half-width at bar top edge
  const tx = 30; // x-offset where curve meets the circle arc
  const ty = 24; // y of tangent points
  const ar = 32; // arc radius for the circle cavity

  // Control points for smooth quarter-pipe bends (no kink):
  // Right bend leaves the bar top horizontally, arrives at circle tangent vertically.
  // Left bend leaves the circle tangent vertically, arrives at bar top horizontally.
  return [
    "M 20,62",
    "H 346",
    "A 20,20 0 0,0 366,42",
    "V 32",
    "A 20,20 0 0,0 346,12",
    // Top edge → right shoulder of cutout
    `H ${cx + oh}`,
    // Right bend: horizontal start → vertical end (smooth quarter-pipe)
    `C ${cx + oh - 4},12 ${cx + tx},${ty - 8} ${cx + tx},${ty}`,
    // Circle arc
    `A ${ar},${ar} 0 0,1 ${cx - tx},${ty}`,
    // Left bend: vertical start → horizontal end (mirror quarter-pipe)
    `C ${cx - tx},${ty - 8} ${cx - oh + 4},12 ${cx - oh},12`,
    // Top edge continues left
    "H 20",
    "A 20,20 0 0,0 0,32",
    "V 42",
    "A 20,20 0 0,0 20,62",
    "Z",
  ].join(" ");
}

export function BottomNavBar({ activeTab, onTabChange }: BottomNavBarProps) {
  // Single spring drives both the cutout and the circle
  const springCx = useSpring(CENTER_X[activeTab], SPRING);

  useEffect(() => {
    springCx.set(CENTER_X[activeTab]);
  }, [activeTab, springCx]);

  // Derived motion values — recomputed every animation frame
  const pathD = useTransform(springCx, makeBarPath);
  // Convert SVG-coordinate cx → CSS percentage so circle aligns with the SVG cutout
  const circleLeft = useTransform(springCx, (cx) => `calc(${(cx / 366) * 100}% - ${CIRCLE_SIZE / 2}px)`);

  const ActiveIcon = ICON_MAP[activeTab];

  return (
    <>
      {/* Blur gradient behind nav bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{ height: 120 }}
      >
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          }}
        />
      </div>
    <div
      className="absolute bottom-[34px] left-3 right-3 z-30 overflow-visible"
      style={{ height: 86 }}
    >
      {/* SVG bar with animated cutout */}
      <svg
        className="absolute bottom-0 left-0 w-full overflow-visible"
        style={{ height: 66 }}
        viewBox="0 0 366 66"
        fill="none"
      >
        <defs>
          <filter id="navShadow" x="-6%" y="-20%" width="112%" height="150%">
            <feDropShadow dx="0" dy="1" stdDeviation="3" floodOpacity="0.06" />
            <feDropShadow dx="0" dy="6" stdDeviation="12" floodOpacity="0.10" />
          </filter>
        </defs>
        <motion.path d={pathD} fill="white" filter="url(#navShadow)" stroke="#e5e5e5" strokeWidth="0.5" />
      </svg>

      {/* Orange circle — rides with the spring */}
      <motion.div
        className="absolute z-10"
        style={{ left: circleLeft, top: 4, width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
      >
        <div
          className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, #F0A900 0%, #E87C00 15%, #E87C00 85%, #E35E00 100%)",
            boxShadow:
              "0px 13px 40px rgba(232, 124, 0, 0.10), inset 2px 2px 5px rgba(255, 255, 255, 0.58), inset -2px -2px 4px rgba(0, 0, 0, 0.42)",
          }}
        >
          <motion.div
            key={activeTab}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            <ActiveIcon className="w-6 h-6 text-white" strokeWidth={2.2} />
          </motion.div>
        </div>
      </motion.div>

      {/* Inactive icon buttons — fixed positions, centered in bar body */}
      {TABS.map((tab) => {
        if (tab === activeTab) return null;
        const Icon = ICON_MAP[tab];
        return (
          <button
            key={tab}
            className="absolute flex items-center justify-center"
            style={{
              width: ICON_BTN,
              height: ICON_BTN,
              left: `calc(${(CENTER_X[tab] / 366) * 100}% - ${ICON_BTN / 2}px)`,
              bottom: 9, // vertically centered in the bar body
            }}
            onClick={() => onTabChange(tab)}
          >
            <Icon className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
          </button>
        );
      })}
    </div>
    </>
  );
}
