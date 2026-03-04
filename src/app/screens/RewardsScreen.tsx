import { useState } from "react";
import { StatusBar } from "../components/StatusBar";
import { ArrowLeft, Users, DollarSign, ChevronRight, Lock, Smartphone, ShoppingBag } from "lucide-react";

interface RewardsScreenProps {
  onBack: () => void;
}

/* ── Airvet discount data ── */
const AIRVET_DISCOUNTS = [
  { brand: "PetPlate", discount: "65% off", desc: "First food box", category: "Premium Food", color: "#16a34a" },
  { brand: "Small Door", discount: "$75 off", desc: "Annual vet membership", category: "In-Person Vet", color: "#2563eb" },
  { brand: "Koala", discount: "$50 off", desc: "Delivered pet meds", category: "Pharmacy", color: "#7c3aed" },
  { brand: "Basepaws", discount: "$20 off", desc: "DNA test for your cat", category: "Testing Kits", color: "#0891b2" },
  { brand: "Farmer's Dog", discount: "50% off", desc: "First food box", category: "Premium Food", color: "#16a34a" },
  { brand: "Pumpkin", discount: "18% off", desc: "Routine care membership", category: "Wellness", color: "#ea580c" },
  { brand: "Rover", discount: "$25 off", desc: "First pet sitting service", category: "At Home Care", color: "#dc2626" },
  { brand: "Fi", discount: "$30 off", desc: "Smart collar", category: "Accessories", color: "#1d4ed8" },
  { brand: "Healthy Paws", discount: "5% off", desc: "Pet insurance", category: "Insurance", color: "#0d9488" },
  { brand: "GoodPup", discount: "1 wk free", desc: "+ 20% off training", category: "Training", color: "#c026d3" },
  { brand: "Oncotect", discount: "15% off", desc: "Cancer screening kit", category: "Testing Kits", color: "#0891b2" },
  { brand: "Sundays", discount: "35% off", desc: "First food box", category: "Premium Food", color: "#16a34a" },
  { brand: "HoldOn", discount: "20% off", desc: "Pet supplies order", category: "Supplies", color: "#64748b" },
  { brand: "Waggle", discount: "$40 off", desc: "Pet supplies purchase", category: "Supplies", color: "#64748b" },
  { brand: "Modern Animal", discount: "$55 off", desc: "First vet visit", category: "In-Person Vet", color: "#2563eb" },
  { brand: "Petfolk", discount: "$50 off", desc: "First vet visit", category: "In-Person Vet", color: "#2563eb" },
  { brand: "Navi", discount: "Free", desc: "Pet grief support", category: "Grief Support", color: "#6366f1" },
];

const FEATURED_COUNT = 4;

/* ── Share icon SVG (sits inside cat frame) ── */
function ShareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="18" cy="5" r="2.5" fill="#c8c8c8" />
      <circle cx="6" cy="12" r="2.5" fill="#c8c8c8" />
      <circle cx="18" cy="19" r="2.5" fill="#c8c8c8" />
      <line x1="8.2" y1="13.2" x2="15.8" y2="17.8" stroke="#c8c8c8" strokeWidth="2" strokeLinecap="round" />
      <line x1="15.8" y1="6.2" x2="8.2" y2="10.8" stroke="#c8c8c8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── Avatar cluster — exact match to reference ── */
function AvatarCluster() {
  // Cat frame: 53x53 centered. 6 photos arranged around it, no overlap.
  // Left cluster: 35, 22, 18. Right cluster: 43, 27, 17.
  const photos: { src: string; x: number; y: number; size: number }[] = [
    // Left cluster
    { src: "/referral-1.jpg", x: 18,  y: 24, size: 35 },
    { src: "/referral-2.jpg", x: 48,  y: 4,  size: 22 },
    { src: "/referral-3.jpg", x: 54,  y: 40, size: 18 },
    // Right cluster
    { src: "/referral-4.jpg", x: 138, y: 0,  size: 43 },
    { src: "/referral-5.jpg", x: 126, y: 44, size: 27 },
    { src: "/referral-6.jpg", x: 160, y: 48, size: 17 },
  ];

  return (
    <div className="relative mx-auto" style={{ width: 200, height: 76 }}>
      {/* Cat-head frame 53x53 — centered */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 74, top: 12, width: 53, height: 53, zIndex: 1 }}
      >
        <img src="/cat-placeholder.png" alt="" className="absolute inset-0 w-full h-full object-contain opacity-50" />
        <div className="relative z-10">
          <ShareIcon />
        </div>
      </div>
      {/* Photo circles — no borders, no shadows */}
      {photos.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full overflow-hidden"
          style={{
            left: p.x, top: p.y,
            width: p.size, height: p.size,
            zIndex: 2,
          }}
        >
          <img src={p.src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}

export function RewardsScreen({ onBack }: RewardsScreenProps) {
  const [showAllDiscounts, setShowAllDiscounts] = useState(false);

  const displayedDiscounts = showAllDiscounts ? AIRVET_DISCOUNTS : AIRVET_DISCOUNTS.slice(0, FEATURED_COUNT);

  return (
    <div className="min-h-full bg-gray-50">
      <StatusBar />

      {/* Header */}
      <div className="bg-white">
        <div className="flex items-center gap-3 px-5 pt-4 pb-4">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <h1 className="font-dynapuff font-bold text-xl text-gray-900">Rewards</h1>
        </div>
      </div>

      <div className="px-5 pt-5 pb-28 space-y-5">

        {/* ── SECTION 1: Referral — matches reference design exactly ── */}
        <div className="rounded-[20px] bg-white p-6 text-center space-y-3" style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)" }}>
          {/* Coming soon pill — above title, matches other pills */}
          <div>
            <span className="inline-block rounded-full px-3 py-1.5 text-[12px] font-medium bg-gray-100 text-gray-500">
              Coming soon
            </span>
          </div>

          {/* Title */}
          <h2 className="font-dynapuff font-bold text-[16px] leading-snug text-gray-400">
            Invite a friend<br />
            Earn $30 Meow Credits
          </h2>

          {/* Avatar cluster with cat share icon */}
          <AvatarCluster />

          {/* Stats row */}
          <div className="flex items-center justify-center gap-10 pt-2">
            <div className="text-center">
              <Users className="w-5 h-5 text-orange-400 mx-auto mb-1" strokeWidth={1.5} />
              <p className="text-xs text-gray-500">Friends joined</p>
              <p className="text-xl font-bold text-gray-300">0</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-5 h-5 text-purple-400 mx-auto mb-1" strokeWidth={1.5} />
              <p className="text-xs text-gray-500">Credits earned</p>
              <p className="text-xl font-bold text-gray-300">0</p>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: Spend cashback on ── */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 px-1">Spend credits on</h3>
          <div className="flex gap-3">
            <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-blue-500" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-gray-900 text-center">Monthly bill credit</p>
              <p className="text-xs text-gray-400 text-center">Reduce your $50/mo plan</p>
            </div>
            <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-orange-500" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-gray-900 text-center">Cat store</p>
              <p className="text-xs text-gray-400 text-center">Food, toys, treats &amp; more</p>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: Airvet discounts ── */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-semibold text-gray-900">Exclusive Airvet perks</h3>
            <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">{AIRVET_DISCOUNTS.length} discounts</span>
          </div>
          <p className="text-sm text-gray-500 px-1">
            Included with your Meow membership. Claim in the Airvet app.
          </p>

          {/* Discount cards */}
          <div className="space-y-2.5">
            {displayedDiscounts.map((d, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 flex items-center gap-3"
              >
                {/* Brand initial */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                  style={{ backgroundColor: d.color }}
                >
                  {d.brand.charAt(0)}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">{d.brand}</p>
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${d.color}15`, color: d.color }}
                    >
                      {d.discount}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{d.desc}</p>
                </div>

                {/* Lock / claim indicator */}
                <div className="flex-shrink-0">
                  <Lock className="w-4 h-4 text-gray-300" strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>

          {/* Show more / less */}
          {!showAllDiscounts ? (
            <button
              onClick={() => setShowAllDiscounts(true)}
              className="w-full flex items-center justify-center gap-1.5 py-3 text-sm font-medium text-orange-500"
            >
              See all {AIRVET_DISCOUNTS.length} discounts
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowAllDiscounts(false)}
              className="w-full flex items-center justify-center gap-1.5 py-3 text-sm font-medium text-gray-400"
            >
              Show less
            </button>
          )}

          {/* Airvet attribution */}
          <p className="text-[11px] text-gray-400 text-center px-4">
            Discounts provided by Airvet partners. Log into the Airvet app to claim. Subject to change. US only.
          </p>
        </div>
      </div>
    </div>
  );
}
