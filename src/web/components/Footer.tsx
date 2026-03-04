import { useRef, useEffect, useState } from "react";
import { Headset, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          setIsLogoVisible(true);
        } else {
          setIsLogoVisible(false);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="mt-8 text-center overflow-hidden"
      style={{ background: "hsl(35, 55%, 8%)" }}
    >
      <div className="px-6 pt-12 pb-0 flex flex-col">
        <div>
          {/* Reach us at */}
          <p className="text-white/50 text-[15px] mb-4">Reach us at</p>

          {/* Social icons — larger, no circle bg */}
          <div className="flex justify-center gap-6 mb-10">
            <a href="#" className="text-white/40 hover:opacity-70 transition-opacity">
              <Headset className="w-8 h-8" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/40 hover:opacity-70 transition-opacity">
              <Instagram className="w-8 h-8" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/40 hover:opacity-70 transition-opacity">
              <Facebook className="w-8 h-8" strokeWidth={1.5} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-[14px] mb-6">
            Copyright ©2025 Meowmobile. All rights reserved.
          </p>

          {/* Legal links — row 1 */}
          <div className="flex justify-center gap-8 mb-2">
            <a href="#" className="text-white/50 text-[14px] hover:opacity-70 transition-opacity">
              Terms &amp; Conditions
            </a>
            <a href="#" className="text-white/50 text-[14px] hover:opacity-70 transition-opacity">
              Privacy Policy
            </a>
          </div>

          {/* Legal links — row 2 */}
          <p className="text-white/50 text-[14px] mb-4">
            Do Not Sell My Personal Information
          </p>
        </div>

        {/* Large logo wordmark — full logo, sticky CTA overlaps bottom */}
        <div className="leading-[0]">
          <img
            src="/logo-white.svg"
            alt="Meow Mobile"
            className={`w-[355px] h-auto mx-auto block transition-all duration-1000 ease-in-out ${
              isLogoVisible ? "translate-y-0" : "translate-y-56"
            }`}
          />
        </div>
      </div>
    </footer>
  );
}
