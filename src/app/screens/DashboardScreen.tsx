import { useState, useEffect } from "react";
import { StatusBar } from "../components/StatusBar";
import { Check, ChevronDown, Download, Shield, Lock, Wifi } from "lucide-react";
import { SwipeableCatRow } from "../components/SwipeableCatRow";
import { motion, AnimatePresence } from "framer-motion";
import { OrangeButton } from "../components/OrangeButton";
import { CatAvatar } from "../components/CatAvatar";
import type { CatProfile } from "../AppPrototype";
import { getMochiArticles, incrementVisitCount, type ArticleData } from "../data/mochiArticles";
import { AddCatOverlay } from "../components/AddCatOverlay";

/* ─── Paw SVG ─── */
function PawIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="currentColor">
      <ellipse cx="22.2" cy="12" rx="7.5" ry="9" />
      <ellipse cx="41.8" cy="12" rx="7.5" ry="9" />
      <ellipse cx="10" cy="28" rx="7" ry="8.5" />
      <ellipse cx="54" cy="28" rx="7" ry="8.5" />
      <path d="M32 28c-10 0-18 8-18 16 0 6 4 10 8 12s8 3 10 3 6-1 10-3 8-6 8-12c0-8-8-16-18-16z" />
    </svg>
  );
}

function getAgeText(dob: { mm: string; dd: string; yyyy: string }): string {
  if (!dob.yyyy || !dob.mm) return "";
  const birthDate = new Date(parseInt(dob.yyyy), parseInt(dob.mm) - 1, parseInt(dob.dd) || 1);
  const now = new Date(2026, 1, 26); // prototype date
  const totalMonths = (now.getFullYear() - birthDate.getFullYear()) * 12 + (now.getMonth() - birthDate.getMonth());
  if (totalMonths < 1) return "< 1 month";
  if (totalMonths < 12) return `${totalMonths} month${totalMonths === 1 ? "" : "s"}`;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (months === 0) return `${years} year${years === 1 ? "" : "s"}`;
  return `${years} year${years === 1 ? "" : "s"}, ${months} month${months === 1 ? "" : "s"}`;
}

function getAgeMonths(dob: { mm: string; dd: string; yyyy: string }): number {
  if (!dob.yyyy || !dob.mm) return 18; // fallback
  const birthDate = new Date(parseInt(dob.yyyy), parseInt(dob.mm) - 1, parseInt(dob.dd) || 1);
  const now = new Date(2026, 1, 26);
  return (now.getFullYear() - birthDate.getFullYear()) * 12 + (now.getMonth() - birthDate.getMonth());
}

function getCaseNotes(): { petName: string; note: string; cta: string; date: string }[] {
  return [
    { petName: "Gaia", note: "The vet noticed Gaia's eyes were a bit watery and recommended switching to a dust-free litter and cleaning around the eyes daily for the next week.", cta: "Follow up on Gaia's eyes", date: "Feb 27, 2026" },
    { petName: "Princess", note: "The vet recommended switching Princess to a high-protein dry food and monitoring her weight over the next 2 weeks.", cta: "Follow up on Princess's diet", date: "Feb 20, 2026" },
    { petName: "Gaia", note: "The vet checked Gaia's teeth and noted mild tartar buildup. Recommended dental treats and a follow-up cleaning in 3 months.", cta: "Follow up on Gaia's dental", date: "Feb 14, 2026" },
    { petName: "Princess", note: "The vet confirmed Princess is up to date on all vaccinations. Next booster due in 12 months.", cta: "Follow up on Princess's vaccinations", date: "Jan 30, 2026" },
  ];
}

interface DashboardScreenProps {
  onNext: () => void;
  catProfiles: CatProfile[];
  setCatProfiles: React.Dispatch<React.SetStateAction<CatProfile[]>>;
  userName: string;
  onArticleTap?: (article: ArticleData) => void;
  openAirvetDrawer?: boolean;
  onAirvetDrawerOpened?: () => void;
}

export function DashboardScreen({ onNext, catProfiles, setCatProfiles, userName, onArticleTap, openAirvetDrawer, onAirvetDrawerOpened }: DashboardScreenProps) {
  const displayName = userName || "there";
  const [activeCatIndex, setActiveCatIndex] = useState(0);
  const [showCatDropdown, setShowCatDropdown] = useState(false);
  const [showAirvetDrawer, setShowAirvetDrawer] = useState(false);
  const [airvetStep, setAirvetStep] = useState<1 | 2 | 3>(1);
  const [showAccountConfirm, setShowAccountConfirm] = useState(false);
  const [showAddCat, setShowAddCat] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [showRecoveryInfo, setShowRecoveryInfo] = useState(false);
  const [showTaxInfo, setShowTaxInfo] = useState(false);

  // Increment visit count on mount for article rotation
  useEffect(() => {
    incrementVisitCount();
  }, []);

  // Open Airvet drawer when triggered from article CTA
  useEffect(() => {
    if (openAirvetDrawer) {
      setAirvetStep(1);
      setShowAirvetDrawer(true);
      onAirvetDrawerOpened?.();
    }
  }, [openAirvetDrawer, onAirvetDrawerOpened]);

  const handleDeleteCat = (i: number) => {
    if (catProfiles.length <= 1) return;
    setCatProfiles((prev) => prev.filter((_, idx) => idx !== i));
    if (i === activeCatIndex) {
      setActiveCatIndex(Math.max(0, i - 1));
    } else if (i < activeCatIndex) {
      setActiveCatIndex((prev) => prev - 1);
    }
  };

  const activeCat = catProfiles[activeCatIndex] || catProfiles[0];
  const catName = activeCat.name || "Cat";
  const ageMonths = getAgeMonths(activeCat.dob);
  const ageText = activeCat.dob.yyyy ? getAgeText(activeCat.dob) : "18 months";
  const caseNotes = getCaseNotes();
  const [caseNoteIndex, setCaseNoteIndex] = useState(0);
  const caseNote = caseNotes[caseNoteIndex];
  const articles = getMochiArticles(catName, activeCat.breed, ageText);

  return (
    <div className="flex flex-col overflow-hidden" style={{ backgroundColor: "#1a1a1a", height: 844 }}>

      {/* ─── Hero Cat Card (sticky, does not scroll) ─── */}
      <div className="flex-shrink-0 relative z-20">
      <div className="relative overflow-hidden" style={{ borderRadius: "0 0 32px 32px" }}>
        {/* Cat photo background */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${activeCat.photoSrc || "/cat-sunglasses.png"})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        <div className="relative z-10 flex flex-col h-full">
          <StatusBar />

          {/* Header: avatars + name */}
          <div className="px-4 pt-3 pb-2 flex items-center gap-3">
            {/* Overlapping avatars */}
            <div className="relative flex-shrink-0" style={{ width: 56, height: 56 }}>
              <img
                src="/default-avatar.png"
                alt=""
                className="absolute top-0 left-0 w-11 h-11 rounded-full object-cover border-2 border-white/30 z-10"
              />
              <div className="absolute z-20" style={{ bottom: 2, right: 2 }}>
                <CatAvatar size={28} photoSrc={activeCat.photoSrc || "/cat-sunglasses.png"} />
              </div>
            </div>

            {/* Name + cat info */}
            <div className="flex-1 min-w-0">
              <p className="font-bold text-white text-lg leading-tight">Hi {displayName}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <PawIcon className="w-3.5 h-3.5 text-gray-300" />
                <span className="text-[12px] text-gray-300">
                  {catName} · {ageText}
                </span>
              </div>
            </div>

            {/* Cat profile button + dropdown */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setShowCatDropdown((v) => !v)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[12px] font-medium backdrop-blur-sm"
                style={{ border: "1px solid rgba(255,255,255,0.4)", backgroundColor: "rgba(255,255,255,0.12)" }}
              >
                Change cat profile
                <ChevronDown className="w-3 h-3 text-white/70" />
              </button>

              {/* Dropdown backdrop */}
              {showCatDropdown && (
                <div className="absolute -inset-x-40 -top-20 -bottom-96 z-40" onClick={() => setShowCatDropdown(false)} />
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {showCatDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1.5 w-full rounded-2xl overflow-hidden z-50"
                    style={{ backgroundColor: "rgba(30,30,30,0.95)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    {catProfiles.some((c) => c.name) ? (
                      <>
                        {catProfiles.map((cat, i) =>
                          cat.name ? (
                            <SwipeableCatRow
                              key={i}
                              cat={cat}
                              index={i}
                              displayName={cat.name}
                              isActive={i === activeCatIndex}
                              canDelete={catProfiles.filter((c) => c.name).length > 1}
                              onSelect={() => {
                                setActiveCatIndex(i);
                                setShowCatDropdown(false);
                              }}
                              onDelete={() => handleDeleteCat(i)}
                            />
                          ) : null
                        )}
                        {/* Divider */}
                        <div className="h-px bg-white/10 mx-3" />
                        {/* Add cat profile */}
                        <button
                          onClick={() => { setShowCatDropdown(false); setShowAddCat(true); }}
                          className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left hover:bg-white/5 active:bg-white/10"
                        >
                          <div className="w-6 h-6 rounded-full flex-shrink-0 border border-dashed border-white/30 flex items-center justify-center">
                            <span className="text-white/50 text-xs font-bold">+</span>
                          </div>
                          <span className="text-[13px] font-medium text-white/60">Add cat profile</span>
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => { setShowCatDropdown(false); setShowAddCat(true); }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left hover:bg-white/5 active:bg-white/10"
                      >
                        <div className="w-6 h-6 rounded-full flex-shrink-0 border border-dashed border-white/30 flex items-center justify-center">
                          <span className="text-white/50 text-xs font-bold">+</span>
                        </div>
                        <span className="text-[13px] font-medium text-white/60">Add cat profile</span>
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Case notes */}
          <div className="px-5 pt-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white/60 text-[12px] font-semibold uppercase tracking-wide">Airvet case notes · {caseNote.petName} · {caseNote.date}</p>
              {caseNotes.length > 1 && (
                <div className="flex items-center gap-1.5 text-white/60 text-[12px] font-semibold">
                  <button onClick={() => setCaseNoteIndex((i) => i - 1)} className={caseNoteIndex <= 0 ? "invisible" : ""}>&lt;</button>
                  <span>{caseNoteIndex + 1}/{caseNotes.length}</span>
                  <button onClick={() => setCaseNoteIndex((i) => i + 1)} className={caseNoteIndex >= caseNotes.length - 1 ? "invisible" : ""}>&gt;</button>
                </div>
              )}
            </div>
            <p className="text-white text-[16px] leading-relaxed">
              {caseNote.note}
            </p>
          </div>

          {/* CTA */}
          <div className="px-5 pt-4 pb-5">
            <button
              onClick={() => { setAirvetStep(1); setShowAirvetDrawer(true); }}
              className="flex items-center justify-center gap-2.5 rounded-full px-5 py-3 w-full"
              style={{
                backgroundColor: "rgba(232, 124, 0, 0.12)",
                boxShadow: "inset 0 0 14px 3px rgba(232, 124, 0, 0.25), 0 0 24px rgba(232, 124, 0, 0.15)",
                border: "1px solid rgba(232, 124, 0, 0.35)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#E87C00">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-[#E87C00] font-semibold text-[16px]">{caseNote.cta}</span>
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* ─── Scrollable content ─── */}
      <div className="flex-1 overflow-y-auto bg-[#EFEFEF]" style={{ marginTop: -32, paddingTop: 32 }}>

      {/* ─── Section Heading ─── */}
      <div className="px-5 pt-8 pb-4">
        <h2 className="text-gray-900 text-[16px] font-bold">24/7 Vet Care + Unlimited Wireless</h2>
      </div>

      {/* ─── Pricing Card ─── */}
      <div className="px-4 pb-6">
        <div
          className="relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
          style={{ borderRadius: "40px 0 40px 0" }}
          onClick={() => setShowCheckout(true)}
        >
          {/* Photo background */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/full-plan-bg.png)" }} />

          <div className="relative z-10 px-6 pt-6 pb-6">
            {/* LIMITED TIME OFFER badge */}
            <div className="flex justify-center mb-5">
              <span
                className="text-[12px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full"
                style={{ color: "#FF6B35", backgroundColor: "rgba(255,255,255,0.3)" }}
              >
                Limited time offer: 50% off
              </span>
            </div>

            {/* Benefits */}
            <div className="space-y-3.5 mb-5">
              {[
                "Real vet on call, day or night",
                "50GB premium speed data",
                "Unlimited talk & text",
                "All fur-babies included",
              ].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="flex-shrink-0">
                    <defs>
                      <mask id="checkCutDash">
                        <circle cx="10" cy="10" r="10" fill="white" />
                        <polyline points="5.5,10.5 8.5,13.5 14.5,7" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </mask>
                    </defs>
                    <circle cx="10" cy="10" r="10" fill="#10b981" mask="url(#checkCutDash)" />
                  </svg>
                  <p className="text-white text-[16px] font-semibold">{b}</p>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-[#FFBD71] text-[28px] font-dynapuff line-through decoration-2">$30</span>
              <span className="text-[#FFBD71] text-[52px] font-dynapuff font-bold leading-none">
                $15<span className="text-[28px]">/mo</span>
              </span>
            </div>
            <p className="text-gray-300 text-[12px] text-center mt-1">($45 upfront for 3 months)</p>
          </div>
        </div>
      </div>

      {/* ─── Article Heading ─── */}
      <div className="px-5 pt-4 pb-2">
        <h2 className="text-gray-900 text-[16px] font-bold">Helpful Topics for {catName}</h2>
      </div>

      {/* ─── Article Tiles Grid ─── */}
      <div className="px-4 pb-32">
        <div className="grid grid-cols-2 gap-3">
          {articles.map((article) => (
            <button
              key={article.id}
              onClick={() => onArticleTap?.(article)}
              className="relative overflow-hidden text-left active:scale-[0.97] transition-transform"
              style={{ aspectRatio: "1 / 1", borderRadius: "40px 0 40px 0" }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.heroImage})` }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-start h-full p-3 gap-1.5">
                {/* Category badge */}
                <span
                  className="self-start text-[12px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(0,0,0,0.18)", color: article.categoryColor }}
                >
                  {article.category}
                </span>

                {/* Title */}
                <p className="text-white text-[16px] leading-snug">
                  {article.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      </div>

      {/* Checkout Bottom Sheet */}
      <AnimatePresence>
        {showCheckout && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 z-40"
              onClick={() => setShowCheckout(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 350 }}
              className="absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl"
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-3">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>

              <div className="px-5 pb-6 space-y-5">
                {/* Upgrade header */}
                <p className="text-gray-900 text-[16px] font-bold leading-snug text-center">
                  Want more vet calls?<br />Upgrade for unlimited + phone plan for $15/mo
                </p>

                {/* Order details card */}
                <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#2A2318" }}>
                  <div className="px-5 py-4 space-y-3">
                    <p className="text-white font-bold text-lg">Order details</p>

                    {/* Line items */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="bg-emerald-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">50% OFF</span>
                          <span className="text-gray-400 text-sm line-through">$30</span>
                          <span className="text-gray-300 text-sm">$15/mo × 3 months</span>
                        </div>
                        <span className="text-gray-200 text-sm font-medium">$45.00</span>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-gray-300 text-sm">Recovery fee</span>
                            <button onClick={() => setShowRecoveryInfo(v => !v)} className="flex items-center justify-center">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                            </button>
                          </div>
                          <span className="text-gray-200 text-sm font-medium">$6.00</span>
                        </div>
                        {showRecoveryInfo && (
                          <div className="mt-2 rounded-xl bg-white p-3">
                            <p className="text-gray-700 text-xs leading-relaxed">The Recovery Fee is assessed by Meow Mobile to help recover Meow Mobile's costs associated with complying with various federal, state, and local governmental programs, statutes, regulations, taxes, and fees—both current and in the future. The Recovery Fee is not imposed by the government. For more information, visit Meow Mobile's Plan Terms and Conditions.</p>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-gray-300 text-sm">Taxes & Surcharges</span>
                            <button onClick={() => setShowTaxInfo(v => !v)} className="flex items-center justify-center">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                            </button>
                          </div>
                          <span className="text-gray-200 text-sm font-medium">$1.63</span>
                        </div>
                        {showTaxInfo && (
                          <div className="mt-2 rounded-xl bg-white p-3">
                            <p className="text-gray-700 text-xs leading-relaxed">Federal, state, municipal, local, and/or other governmental franchise, excise, public utility, and other telecommunications taxes, fees, and charges we collect to remit to the government. Visit Meow Mobile's Plans & Terms & Conditions for more information.</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Promo code */}
                    {!showPromoInput ? (
                      <button onClick={() => setShowPromoInput(true)} className="text-emerald-500 text-sm font-medium underline underline-offset-2">Have a promo code?</button>
                    ) : (
                      <div className="flex items-center gap-2" style={{ maxWidth: "75%" }}>
                        <input
                          type="text"
                          placeholder="Enter code"
                          className="flex-1 min-w-0 h-10 rounded-full bg-transparent px-4 text-sm text-white placeholder:text-gray-500 outline-none"
                          style={{ border: "2px solid #E87C00" }}
                          autoFocus
                        />
                        <button className="flex-shrink-0 h-10 px-4 rounded-full text-sm font-semibold text-gray-400" style={{ backgroundColor: "#1a1510" }}>
                          Apply
                        </button>
                      </div>
                    )}

                    {/* Divider */}
                    <div className="h-px bg-gray-600/50" />

                    {/* Due today */}
                    <div className="flex items-baseline justify-between">
                      <span className="text-white font-bold text-lg">Due today</span>
                      <span className="text-[#E87C00] font-bold text-xl">$52.63</span>
                    </div>

                    <p className="text-gray-500 text-xs">Then $30/mo after 3 months. Cancel anytime.</p>
                  </div>
                </div>

                {/* Authorization notice */}
                <div className="rounded-2xl px-3 py-2.5" style={{ backgroundColor: "#FFF8EC" }}>
                  <p className="text-xs leading-snug">
                    <span className="font-bold" style={{ color: "#8B2500" }}>By paying, you authorize Meow Mobile (Telco Papa Ltd)</span>
                    {" "}
                    <span className="text-gray-600">to charge your card monthly until you cancel, per their terms.</span>
                  </p>
                </div>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="relative inline-flex items-center justify-center w-4 h-4">
                      <Shield className="w-4 h-4 text-green-600" />
                      <Check className="absolute w-2.5 h-2.5 text-green-600" strokeWidth={4} />
                    </span>
                    Secure Payment
                  </span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-4 h-4" style={{ color: "#005AE0" }} />
                    SSL Encrypted
                  </span>
                  <span className="flex items-center gap-1">
                    <Wifi className="w-4 h-4" style={{ color: "#E87C00" }} />
                    Top 3 Network
                  </span>
                </div>

                {/* Buy now button */}
                <OrangeButton onClick={() => { setShowCheckout(false); onNext(); }}>Buy now</OrangeButton>

                {/* Card on file note */}
                <p className="text-gray-400 text-xs text-center">Your card on file will be charged</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Airvet Install Drawer */}
      <AnimatePresence>
        {showAirvetDrawer && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/40 z-40" onClick={() => setShowAirvetDrawer(false)} />
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 32, stiffness: 350 }} className="absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl" style={{ maxHeight: 380 }}>
              <div className="flex justify-center pt-3 pb-1"><div className="w-10 h-1 bg-gray-300 rounded-full" /></div>
              <div className="flex flex-col items-center px-6 pt-2 pb-6 gap-4 justify-between h-full">
                <div className="flex flex-col items-center gap-3">
                  <CatAvatar size={76} photoSrc={activeCat.photoSrc || "/cat-sunglasses.png"} />
                  <p className="text-black text-xl font-bold text-center leading-tight px-6">
                    {airvetStep === 3 ? "Done! Start your video call!" : `A few more steps for ${catName} to meet a vet`}
                  </p>
                </div>
                <div className="w-full space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => setAirvetStep((s) => Math.max(1, s - 1) as 1 | 2 | 3)} className={`text-gray-400 text-sm font-semibold px-1 ${airvetStep <= 1 || airvetStep >= 3 ? "invisible" : ""}`}>&lt;</button>
                    <span className="bg-gray-100 rounded-full px-3 py-1.5 text-sm font-semibold text-gray-600">Step {airvetStep} of 3</span>
                    <button onClick={() => setAirvetStep((s) => Math.min(3, s + 1) as 1 | 2 | 3)} className={`text-gray-400 text-sm font-semibold px-1 ${airvetStep >= 2 ? "invisible" : ""}`}>&gt;</button>
                  </div>
                  {airvetStep === 1 && (
                    <>
                      <p className="text-black text-sm text-center px-6">Return to Meow Mobile after downloading Airvet</p>
                      <OrangeButton onClick={() => setAirvetStep(2)}><span className="flex items-center justify-center gap-2"><Download className="w-4 h-4" /><span>Download the AirVet app</span></span></OrangeButton>
                    </>
                  )}
                  {airvetStep === 2 && (
                    <>
                      <p className="text-black text-sm text-center px-6">Button opens Airvet where you create your account and password</p>
                      <OrangeButton onClick={() => setShowAccountConfirm(true)}><span>Create account on the AirVet app</span></OrangeButton>
                    </>
                  )}
                  {airvetStep === 3 && (
                    <>
                      <p className="text-black text-sm text-center px-6">Connects in &lt; 1 min</p>
                      <OrangeButton onClick={() => setShowAirvetDrawer(false)}>
                        <span className="flex items-center justify-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                          <span>Video call a vet now</span>
                        </span>
                      </OrangeButton>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Account Confirmation Overlay — replicates activate-vetcare from rn-meow-app */}
      <AnimatePresence>
        {showAccountConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-[60] flex flex-col"
            style={{ backgroundColor: "#0A0300" }}
          >
            {/* Background image — cat with sunglasses */}
            <div
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: "url(/vet-care-success-bg.png)" }}
            />

            {/* Content — pushed to bottom */}
            <div className="relative z-10 flex-1 flex flex-col justify-end items-center px-6 pb-6">
              {/* Icon: Subtract0 (cat-head outline) + PetFriendlyHotel (orange paw) */}
              <div className="relative mb-20 flex items-center justify-center" style={{ width: 110, height: 110 }}>
                <svg width="110" height="104" viewBox="0 0 78 74" fill="none">
                  <path d="M7.74023 2.96387C9.05561 0.672143 11.6425 -0.531508 14.1738 0.226562C18.1048 1.40384 22.6238 4.29929 26.085 6.92383C28.5141 8.7658 31.43 9.92181 34.4785 9.92188H42.5635C46.0391 9.92173 49.2698 8.33117 52.1123 6.33105C57.0144 2.88175 62.5169 1.50929 66.3291 1.13281C68.1893 0.949143 70.1396 1.43586 71.1807 2.98828C74.6997 8.23642 75.4114 20.9143 75.2627 29.2188C75.2281 31.1491 75.6105 33.0602 76.085 34.9316C78.8153 45.7017 78.9757 74.4656 37.2354 73.9932C2.1559 73.5961 -1.30186 50.2445 1.7832 36.8369C2.10208 35.4512 2.29034 34.0376 2.25 32.6162C1.81881 17.4344 4.9324 7.85588 7.74023 2.96387ZM38.8311 18.3623C19.7553 18.3624 4.29106 30.1667 4.29102 44.7275C4.29102 59.2884 19.7553 71.0927 38.8311 71.0928C57.9069 71.0928 73.3711 59.2885 73.3711 44.7275C73.3711 30.1666 57.9069 18.3623 38.8311 18.3623Z" fill="#949494" fillOpacity="0.13"/>
                </svg>
                <svg className="absolute" style={{ top: 40 }} width="50" height="50" viewBox="0 0 56 56" fill="none">
                  <path d="M6.27557 24.6559L24.4365 8.3188L46.9977 17.3868L49.8859 43.5648L12.1882 49.2883L6.27557 24.6559Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.1662 4.80616C25.6967 4.13047 23.0534 4.5318 20.8957 5.91001C13.5548 10.599 8.295 16.0849 5.6149 19.2033C3.97905 21.1066 3.309 23.5659 3.54721 25.9821C3.82241 28.7732 4.3045 33.1354 5.02506 37.8814C5.57942 41.5327 6.21836 45.0385 6.75162 47.7824C7.52803 51.7774 11.2153 54.469 15.2558 53.9958C18.9669 53.5613 24.4565 52.8566 31.5783 51.7753C38.7 50.694 44.1513 49.7376 47.8242 49.051C51.823 48.3037 54.5453 44.6388 54.1009 40.5934C53.7957 37.8148 53.3652 34.2775 52.8109 30.6263C52.0903 25.8804 51.256 21.5717 50.6904 18.8246C50.2008 16.4466 48.8309 14.2969 46.7038 12.9648C43.2189 10.7825 36.5679 7.10496 28.1662 4.80616ZM23.3283 15.5214C22.5411 14.9494 21.5521 14.7319 20.5453 14.8848C19.5385 15.0377 18.6586 15.5389 18.0767 16.3187C17.4928 17.1016 17.2356 18.1294 17.4108 19.2837C17.5843 20.4259 18.1522 21.5092 18.9272 22.2774C19.6989 23.0426 20.7353 23.547 21.8351 23.3801C22.9349 23.2131 23.7749 22.4237 24.2847 21.464C24.7968 20.5004 25.0176 19.2974 24.8442 18.1552C24.6689 17.0009 24.1182 16.0957 23.3283 15.5214ZM16.5732 24.6949C15.786 24.1229 14.797 23.9054 13.7902 24.0583C12.7834 24.2111 11.9035 24.7124 11.3216 25.4922C10.7376 26.2751 10.4805 27.3029 10.6557 28.4572C10.8291 29.5994 11.3971 30.6827 12.172 31.4509C12.9438 32.216 13.9802 32.7205 15.08 32.5535C16.1798 32.3866 17.0198 31.5972 17.5296 30.6374C18.0417 29.6739 18.2625 28.4708 18.0891 27.3287C17.9138 26.1744 17.3631 25.2691 16.5732 24.6949ZM18.1542 37.1928C19.463 32.493 23.1093 28.6185 27.9501 27.8836C32.7909 27.1486 37.423 29.7662 40.0677 33.8659C42.2896 37.31 41.1639 41.893 37.5159 43.8046C35.8239 44.6913 33.5912 45.4956 30.691 45.936C27.7907 46.3763 25.4199 46.2708 23.541 45.9263C19.49 45.1836 17.0546 41.1414 18.1542 37.1928ZM37.8693 21.4616C38.4512 20.6817 39.3311 20.1805 40.3379 20.0277C41.3447 19.8748 42.3337 20.0923 43.1208 20.6643C43.9108 21.2385 44.4615 22.1437 44.6367 23.298C44.8102 24.4402 44.5893 25.6432 44.0774 26.6068C43.5675 27.5666 42.7275 28.3559 41.6277 28.5229C40.5278 28.6899 39.4914 28.1854 38.7196 27.4202C37.9448 26.6521 37.3768 25.5688 37.2034 24.4266C37.0281 23.2723 37.2853 22.2444 37.8693 21.4616ZM28.6958 14.7065C29.2777 13.9266 30.1576 13.4254 31.1644 13.2726C32.1712 13.1197 33.1602 13.3372 33.9473 13.9091C34.7373 14.4834 35.288 15.3886 35.4632 16.5429C35.6367 17.6851 35.4158 18.8881 34.9038 19.8517C34.394 20.8115 33.554 21.6008 32.4542 21.7678C31.3544 21.9348 30.3179 21.4303 29.5462 20.6651C28.7713 19.8969 28.2033 18.8137 28.0299 17.6715C27.8547 16.5172 28.1119 15.4893 28.6958 14.7065Z" fill="#E87C00"/>
                </svg>
              </div>

              {/* Text */}
              <div className="text-center mb-10">
                <p className="text-[28px] leading-tight mb-2 px-10" style={{ fontFamily: "'DynaPuff', cursive", fontWeight: 700 }}>
                  <span className="text-[#FFBD71]">Paws for a sec!</span>
                  <br />
                  <span className="text-white">Have you created an account?</span>
                </p>
                <p className="text-white text-base leading-relaxed">
                  An Airvet account is used to chat or call a vet. If you skip this step, your magic sign up link may be lost.
                </p>
              </div>

              {/* Buttons — side by side */}
              <div className="flex items-center w-full gap-2 pb-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setShowAccountConfirm(false); }}
                  className="flex-1 h-14 rounded-full font-semibold text-base text-white/80"
                >
                  Nope, I'll do it later
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setShowAccountConfirm(false); setAirvetStep(3); }}
                  className="flex-1 h-14 rounded-full font-semibold text-base text-white overflow-hidden relative"
                  style={{ background: "linear-gradient(to bottom, #F0A900 0%, #E87C00 15%, #E87C00 85%, #E35E00 100%)" }}
                >
                  <span className="absolute inset-0 rounded-full" style={{ boxShadow: "inset 4px 2px 6px 0px rgba(255,255,255,0.52)", mixBlendMode: "overlay" }} />
                  <span className="absolute inset-0 rounded-full" style={{ boxShadow: "inset -4px -4px 5px 0px rgba(0,0,0,0.38)", mixBlendMode: "overlay" }} />
                  <span className="relative z-10">Done!</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Cat Overlay */}
      <AddCatOverlay
        show={showAddCat}
        onClose={() => setShowAddCat(false)}
        onSave={(newCat) => {
          setCatProfiles((prev) => [...prev, newCat]);
          setActiveCatIndex(catProfiles.length);
          setShowAddCat(false);
        }}
      />
    </div>
  );
}
