import { useState } from "react";
import { Bell, MapPin, MessageCircle } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { OrangeButton } from "../components/OrangeButton";
import { motion, AnimatePresence } from "framer-motion";

interface PermissionsScreenProps {
  onNext: () => void;
}

type DialogStep = "none" | "notifications" | "location" | "done";

function IOSDialog({
  title,
  message,
  buttons,
}: {
  title: string;
  message: string;
  buttons: { label: string; bold?: boolean; onClick: () => void }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.75 }}
        transition={{
          enter: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
          opacity: { duration: 0.2 },
          scale: { type: "spring", stiffness: 500, damping: 25, mass: 0.8 },
        }}
        className="bg-[#f2f2f7]/[0.97] backdrop-blur-xl rounded-[14px] w-[270px] overflow-hidden"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
      >
        {/* Content */}
        <div className="px-4 pt-5 pb-4 text-center">
          <p
            className="text-[17px] text-black leading-snug"
            style={{ fontFamily: "system-ui", fontWeight: 600 }}
          >
            {title}
          </p>
          <p
            className="text-[13px] text-black/60 mt-1 leading-snug"
            style={{ fontFamily: "system-ui" }}
          >
            {message}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/20" />

        {/* Buttons */}
        <div
          className={
            buttons.length === 2
              ? "flex divide-x divide-black/20"
              : "flex flex-col divide-y divide-black/20"
          }
        >
          {buttons.map((btn) => (
            <button
              key={btn.label}
              onClick={btn.onClick}
              className="flex-1 py-[11px] text-center text-[17px] text-[#007AFF] active:bg-black/5 transition-colors"
              style={{
                fontFamily: "system-ui",
                fontWeight: btn.bold ? 600 : 400,
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PermissionsScreen({ onNext }: PermissionsScreenProps) {
  const [dialogStep, setDialogStep] = useState<DialogStep>("none");

  const handleContinue = () => {
    setDialogStep("notifications");
  };

  const handleNotificationResponse = () => {
    setDialogStep("none");
    setTimeout(() => setDialogStep("location"), 350);
  };

  const handleLocationResponse = () => {
    setDialogStep("done");
    setTimeout(onNext, 350);
  };

  return (
    <div className="min-h-full flex flex-col relative bg-black">
      {/* Full-bleed cat background */}
      <img
        src="/cat-sunglasses.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Status bar */}
      <div className="relative z-10">
        <StatusBar light />
      </div>

      {/* Spacer to push content down */}
      <div className="flex-1" />

      {/* Bottom content area with dark gradient */}
      <div className="relative z-10">
        {/* Gradient overlay fading from transparent to dark */}
        <div
          className="absolute inset-0 -top-48"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(10,3,0,0.7) 40%, rgba(10,3,0,0.95) 70%, #0A0300 100%)",
          }}
        />

        <div className="relative z-10 px-6 pb-10 pt-4 space-y-5">
          {/* Title */}
          <h1
            className="font-dynapuff font-bold text-[28px] text-white leading-tight text-center"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            Enable these for the
            <br />
            best experience
          </h1>

          {/* Permission rows — outer card at 5% */}
          <div className="bg-white/5 p-3 space-y-3" style={{ borderRadius: 40 }}>
            {/* Notifications — inner card at 7% */}
            <div className="bg-white/[0.07] p-4 flex items-center gap-4" style={{ borderRadius: 66 }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0.05) 70%, transparent 100%)",
                }}
              >
                <Bell className="w-6 h-6 text-green-500" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[15px] text-white">
                  Notifications
                </p>
                <p className="text-[13px] text-white/50">
                  Know when your vet is ready
                </p>
              </div>
            </div>

            {/* Location — inner card at 7% */}
            <div className="bg-white/[0.07] p-4 flex items-center gap-4" style={{ borderRadius: 66 }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.05) 70%, transparent 100%)",
                }}
              >
                <MapPin className="w-6 h-6 text-blue-500" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[15px] text-white">Location</p>
                <p className="text-[13px] text-white/50">
                  Find vets available in your area
                </p>
              </div>
            </div>
          </div>

          {/* Continue button + Mochi */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <OrangeButton onClick={handleContinue}>Continue</OrangeButton>
            </div>
            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-white/70" />
            </button>
          </div>
        </div>
      </div>

      {/* iOS native permission dialogs */}
      <AnimatePresence mode="wait">
        {dialogStep === "notifications" && (
          <IOSDialog
            title={'"Meow Mobile" Would Like to Send You Notifications'}
            message="Notifications may include alerts, sounds, and icon badges. These can be configured in Settings."
            buttons={[
              { label: "Don\u2019t Allow", onClick: handleNotificationResponse },
              { label: "Allow", bold: true, onClick: handleNotificationResponse },
            ]}
          />
        )}

        {dialogStep === "location" && (
          <IOSDialog
            title={'Allow "Meow Mobile" to use your location?'}
            message="Your location is used to find vets available in your area."
            buttons={[
              { label: "Allow While Using App", bold: true, onClick: handleLocationResponse },
              { label: "Allow Once", onClick: handleLocationResponse },
              { label: "Don\u2019t Allow", onClick: handleLocationResponse },
            ]}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
