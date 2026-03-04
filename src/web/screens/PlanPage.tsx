import { FeatureCard } from "../components/FeatureCard";
import { FullPlanCard } from "../components/FullPlanCard";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
interface PlanPageProps {
  onNavigate: (screen: string) => void;
}

export function PlanPage({ onNavigate }: PlanPageProps) {
  return (
    <div className="web-surface min-h-screen relative" style={{ background: "hsl(35, 55%, 8%)" }}>
      <div className="bg-white">
      {/* Header — production logo SVG, larger, more spacing */}
      <header className="px-5 pt-8 pb-6 flex items-center justify-center bg-white">
        <img src="/logo-white.svg" alt="Meow Mobile" className="h-12 w-auto invert" />
      </header>

      {/* Free plan tile */}
      <div className="px-10">
        <FeatureCard />
      </div>

      {/* Get perks / Get care background layer — overlaps free tile slightly */}
      <div className="relative -mt-8 z-10">
        <img
          src="/get-perks-bg.png"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* Section heading */}
      <div id="vet-speed-dial" className="px-4 pt-14 pb-4">
        <h2 className="font-young-serif text-[32px] text-[#1a1a1a] text-center leading-tight">
          Your Cat Deserves A<br />Vet On Speed Dial
        </h2>
      </div>

      {/* Full plan tile */}
      <div className="px-10">
        <FullPlanCard />
      </div>

      {/* FAQ */}
      <div className="px-4 pt-14 pb-6">
        <FAQ />
      </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}
