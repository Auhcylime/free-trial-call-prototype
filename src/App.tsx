import { useState, useEffect } from "react";
import { WebPrototype } from "./web/WebPrototype";
import { AppPrototype } from "./app/AppPrototype";

type Surface = "web" | "app";

export default function App() {
  const [surface, setSurface] = useState<Surface>("app");
  const [extended, setExtended] = useState(false);

  // When toggle is turned off, force app view
  useEffect(() => {
    if (!extended) setSurface("app");
  }, [extended]);

  return (
    <div className="min-h-screen bg-[#1C1C1E]">
      {/* Surface toggle — only show when extended is on */}
      {extended && (
        <div className="sticky top-0 z-50 flex items-center justify-center gap-1 bg-[#1C1C1E]/90 backdrop-blur-md py-4 px-4">
          <div className="flex bg-white/10 rounded-full p-1">
            <button
              onClick={() => setSurface("web")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                surface === "web"
                  ? "bg-white/15 text-white"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setSurface("app")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                surface === "app"
                  ? "bg-white/15 text-white"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              App
            </button>
          </div>
        </div>
      )}

      {/* Active surface */}
      <div className="pb-12">
        {surface === "web" ? (
          <WebPrototype onSwitchToApp={() => setSurface("app")} />
        ) : (
          <AppPrototype extended={extended} onExtendedChange={setExtended} />
        )}
      </div>
    </div>
  );
}
