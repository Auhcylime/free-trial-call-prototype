import { useState } from "react";
import { StatusBar } from "../components/StatusBar";
import {
  ArrowLeft,
  History,
  MessageSquare,
  CreditCard,
  MapPin,
  ArrowRightLeft,
  Trash2,
  LogOut,
  ChevronRight,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import type { CatProfile } from "../AppPrototype";

interface ProfileScreenProps {
  onBack: () => void;
  userName: string;
  catProfiles: CatProfile[];
}

function MenuItem({
  icon: Icon,
  label,
  onClick,
  danger,
}: {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 py-3.5 px-1 text-left"
    >
      <div className="w-8 h-8 flex items-center justify-center">
        <Icon
          className={`w-5 h-5 ${danger ? "text-red-400" : "text-gray-400"}`}
          strokeWidth={1.5}
        />
      </div>
      <span className={`flex-1 text-[15px] ${danger ? "text-red-500" : "text-gray-800"}`}>
        {label}
      </span>
      <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={1.5} />
    </button>
  );
}

export function ProfileScreen({ onBack, userName, catProfiles }: ProfileScreenProps) {
  const displayName = userName || "Meow";
  const cat = catProfiles[0];
  const [showSignOut, setShowSignOut] = useState(false);

  return (
    <div className="min-h-full bg-gray-50 relative">
      <StatusBar />

      {/* Top gradient decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-36"
        style={{
          background: "linear-gradient(180deg, #FFF3E0 0%, #FAFAFA 100%)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center px-5 pt-2 pb-2">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* User avatar + info */}
      <div className="relative z-10 flex flex-col items-center gap-3 mb-5">
        {/* Avatar with cat overlay */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-2xl font-bold text-orange-500 overflow-hidden">
            {cat?.photoSrc ? (
              <img src={cat.photoSrc} className="w-full h-full object-cover" />
            ) : (
              displayName.charAt(0).toUpperCase()
            )}
          </div>
          {/* Cat avatar badge */}
          {cat?.name && (
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-white overflow-hidden flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-amber-100 flex items-center justify-center text-[10px]">
                🐱
              </div>
            </div>
          )}
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-900">{displayName}</p>
          <p className="text-sm text-gray-500">{displayName.toLowerCase()}@email.com</p>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 px-4 space-y-3 pb-6 overflow-y-auto" style={{ maxHeight: "calc(100% - 240px)" }}>
        {/* Data usage card */}
        <div className="bg-white rounded-[28px] border border-gray-200 p-1.5">
          <div className="relative bg-gray-50 rounded-full px-5 py-3.5 flex items-center gap-3 overflow-hidden">
            <div className="absolute left-2 top-1">
              <Smartphone className="w-10 h-10 text-orange-200" strokeWidth={1} />
            </div>
            <div className="pl-10 flex-1">
              <p className="text-[15px] font-bold text-gray-800">+1 (555) 867-5309</p>
              <p className="text-xs text-gray-500">Unlimited data, talk & text</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <p className="text-sm font-bold text-gray-800">0.3 GB data used</p>
          </div>
        </div>

        {/* Function menu */}
        <div className="bg-white rounded-3xl border border-gray-200 px-4">
          <MenuItem icon={History} label="Chat history" />
          <div className="border-t border-gray-100" />
          <MenuItem icon={MessageSquare} label="Vet consultation notes" />
        </div>

        {/* Account menu */}
        <div className="bg-white rounded-3xl border border-gray-200 px-4">
          <MenuItem icon={History} label="Payment history" />
          <div className="border-t border-gray-100" />
          <MenuItem icon={CreditCard} label="Manage payments" />
          <div className="border-t border-gray-100" />
          <MenuItem icon={MapPin} label="Update address" />
          <div className="border-t border-gray-100" />
          <MenuItem icon={ArrowRightLeft} label="Transfer number out" />
          <div className="border-t border-gray-100" />
          <MenuItem icon={Trash2} label="Terminate account" danger />
        </div>

        {/* Sign out */}
        <button
          onClick={() => setShowSignOut(true)}
          className="w-full flex items-center justify-center gap-2 py-3"
        >
          <LogOut className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
          <span className="text-[15px] text-gray-600">Sign out</span>
        </button>
      </div>

      {/* Sign out confirmation overlay */}
      {showSignOut && (
        <>
          <div className="absolute inset-0 bg-black/40 z-40" onClick={() => setShowSignOut(false)} />
          <div className="absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl px-6 py-8 space-y-4">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                <LogOut className="w-7 h-7 text-gray-500" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900">
              Sign out of Meow Mobile?
            </h3>
            <p className="text-sm text-gray-500 text-center">
              Your cat's wellness updates will pause for now. You can sign back in anytime.
            </p>
            <div className="space-y-2 pt-2">
              <button className="w-full py-3.5 rounded-2xl bg-gray-100 text-[15px] font-semibold text-gray-800">
                Sign out
              </button>
              <button
                onClick={() => setShowSignOut(false)}
                className="w-full py-3.5 rounded-2xl text-[15px] text-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
