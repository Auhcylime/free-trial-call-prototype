import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { PhoneFrame } from "./components/PhoneFrame";
import { BottomNavBar, type NavTab } from "./components/BottomNavBar";
import { LoginScreen } from "./screens/LoginScreen";
import { PermissionsScreen } from "./screens/PermissionsScreen";
import { CatProfileScreen } from "./screens/CatProfileScreen";
import { PrepScreen } from "./screens/PrepScreen";
import { PreCallScreen } from "./screens/PreCallScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { PostCallScreen } from "./screens/PostCallScreen";
import { DashboardPostCallScreen } from "./screens/DashboardPostCallScreen";
import { PostcallScreen2 } from "./screens/PostcallScreen2";
import { VetNotesScreen } from "./screens/VetNotesScreen";
import { NumberSelectScreen } from "./screens/NumberSelectScreen";
import { RewardsScreen } from "./screens/RewardsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ArticleDetailScreen } from "./screens/ArticleDetailScreen";
import type { ArticleData } from "./data/mochiArticles";

export interface CatProfile {
  name: string;
  breed: string | null;
  dob: { mm: string; dd: string; yyyy: string };
  hasPhoto: boolean;
  photoSrc: string | null;
}

const ALL_SCREENS = ["login", "permissions", "catprofile", "prep", "precall", "dashboard", "postcall", "postcall2", "numberselect", "vetnotes"] as const;
type Screen = (typeof ALL_SCREENS)[number];

const screenNames: Record<Screen, string> = {
  login: "Login",
  permissions: "Permissions",
  catprofile: "Pet Profile",
  prep: "Tutorial",
  precall: "Pre-Call",
  dashboard: "Postcall",
  postcall: "Precall",
  postcall2: "Postcall",
  numberselect: "Number Selection",
  vetnotes: "Vet Notes",
};

// Keep screenLabels for compatibility — dynamically generated from visibleScreens
const screenLabels = Object.fromEntries(
  ALL_SCREENS.map((s) => [s, `— ${screenNames[s]}`])
) as Record<Screen, string>;

const subScreenLabels: Record<string, string> = {
  rewards: "Rewards",
  profile: "Profile",
};

// Screens where the nav bar should be visible
const NAV_VISIBLE_SCREENS: Screen[] = ["precall", "dashboard", "postcall", "postcall2"];

interface AppPrototypeProps {
  extended: boolean;
  onExtendedChange: (value: boolean) => void;
}

export function AppPrototype({ extended, onExtendedChange }: AppPrototypeProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");
  const [activeTab, setActiveTab] = useState<NavTab>("home");
  const [userName, setUserName] = useState("");
  const [catProfiles, setCatProfiles] = useState<CatProfile[]>([
    { name: "", breed: null, dob: { mm: "", dd: "", yyyy: "" }, hasPhoto: false, photoSrc: null },
  ]);
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
  const [airvetDrawerRequested, setAirvetDrawerRequested] = useState(false);
  const [screenOverlayOpen, setScreenOverlayOpen] = useState(false);
  // Toggle ON: show precall + dashboard, hide postcall + postcall2
  // Toggle OFF: show postcall + postcall2, hide precall + dashboard
  const hiddenScreens: Screen[] = extended ? ["postcall", "postcall2"] : ["precall", "dashboard", "numberselect", "vetnotes"];
  const visibleScreens = ALL_SCREENS.filter((s) => !hiddenScreens.includes(s));

  const currentVisibleIndex = visibleScreens.indexOf(currentScreen);
  const canGoBack = currentVisibleIndex > 0;
  const canGoForward = currentVisibleIndex < visibleScreens.length - 1;

  const goBack = () => {
    if (canGoBack) setCurrentScreen(visibleScreens[currentVisibleIndex - 1]);
  };
  const goForward = () => {
    if (canGoForward) setCurrentScreen(visibleScreens[currentVisibleIndex + 1]);
  };

  // Show nav bar on precall/dashboard screen and when on rewards/profile tabs (hide when article or overlay is open)
  const showNavBar = !selectedArticle && !screenOverlayOpen && (NAV_VISIBLE_SCREENS.includes(currentScreen) || activeTab !== "home");

  // When switching to a non-home tab, stay on the current dashboard-like screen
  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === "home" && !NAV_VISIBLE_SCREENS.includes(currentScreen)) {
      setCurrentScreen(extended ? "precall" : "postcall");
    }
  };

  // When navigating to a different main screen, reset to home tab
  const navigateScreen = (screen: Screen) => {
    setCurrentScreen(screen);
    if (!NAV_VISIBLE_SCREENS.includes(screen)) {
      setActiveTab("home");
    }
  };

  const isOnSubScreen = activeTab !== "home";
  const isDark = !isOnSubScreen && (currentScreen === "login" || currentScreen === "permissions" || currentScreen === "numberselect");
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!showNav) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setShowNav(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showNav]);

  const displayLabel = isOnSubScreen
    ? subScreenLabels[activeTab]
    : `${currentVisibleIndex + 1}/${visibleScreens.length} — ${screenNames[currentScreen]}`;

  return (
    <div className="flex flex-col items-center">
      {/* Screen indicator — clickable, opens navigation menu */}
      <div className="relative text-center py-3" ref={navRef}>
        <button
          onClick={() => setShowNav((v) => !v)}
          className="text-xs font-mono text-gray-400 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors inline-flex items-center gap-1.5"
        >
          {displayLabel}
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${showNav ? "rotate-180" : ""}`}>
            <path d="M1 1l4 4 4-4" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {showNav && (
          <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 z-50 bg-white rounded-xl shadow-lg border border-gray-200 py-1 min-w-[200px]">
            {visibleScreens.map((s, i) => (
              <button
                key={s}
                onClick={() => { navigateScreen(s); setActiveTab("home"); setShowNav(false); }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-2 ${
                  !isOnSubScreen && s === currentScreen
                    ? "bg-orange-50 text-orange-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="w-5 text-center text-xs text-gray-400">{i + 1}</span>
                {screenNames[s]}
              </button>
            ))}
            <div className="border-t border-gray-100 my-1" />
            {(["rewards", "profile"] as const).map((s) => (
              <button
                key={s}
                onClick={() => { setActiveTab(s); setCurrentScreen(extended ? "precall" : "postcall"); setShowNav(false); }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-2 ${
                  activeTab === s
                    ? "bg-orange-50 text-orange-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="w-5 text-center text-xs text-gray-400">{s === "rewards" ? "🎁" : "⚙️"}</span>
                {subScreenLabels[s]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Phone frame */}
      <PhoneFrame
        dark={isDark}
        overlay={showNavBar ? (
          <BottomNavBar activeTab={activeTab} onTabChange={handleTabChange} />
        ) : undefined}
      >
        {/* Sub-screens (rewards/profile) overlay when active */}
        {isOnSubScreen && activeTab === "rewards" && (
          <RewardsScreen onBack={() => setActiveTab("home")} />
        )}
        {isOnSubScreen && activeTab === "profile" && (
          <ProfileScreen onBack={() => setActiveTab("home")} userName={userName} catProfiles={catProfiles} />
        )}

        {/* Main screens — hidden when sub-screen is active */}
        {!isOnSubScreen && currentScreen === "login" && (
          <LoginScreen onNext={goForward} onSelectAccount={setUserName} />
        )}
        {!isOnSubScreen && currentScreen === "permissions" && (
          <PermissionsScreen onNext={goForward} />
        )}
        {!isOnSubScreen && currentScreen === "catprofile" && (
          <CatProfileScreen
            onNext={goForward}
            catProfile={catProfiles[0]}
            setCatProfile={(p) => setCatProfiles((prev) => [p, ...prev.slice(1)])}
          />
        )}
        {!isOnSubScreen && currentScreen === "prep" && (
          <PrepScreen
            onNext={goForward}
            onSkip={goForward}
          />
        )}
        {!isOnSubScreen && currentScreen === "precall" && (
          <PreCallScreen
            onNext={() => navigateScreen("numberselect")}
            catProfiles={catProfiles}
            setCatProfiles={setCatProfiles}
            userName={userName}
            onArticleTap={setSelectedArticle}
            openAirvetDrawer={airvetDrawerRequested}
            onAirvetDrawerOpened={() => setAirvetDrawerRequested(false)}
            onOverlayChange={setScreenOverlayOpen}
          />
        )}
        {!isOnSubScreen && currentScreen === "dashboard" && (
          <DashboardScreen
            onNext={() => navigateScreen("numberselect")}
            catProfiles={catProfiles}
            setCatProfiles={setCatProfiles}
            userName={userName}
            onArticleTap={setSelectedArticle}
            openAirvetDrawer={airvetDrawerRequested}
            onAirvetDrawerOpened={() => setAirvetDrawerRequested(false)}
          />
        )}

        {/* Article detail overlay */}
        <AnimatePresence>
          {selectedArticle && (
            <ArticleDetailScreen
              article={selectedArticle}
              catProfiles={catProfiles}
              onBack={() => setSelectedArticle(null)}
              onArticleTap={setSelectedArticle}
              onVetCta={() => {
                setSelectedArticle(null);
                setAirvetDrawerRequested(true);
              }}
            />
          )}
        </AnimatePresence>
        {!isOnSubScreen && currentScreen === "numberselect" && (
          <NumberSelectScreen onNext={goForward} />
        )}
        {!isOnSubScreen && currentScreen === "postcall" && (
          <DashboardPostCallScreen
            onNext={goForward}
            catProfiles={catProfiles}
            setCatProfiles={setCatProfiles}
            userName={userName}
            onArticleTap={setSelectedArticle}
            openAirvetDrawer={airvetDrawerRequested}
            onAirvetDrawerOpened={() => setAirvetDrawerRequested(false)}
          />
        )}
        {!isOnSubScreen && currentScreen === "postcall2" && (
          <PostcallScreen2
            onNext={goForward}
            catProfiles={catProfiles}
            setCatProfiles={setCatProfiles}
            userName={userName}
            onArticleTap={setSelectedArticle}
            openAirvetDrawer={airvetDrawerRequested}
            onAirvetDrawerOpened={() => setAirvetDrawerRequested(false)}
          />
        )}
        {!isOnSubScreen && currentScreen === "vetnotes" && (
          <VetNotesScreen onBack={goBack} />
        )}
      </PhoneFrame>

      {/* Dot indicators — visual only, not interactive */}
      <div className="flex gap-2 mt-2">
        {visibleScreens.map((s) => (
          <div
            key={s}
            className={`h-2 rounded-full transition-all ${
              !isOnSubScreen && s === currentScreen ? "bg-orange-500 w-6" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>

      {/* Free call flow toggle */}
      <button
        onClick={() => onExtendedChange(!extended)}
        className="mt-4 flex items-center gap-2 text-xs text-gray-500 hover:text-gray-400 transition-colors"
      >
        <div
          className={`relative w-8 h-[18px] rounded-full transition-colors ${
            extended ? "bg-orange-500" : "bg-gray-600"
          }`}
        >
          <div
            className={`absolute top-[2px] w-[14px] h-[14px] rounded-full bg-white transition-transform ${
              extended ? "left-[15px]" : "left-[2px]"
            }`}
          />
        </div>
        <span className="font-mono">Extended</span>
      </button>
    </div>
  );
}
