import { Play } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BaseDrawer } from "../components/BaseDrawer";

interface PrepScreenProps {
  onNext: () => void;
  onSkip: () => void;
}

export function PrepScreen({ onNext, onSkip }: PrepScreenProps) {
  return (
    <div className="min-h-full bg-white flex flex-col relative">
      <StatusBar />

      {/* Background — simulated home screen behind the drawer */}
      <div className="flex-1 flex flex-col items-center pt-16 px-6">
        <img
          src="/meow-logo.png"
          alt="Meow Mobile"
          className="h-8 w-auto opacity-20"
        />
        <div className="mt-6 w-full space-y-3 opacity-10">
          <div className="h-12 bg-gray-300 rounded-xl" />
          <div className="h-24 bg-gray-200 rounded-xl" />
          <div className="h-16 bg-gray-200 rounded-xl" />
        </div>
      </div>

      {/* Tutorial bottom sheet */}
      <BaseDrawer open={true} onClose={onSkip} maxHeight="85%" flush hideHandle noScroll>
        <div className="flex flex-col items-center gap-3 pt-10 pb-3">
          {/* Meow Mobile logo */}
          <div className="sticky top-0 z-10 bg-white w-full flex justify-center pt-2 pb-1">
            <div
              aria-label="Meow Mobile"
              className="h-16 w-48"
              style={{
                backgroundColor: "#E87C00",
                WebkitMaskImage: "url(/logo-black.png)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: "url(/logo-black.png)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
          </div>

          {/* Video container */}
          <div
            className="relative overflow-hidden bg-gray-100 mx-auto rounded-[34px]"
            style={{ width: 320, height: 420 }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              {/* Play button */}
              <button
                onClick={onNext}
                className="w-16 h-16 rounded-full bg-black/[0.21] backdrop-blur-sm flex items-center justify-center hover:bg-black/30 transition-colors"
              >
                <svg width="24" height="28" viewBox="0 0 24 28" fill="white" className="ml-1">
                  <path d="M22 11.27a2 2 0 0 1 0 3.46L4 24.93a2 2 0 0 1-3-1.73V2.8A2 2 0 0 1 4 1.07l18 10.2Z" rx="2" />
                </svg>
              </button>
              <p className="text-gray-400 text-sm">Vet care tutorial</p>
            </div>
          </div>

          {/* Skip video */}
          <button
            onClick={onSkip}
            className="py-1 px-8 text-gray-400/80 font-semibold text-base hover:text-gray-500 transition-colors flex-shrink-0"
          >
            Skip video
          </button>
        </div>
      </BaseDrawer>
    </div>
  );
}
