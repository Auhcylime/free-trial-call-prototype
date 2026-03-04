import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Wallet, Shield, Check } from "lucide-react";
import { Button } from "../components/Button";
import { TrustBadges } from "../components/TrustBadges";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          background?: string;
          speed?: string;
          loop?: boolean;
          autoplay?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

interface CardVerifyScreenProps {
  onNavigate: (screen: string) => void;
  variant?: "free-call" | "buy-now";
}

type PaymentMethod = "card" | "google";

export function CardVerifyScreen({ onNavigate, variant = "free-call" }: CardVerifyScreenProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumber = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted);
  };

  const handleExpiry = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) {
      setExpiry(digits.slice(0, 2) + "/" + digits.slice(2));
    } else {
      setExpiry(digits);
    }
  };

  const handleCvv = (val: string) => {
    setCvv(val.replace(/\D/g, "").slice(0, 3));
  };

  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Dimmed overlay — 45% black like prototype */}
      <div className="absolute inset-0 bg-black/45" onClick={() => onNavigate("plan")} />

      {/* Back button */}
      <button
        onClick={() => onNavigate("plan")}
        className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
      >
        <ArrowLeft className="w-5 h-5 text-gray-600" />
      </button>

      {/* Order details card — slides in from top */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute top-3 left-0 right-0 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-3 rounded-2xl px-4 py-3.5 space-y-2.5 backdrop-blur-md" style={{ background: "rgba(42, 35, 24, 0.82)" }}>
          <h3 className="font-young-serif text-[17px] text-white">Order details</h3>

          {variant === "free-call" ? (
            <>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-white/60">First vet call (worth ~$65)</span>
                <span className="text-[13px] font-bold text-white/60">FREE</span>
              </div>
              <div className="border-t border-white/15" />
              <div className="flex justify-between items-center">
                <span className="text-[15px] font-extrabold text-white">Due today</span>
                <span className="text-[15px] font-extrabold text-white">$0.00</span>
              </div>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Love it? Get unlimited vet care + full phone plan for $15/mo.{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => {
                    onNavigate("plan");
                    setTimeout(() => {
                      document.getElementById("vet-speed-dial")?.scrollIntoView({ behavior: "smooth" });
                    }, 350);
                  }}
                >
                  Find out more here.
                </span>
              </p>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-white/60 flex items-center gap-1.5">
                  <span className="relative overflow-hidden bg-[#2ecc71] text-white text-[9px] font-bold uppercase tracking-wider px-1.5 pt-[5px] pb-[3px] rounded-full shimmer-pill inline-flex items-center justify-center text-center leading-none">50% off</span>
                  <span className="line-through text-white/40">$30</span>{" "}
                  $15/mo × 3 months
                </span>
                <span className="text-[13px] font-bold text-white/60">$45.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-white/60">Recovery fee</span>
                <span className="text-[13px] font-bold text-white/60">$6.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-white/60">Taxes & Surcharges</span>
                <span className="text-[13px] font-bold text-white/60">$1.63</span>
              </div>
              <div className="border-t border-white/15" />
              <div className="flex justify-between items-center">
                <span className="text-[15px] font-extrabold text-white">Due today</span>
                <span className="text-[15px] font-extrabold text-white">$52.63</span>
              </div>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Then $30/mo after 3 months. Cancel anytime.
              </p>
            </>
          )}
        </div>
      </motion.div>

      {/* Bottom sheet — slides in from bottom */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute bottom-0 left-0 right-0 z-10"
        onClick={() => onNavigate("plan")}
      >

          {/* White sheet with cat on the edge */}
          <div className="relative">
            {/* Cat sitting on the white sheet top edge */}
            <div
              className="absolute left-8 pointer-events-none z-10"
              style={{ top: "-40px", width: "52px", height: "52px" }}
            >
              <dotlottie-player
                src="https://lottie.host/f1c83669-a490-4242-91af-e002d740a008/V16NPNnklr.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Scrollable sheet content */}
            <div
                            className={`bg-white overflow-y-auto overflow-x-hidden ${variant === "buy-now" ? "max-h-[515px]" : "max-h-[530px]"}`}
              style={{ borderRadius: "24px 24px 0 0" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-5">
                <div className="w-12 h-[5px] bg-gray-300 rounded-full" />
              </div>

            <div className="px-5 space-y-5 pb-36">
              {/* Why do we need a card? — only show for free-call variant */}
              {variant === "free-call" && (
                <div
                  className="rounded-[40px] border-8 border-white bg-white p-4 shadow-[0_0_0_3px_rgb(232,124,0)] bg-orange-500/5"
                >
                  <h3 className="text-[16px] font-black text-[#1a1a1a] text-center mb-2.5">
                    Why do we need a card?
                  </h3>
                  <div className="bg-white rounded-3xl p-4">
                    <p className="text-[13px] text-[#888] text-center leading-relaxed">
                      We check your card to prevent misuse, like a hotel hold, but $0.
                    </p>
                  </div>
                </div>
              )}

              {/* Trust badges */}
              <TrustBadges />

            {/* Payment method tabs — 2 columns with icons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod("card")}
                className="flex flex-col items-start gap-1.5 p-4 rounded-xl transition-all"
                style={
                  paymentMethod === "card"
                    ? { border: "2px solid #F5A623", background: "#fff" }
                    : { border: "2px solid #eee", background: "#fff" }
                }
              >
                <img
                  src="/card-icon.png"
                  alt="Card"
                  className="h-5 object-contain"
                  style={{ opacity: paymentMethod === "card" ? 1 : 0.4 }}
                />
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: paymentMethod === "card" ? "#F5A623" : "#999" }}
                >
                  Card
                </span>
              </button>
              <button
                onClick={() => setPaymentMethod("google")}
                className="flex flex-col items-start gap-1.5 p-4 rounded-xl transition-all"
                style={
                  paymentMethod === "google"
                    ? { border: "2px solid #F5A623", background: "#fff" }
                    : { border: "2px solid #eee", background: "#fff" }
                }
              >
                <img src="/gpay-icon.png" alt="Google Pay" className="h-5 object-contain" />
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: paymentMethod === "google" ? "#1a1a1a" : "#999" }}
                >
                  Google Pay
                </span>
              </button>
            </div>

            {/* Card form */}
            {paymentMethod === "card" && (
              <div className="space-y-2.5">
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Card number"
                    value={cardNumber}
                    onChange={(e) => handleCardNumber(e.target.value)}
                    className="w-full h-[52px] px-4 pr-28 text-[13px] text-[#333] outline-none transition-colors"
                    style={{ border: "2px solid #eee", borderRadius: "12px" }}
                    onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                    onBlur={(e) => (e.target.style.borderColor = "#eee")}
                  />
                  {/* Card brand logos */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                    <img src="/card-mastercard.svg" alt="Mastercard" className="h-6" />
                    <img src="/card-visa.svg" alt="Visa" className="h-6" />
                    <img src="/card-discover.png" alt="Discover" className="h-8 object-contain" />
                  </div>
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Expiration date"
                  value={expiry}
                  onChange={(e) => handleExpiry(e.target.value)}
                  className="w-full h-[52px] px-4 text-[13px] text-[#333] outline-none transition-colors"
                  style={{ border: "2px solid #eee", borderRadius: "12px" }}
                  onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                  onBlur={(e) => (e.target.style.borderColor = "#eee")}
                />
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Security code"
                    value={cvv}
                    onChange={(e) => handleCvv(e.target.value)}
                    className="w-full h-[52px] px-4 pr-14 text-[13px] text-[#333] outline-none transition-colors"
                    style={{ border: "2px solid #eee", borderRadius: "12px" }}
                    onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                    onBlur={(e) => (e.target.style.borderColor = "#eee")}
                  />
                  <img
                    src="/cvv-icon.svg"
                    alt="CVV"
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-7"
                  />
                </div>
              </div>
            )}

            {/* Authorization notice — buy-now only */}
            {variant === "buy-now" && (
              <div className="rounded-xl px-4 py-3" style={{ background: "#FFF8EE" }}>
                <p className="text-[13px] leading-relaxed" style={{ color: "#7A4A1A" }}>
                  <strong>By paying, you authorize Meow Mobile (Telco Papa Ltd)</strong> to charge your card monthly until you cancel, per their terms.
                </p>
              </div>
            )}

            {paymentMethod === "google" && (
              <div className="py-8 text-center text-[#ccc] text-[13px]">
                Google Pay form (visual mockup)
              </div>
            )}

            </div>
            </div>

            {/* Floating footer — both variants */}
            {variant === "free-call" ? (
              <div
                className="absolute bottom-0 left-0 right-0 px-5 pb-6 pt-4 z-10"
                style={{
                  background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,1) 40%)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-center text-[13px] font-bold text-[#999] mb-3">
                  You won't be charged.
                </p>
                <Button variant="orange-complex" fullWidth onClick={() => onNavigate("success")}>
                  Verify card
                </Button>
              </div>
            ) : (
              <div
                className="absolute bottom-0 left-0 right-0 px-5 pb-6 pt-4 z-10"
                style={{
                  background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,1) 40%)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full backdrop-blur-sm mb-3"
                  style={{ background: "rgba(61, 54, 48, 0.85)", border: "2px solid #E87C00" }}
                >
                  <span className="relative inline-flex items-center justify-center w-4 h-4">
                    <Shield className="w-4 h-4" style={{ color: "#F5A623", fill: "#F5A623" }} />
                    <Check className="absolute w-2.5 h-2.5 text-white" strokeWidth={4} />
                  </span>
                  <span className="text-[13px] font-semibold text-white/80">30 day moneyback guarantee</span>
                </motion.div>
                <Button variant="orange-complex" fullWidth onClick={() => onNavigate("success-order")}>
                  <span className="flex items-center justify-center gap-2">
                    <span className="relative inline-flex items-center justify-center w-4 h-4">
                      <Shield className="w-4 h-4 text-white" />
                      <Check className="absolute w-2.5 h-2.5 text-white" strokeWidth={4} />
                    </span>
                    Secure checkout
                  </span>
                </Button>
              </div>
            )}
          </div>
        </motion.div>
    </motion.div>
  );
}
