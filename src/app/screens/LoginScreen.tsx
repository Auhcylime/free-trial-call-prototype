import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, Share, RotateCw } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { WhiteButton } from "../components/WhiteButton";

interface LoginScreenProps {
  onNext: () => void;
  onSelectAccount?: (name: string) => void;
}

function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
      <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
      <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.572 17.5745 13.3038 18.0014 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50"/>
      <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
    </svg>
  );
}

function GoogleIconSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
      <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
      <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.572 17.5745 13.3038 18.0014 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50"/>
      <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17.05 20.28C16.07 21.23 15 21.08 13.97 20.63C12.88 20.17 11.88 20.15 10.73 20.63C9.29004 21.25 8.53004 21.07 7.67004 20.28C2.79004 15.25 3.51004 7.59 9.05004 7.31C10.4 7.38 11.34 8.05 12.13 8.11C13.31 7.87 14.44 7.18 15.7 7.27C17.21 7.39 18.35 7.99 19.1 9.07C15.98 10.94 16.72 15.05 19.58 16.2C19.01 17.7 18.27 19.19 17.04 20.29L17.05 20.28ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3C16.06 5.58 13.43 7.5 12.03 7.25Z" fill="#333333"/>
    </svg>
  );
}

function PersonIcon({ letter, bg }: { letter?: string; bg: string }) {
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
      style={{ backgroundColor: bg }}
    >
      {letter}
    </div>
  );
}

function GoogleAccountSheet({ onSelect, onClose }: { onSelect: (name: string) => void; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 z-40"
        onClick={onClose}
      />
      {/* Sheet */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 350 }}
        className="absolute bottom-0 left-0 right-0 z-50 bg-[#f2f2f7] rounded-t-xl overflow-hidden flex flex-col"
        style={{ height: "85%", fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {/* Safari-style browser chrome */}
        <div className="bg-[#f9f9f9] border-b border-gray-200">
          {/* Top bar: X + URL + chat icon */}
          <div className="flex items-center px-3 pt-2.5 pb-1.5">
            <button onClick={onClose} className="p-1">
              <X className="w-5 h-5 text-gray-500" strokeWidth={2.5} />
            </button>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[13px] text-black font-medium">accounts.google.com</span>
            </div>
            <div className="p-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
          </div>
          {/* Sign in with Google label */}
          <div className="flex items-center gap-2 px-4 pb-2.5 border-t border-gray-200 pt-2">
            <GoogleIconSmall />
            <span className="text-[14px] text-gray-700">Sign in with Google</span>
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 bg-white overflow-y-auto">
          <div className="px-6 pt-8 pb-4">
            <h2 className="text-[24px] font-normal text-gray-900 leading-tight">
              Choose an account
            </h2>
            <p className="text-[14px] text-gray-500 mt-1">
              to continue to <span className="text-[#1a73e8] font-medium">Meow Mobile</span>
            </p>
          </div>

          {/* Account list */}
          <div className="border-t border-gray-100">
            {/* Account 1 */}
            <button
              onClick={() => onSelect("Emily")}
              className="w-full flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <PersonIcon letter="E" bg="#6b7280" />
              <div className="text-left">
                <p className="text-[14px] text-gray-900 font-medium leading-snug">Emily Chua</p>
                <p className="text-[12px] text-gray-500 leading-snug">emilychua00@gmail.com</p>
              </div>
            </button>

            {/* Account 2 */}
            <button
              onClick={() => onSelect("Mochi")}
              className="w-full flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <PersonIcon letter="M" bg="#7c3aed" />
              <div className="text-left">
                <p className="text-[14px] text-gray-900 font-medium leading-snug">Mochi Gather</p>
                <p className="text-[12px] text-gray-500 leading-snug">mochi@gatherat.ai</p>
              </div>
            </button>

            {/* Use another account */}
            <button
              onClick={() => onSelect("")}
              className="w-full flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="text-[14px] text-gray-900 font-medium">Use another account</p>
            </button>
          </div>
        </div>

        {/* Safari bottom toolbar */}
        <div className="bg-[#f9f9f9] border-t border-gray-200 px-4 py-2 flex items-center justify-between">
          <button className="p-1.5">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <span className="text-[11px] text-gray-400">United States</span>
          <div className="flex items-center gap-3">
            <button className="p-1.5">
              <Share className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-1.5">
              <RotateCw className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function LoginScreen({ onNext, onSelectAccount }: LoginScreenProps) {
  const [showGoogleSheet, setShowGoogleSheet] = useState(false);

  const handleGoogleClick = () => {
    setShowGoogleSheet(true);
  };

  const handleAccountSelect = (name: string) => {
    onSelectAccount?.(name);
    setShowGoogleSheet(false);
    setTimeout(onNext, 300);
  };

  return (
    <div className="relative bg-[#0A0300] overflow-hidden" style={{ height: 844 }}>
      {/* Background image — full bleed */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/login-bg-cat.png)" }}
      />

      {/* Gradient overlay — subtle top darkening + strong bottom for text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-40% to-black/70" />

      <StatusBar light />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Logo — chunky "MEOW MOBILE" */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center pt-4 pb-2"
        >
          <img
            src="/meow-logo.png"
            alt="Meow Mobile"
            className="h-16 drop-shadow-lg"
          />
        </motion.div>

        {/* Spacer — pushes content to bottom */}
        <div className="flex-1" />

        {/* Bottom content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="px-6 pb-[72px]"
        >
          {/* Headlines — large serif */}
          <div className="mb-2">
            <h1
              className="text-white text-[2.6rem] leading-[1.08] font-normal"
              style={{ fontFamily: '"Young Serif", Georgia, serif' }}
            >
              24/7 Vet Care.
            </h1>
            <h1
              className="text-white text-[2.6rem] leading-[1.08] font-normal"
              style={{ fontFamily: '"Young Serif", Georgia, serif' }}
            >
              Unlimited
            </h1>
            <h1
              className="text-white text-[2.6rem] leading-[1.08] font-normal mb-3"
              style={{ fontFamily: '"Young Serif", Georgia, serif' }}
            >
              Wireless.
            </h1>
            <p
              className="text-white/80 font-medium text-base"
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            >
              Sign in to continue
            </p>
          </div>

          {/* Login buttons */}
          <div className="flex gap-3 mt-4">
            <WhiteButton className="flex-1" onClick={handleGoogleClick}>
              <GoogleIcon />
            </WhiteButton>
            <WhiteButton className="flex-1" onClick={onNext}>
              <AppleIcon />
            </WhiteButton>
          </div>
        </motion.div>
      </div>

      {/* Google account picker sheet */}
      <AnimatePresence>
        {showGoogleSheet && (
          <GoogleAccountSheet
            onSelect={handleAccountSelect}
            onClose={() => setShowGoogleSheet(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
