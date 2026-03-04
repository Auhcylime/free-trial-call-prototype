import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SignupScreen } from "./screens/SignupScreen";
import { PlanPage } from "./screens/PlanPage";
import { CardVerifyScreen } from "./screens/CardVerifyScreen";
import { SuccessScreen } from "./screens/SuccessScreen";
import { Button } from "./components/Button";

type Screen = "signup" | "plan" | "success";

interface WebPrototypeProps {
  onSwitchToApp?: () => void;
}

export function WebPrototype({ onSwitchToApp }: WebPrototypeProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>("signup");
  const [showCheckout, setShowCheckout] = useState(false);
  const [pastBuyNow, setPastBuyNow] = useState(false);
  const [successVariant, setSuccessVariant] = useState<"free-call" | "buy-now">("free-call");
  const [transitioning, setTransitioning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevValue = useRef(false);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0 });
  };

  const navigate = (screen: string) => {
    if (screen === "checkout") {
      setShowCheckout(true);
    } else if (screen === "success") {
      setSuccessVariant("free-call");
      setShowCheckout(false);
      setCurrentScreen("success");
      scrollToTop();
    } else if (screen === "success-order") {
      setSuccessVariant("buy-now");
      setShowCheckout(false);
      setCurrentScreen("success");
      scrollToTop();
    } else {
      setShowCheckout(false);
      setCurrentScreen(screen as Screen);
      scrollToTop();
    }
  };

  useEffect(() => {
    if (currentScreen !== "plan") return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const anchor = document.getElementById("full-plan-badge");
      if (!anchor) return;

      const containerRect = scrollContainer.getBoundingClientRect();
      const anchorRect = anchor.getBoundingClientRect();

      // Switch when the 50% off pill scrolls past the sticky CTA area
      const isPast = anchorRect.bottom < containerRect.bottom;

      if (isPast !== prevValue.current) {
        prevValue.current = isPast;
        // Bounce: scale down, swap text, bounce back up
        setTransitioning(true);
        setTimeout(() => {
          setPastBuyNow(isPast);
          setTimeout(() => setTransitioning(false), 50);
        }, 150);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [currentScreen]);

  return (
    <div className="max-w-md mx-auto">
      {/* Screen label */}
      <div className="text-center py-3">
        <span className="text-xs font-mono text-gray-400 bg-white/10 px-3 py-1 rounded-full">
          {currentScreen === "signup" && "1/4 — Signup"}
          {currentScreen === "plan" && !showCheckout && "2/4 — Plan Page"}
          {currentScreen === "plan" && showCheckout && "3/4 — Payment"}
          {currentScreen === "success" && "4/4 — Success"}
        </span>
      </div>

      {/* Phone-ish frame for web */}
      <div className="mx-4 relative max-h-[812px]">
        <div ref={scrollRef} className="overflow-y-auto overflow-x-hidden shadow-[0_0_50px_rgba(255,255,255,0.12)] border border-gray-200 bg-white max-h-[812px] phone-scroll">
          {currentScreen === "signup" && <SignupScreen onNavigate={navigate} />}
          {currentScreen === "plan" && <PlanPage onNavigate={navigate} />}
          {currentScreen === "success" && <SuccessScreen onNavigate={navigate} variant={successVariant} onSwitchToApp={onSwitchToApp} />}
        </div>

        {/* CTA — absolutely positioned over the phone frame bottom, always overlaps content */}
        {currentScreen === "plan" && !showCheckout && (
          <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
            <div
              className="absolute inset-0 backdrop-blur-md"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent calc(100% - 34px), black 100%)',
                maskImage: 'linear-gradient(to bottom, transparent calc(100% - 34px), black 100%)',
              }}
            />
            <div
              className="relative px-4 pt-6 pb-3 pointer-events-auto"
              style={{
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: transitioning ? 'scale(0.85)' : 'scale(1)',
              }}
            >
              <Button variant="orange-complex" fullWidth onClick={() => navigate("checkout")}>
                {pastBuyNow ? "Buy now" : "Get your first vet call on us"}
              </Button>
            </div>
          </div>
        )}

        {/* Payment bottom sheet — overlays the plan page */}
        <AnimatePresence>
          {showCheckout && (
            <CardVerifyScreen onNavigate={navigate} variant={pastBuyNow ? "buy-now" : "free-call"} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
