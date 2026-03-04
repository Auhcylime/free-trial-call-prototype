import { useState, useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OrangeButton } from "./OrangeButton";
import { CatAvatar } from "./CatAvatar";
import type { CatProfile } from "../AppPrototype";

const CAT_BREEDS = [
  "Siamese cat", "British Shorthair", "Maine Coon", "Persian cat", "Ragdoll",
  "Sphynx cat", "Bengal", "Abyssinian", "Scottish Fold", "Russian Blue",
  "Norwegian Forest", "Burmese", "Devon Rex", "Exotic Shorthair", "Himalayan",
  "Domestic Shorthair", "Mixed Cat",
];

interface AddCatOverlayProps {
  show: boolean;
  onClose: () => void;
  onSave: (cat: CatProfile) => void;
}

export function AddCatOverlay({ show, onClose, onSave }: AddCatOverlayProps) {
  const [addCatStep, setAddCatStep] = useState<1 | 2>(1);
  const [newCatName, setNewCatName] = useState("");
  const [newCatBreed, setNewCatBreed] = useState<string | null>(null);
  const [newCatMm, setNewCatMm] = useState("");
  const [newCatDd, setNewCatDd] = useState("");
  const [newCatYyyy, setNewCatYyyy] = useState("");
  const [newCatHasPhoto, setNewCatHasPhoto] = useState(false);
  const [newCatSelectedPhoto, setNewCatSelectedPhoto] = useState<string | null>(null);
  const [showNewCatImagePicker, setShowNewCatImagePicker] = useState(false);
  const [showNewCatAlbumPicker, setShowNewCatAlbumPicker] = useState(false);
  const [showNewCatDatePicker, setShowNewCatDatePicker] = useState(false);

  const resetForm = () => {
    setAddCatStep(1);
    setNewCatName("");
    setNewCatBreed(null);
    setNewCatMm("");
    setNewCatDd("");
    setNewCatYyyy("");
    setNewCatHasPhoto(false);
    setNewCatSelectedPhoto(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleContinue = () => {
    if (addCatStep === 1) {
      if (!newCatName.trim()) return;
      setAddCatStep(2);
    } else {
      const newCat: CatProfile = {
        name: newCatName.trim(),
        breed: newCatBreed,
        dob: { mm: newCatMm, dd: newCatDd, yyyy: newCatYyyy },
        hasPhoto: newCatHasPhoto,
        photoSrc: newCatSelectedPhoto,
      };
      onSave(newCat);
      resetForm();
    }
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 32, stiffness: 350 }}
          className="absolute inset-0 z-50 bg-black flex flex-col overflow-hidden"
        >
          {/* Header area with background image */}
          <div className="relative flex-shrink-0" style={{ height: 140 }}>
            <img
              src="/onboarding-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[center_50%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black z-[1]" />
            {/* Back button */}
            <button
              onClick={addCatStep === 2 ? () => setAddCatStep(1) : handleClose}
              className="absolute left-4 z-20 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm top-1/2 -translate-y-1/2"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pb-2">
              <img src="/logo-white.svg" alt="Meow Mobile" className="h-12 w-auto drop-shadow-lg" />
            </div>
          </div>

          {/* White content card */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300, delay: 0.15 }}
            className="flex-1 bg-white rounded-t-[28px] -mt-3 relative z-10 flex flex-col min-h-0"
          >
            {addCatStep === 1 ? (
              /* Step 1: Photo, Name, DOB */
              <div className="flex-1 overflow-y-auto px-6 pt-6">
                <div className="flex flex-col items-center mb-3">
                  <span className="font-dynapuff text-orange-500 font-bold text-base">1 of 2</span>
                  <svg width="52" height="20" viewBox="0 0 62 41" fill="none" className="-mt-2">
                    <path d="M1.75755 12.4025C8.35397 20.8865 15.2182 20.1791 28.7742 21.2355C42.3303 22.2919 35.8186 33.2199 29.0302 28.8614C22.2418 24.503 38.7091 12.9036 61.556 26.0814" stroke="#E87C00" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="font-bold text-xl text-black text-center mb-6">Add your furry friend</h2>

                {/* Cat photo */}
                <div className="flex justify-center mb-6">
                  <button onClick={() => setShowNewCatImagePicker(true)}>
                    <CatAvatar size={172} photoSrc={newCatHasPhoto ? newCatSelectedPhoto : null} />
                  </button>
                </div>

                {/* Name input */}
                <div className="flex justify-center mb-5">
                  <input
                    type="text"
                    value={newCatName}
                    onChange={(e) => setNewCatName(e.target.value)}
                    placeholder="Name"
                    maxLength={24}
                    className="text-[28px] font-dynapuff font-medium text-center text-gray-800 placeholder:text-gray-300 outline-none border-none bg-transparent w-52 caret-orange-500"
                  />
                </div>

                {/* DOB pills */}
                <button onClick={() => setShowNewCatDatePicker(true)} className="flex items-center justify-center gap-2 mx-auto">
                  <span className="text-gray-500 text-sm font-medium">DOB</span>
                  <div className="flex gap-1.5">
                    <span className={`w-12 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium ${newCatMm ? "text-gray-600" : "text-gray-400"}`}>
                      {newCatMm || "MM"}
                    </span>
                    <span className={`w-12 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium ${newCatDd ? "text-gray-600" : "text-gray-400"}`}>
                      {newCatDd || "DD"}
                    </span>
                    <span className={`w-14 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium ${newCatYyyy ? "text-gray-600" : "text-gray-400"}`}>
                      {newCatYyyy || "YYYY"}
                    </span>
                  </div>
                </button>
              </div>
            ) : (
              /* Step 2: Breed Selection */
              <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-shrink-0 px-6 pt-6 pb-2 bg-white relative z-10">
                  <div className="flex flex-col items-center mb-3">
                    <span className="font-dynapuff text-orange-500 font-bold text-base">2 of 2</span>
                    <svg width="52" height="20" viewBox="0 0 62 41" fill="none" className="-mt-2">
                      <path d="M1.75755 12.4025C8.35397 20.8865 15.2182 20.1791 28.7742 21.2355C42.3303 22.2919 35.8186 33.2199 29.0302 28.8614C22.2418 24.503 38.7091 12.9036 61.556 26.0814" stroke="#E87C00" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h2 className="font-bold text-xl text-black text-center mb-4">
                    What breed is {newCatName || "your cat"}?
                  </h2>
                  <div className="flex justify-center">
                    <CatAvatar size={100} photoSrc={newCatHasPhoto ? newCatSelectedPhoto : null} />
                  </div>
                </div>

                <div className="flex-1 relative min-h-0">
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/60 to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/60 to-transparent z-10 pointer-events-none" />
                  <div className="h-full overflow-y-auto px-6">
                    <div className="flex flex-col items-center gap-3 pt-3 pb-3">
                      {CAT_BREEDS.map((breed) => (
                        <button
                          key={breed}
                          onClick={() => setNewCatBreed(newCatBreed === breed ? null : breed)}
                          className={`w-[220px] h-12 rounded-full flex items-center justify-center transition-all text-base font-dynapuff leading-tight ${
                            newCatBreed === breed
                              ? "border-2 border-orange-400 bg-orange-50 text-orange-500"
                              : "border-2 border-transparent bg-neutral-100 text-gray-700/60"
                          }`}
                        >
                          {breed}
                        </button>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm text-center mt-2 mb-3 italic">
                      We'll tailor tips, reminders, and vet care for your cat
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom bar */}
            <div className="flex-shrink-0 px-5 pb-10 pt-2">
              <OrangeButton onClick={handleContinue} disabled={addCatStep === 1 && !newCatName.trim()}>Continue</OrangeButton>
            </div>
          </motion.div>

          {/* Image picker alert */}
          {showNewCatImagePicker && (
            <div className="absolute inset-0 z-50 flex items-end justify-center pb-3">
              <div className="absolute inset-0 bg-black/30" onClick={() => setShowNewCatImagePicker(false)} />
              <div className="relative z-10 w-[calc(100%-24px)] flex flex-col gap-2">
                <div className="bg-[#ECECEC]/95 backdrop-blur-xl rounded-2xl overflow-hidden">
                  <div className="px-4 pt-4 pb-3 text-center">
                    <p className="text-sm font-semibold text-black">Select image</p>
                    <p className="text-xs text-gray-500 mt-0.5">Please choose how to get the image</p>
                  </div>
                  <div className="h-px bg-gray-300/60" />
                  <button onClick={() => { setShowNewCatImagePicker(false); setShowNewCatAlbumPicker(true); }} className="w-full py-3 text-center text-[17px] text-black font-normal hover:bg-black/5 active:bg-black/10 transition-colors">Select from album</button>
                  <div className="h-px bg-gray-300/60" />
                  <button onClick={() => { setNewCatSelectedPhoto("/cat-stock-3.jpg"); setNewCatHasPhoto(true); setShowNewCatImagePicker(false); }} className="w-full py-3 text-center text-[17px] text-black font-normal hover:bg-black/5 active:bg-black/10 transition-colors">Take a photo</button>
                </div>
                <button onClick={() => setShowNewCatImagePicker(false)} className="w-full py-3 bg-white/95 backdrop-blur-xl rounded-2xl text-center text-[17px] text-black font-semibold hover:bg-white/80 active:bg-white/70 transition-colors">Cancel</button>
              </div>
            </div>
          )}

          {/* Album photo picker */}
          <AnimatePresence>
            {showNewCatAlbumPicker && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="absolute inset-0 z-50 bg-[#f2f2f7] flex flex-col"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                <div className="flex items-center justify-between px-4 pt-3 pb-2 bg-[#f9f9f9] border-b border-gray-200">
                  <button onClick={() => setShowNewCatAlbumPicker(false)} className="text-[#007AFF] text-[17px]">Cancel</button>
                  <span className="text-[17px] font-semibold text-black">Recents</span>
                  <div className="w-14" />
                </div>
                <div className="flex-1 overflow-y-auto p-[2px]">
                  <div className="grid grid-cols-3 gap-[2px]">
                    {["/cat-stock-1.jpg", "/cat-stock-2.jpg", "/cat-stock-3.jpg", "/cat-stock-4.jpg", "/cat-stock-5.jpg",
                      "/cat-stock-3.jpg", "/cat-stock-1.jpg", "/cat-stock-4.jpg", "/cat-stock-2.jpg",
                      "/cat-stock-5.jpg", "/cat-stock-3.jpg", "/cat-stock-1.jpg", "/cat-stock-4.jpg", "/cat-stock-2.jpg",
                      "/cat-stock-5.jpg", "/cat-stock-1.jpg", "/cat-stock-3.jpg", "/cat-stock-2.jpg",
                    ].map((photo, idx) => (
                      <button
                        key={idx}
                        onClick={() => { setNewCatSelectedPhoto(photo); setNewCatHasPhoto(true); setShowNewCatAlbumPicker(false); }}
                        className="relative aspect-square overflow-hidden active:opacity-70 transition-opacity"
                      >
                        <img src={photo} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Date picker */}
          {showNewCatDatePicker && (
            <AddCatDatePicker
              initialMm={newCatMm}
              initialDd={newCatDd}
              initialYyyy={newCatYyyy}
              onDone={(mm, dd, yyyy) => { setNewCatMm(mm); setNewCatDd(dd); setNewCatYyyy(yyyy); setShowNewCatDatePicker(false); }}
              onCancel={() => setShowNewCatDatePicker(false)}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Date Picker ─── */

const AC_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const AC_ITEM_H = 40;
const AC_VISIBLE = 5;
const AC_WHEEL_H = AC_ITEM_H * AC_VISIBLE;

function AddCatDatePicker({
  initialMm, initialDd, initialYyyy, onDone, onCancel,
}: {
  initialMm: string; initialDd: string; initialYyyy: string;
  onDone: (mm: string, dd: string, yyyy: string) => void;
  onCancel: () => void;
}) {
  const [month, setMonth] = useState(initialMm ? parseInt(initialMm) : 2);
  const [day, setDay] = useState(initialDd ? parseInt(initialDd) : 26);
  const [year, setYear] = useState(initialYyyy ? parseInt(initialYyyy) : 2024);

  const dayItems = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const yearStart = 2001;
  const yearItems = Array.from({ length: 30 }, (_, i) => String(yearStart + i));

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center">
      <style dangerouslySetInnerHTML={{ __html: `.ac-wheel::-webkit-scrollbar { display: none; }` }} />
      <div className="absolute inset-0 bg-black/30" onClick={onCancel} />
      <div className="relative z-10 w-full bg-white rounded-t-2xl pb-6">
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>
        <div className="flex items-center justify-between px-4 pb-3">
          <button onClick={onCancel} className="text-blue-500 text-[17px] w-16 text-left">Cancel</button>
          <span className="text-[17px] font-semibold text-gray-900">Select Date</span>
          <button
            onClick={() => onDone(
              String(month).padStart(2, "0"),
              String(day).padStart(2, "0"),
              String(year),
            )}
            className="text-blue-500 text-[17px] font-semibold w-16 text-right"
          >Done</button>
        </div>
        <div className="relative px-2">
          <div className="absolute left-2 right-2 bg-gray-100 rounded-xl pointer-events-none" style={{ top: AC_ITEM_H * 2, height: AC_ITEM_H }} />
          <div className="flex">
            <ACWheel items={AC_MONTHS} selectedIndex={month - 1} onSelect={(i) => setMonth(i + 1)} />
            <ACWheel items={dayItems} selectedIndex={day - 1} onSelect={(i) => setDay(i + 1)} />
            <ACWheel items={yearItems} selectedIndex={year - yearStart} onSelect={(i) => setYear(yearStart + i)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ACWheel({ items, selectedIndex, onSelect }: { items: string[]; selectedIndex: number; onSelect: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = selectedIndex * AC_ITEM_H;
  }, []);

  const handleScroll = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (ref.current) {
        const index = Math.round(ref.current.scrollTop / AC_ITEM_H);
        onSelect(Math.max(0, Math.min(items.length - 1, index)));
      }
    }, 60);
  };

  return (
    <div className="relative flex-1" style={{ height: AC_WHEEL_H }}>
      <div
        ref={ref}
        onScroll={handleScroll}
        className="absolute inset-0 overflow-y-auto ac-wheel"
        style={{ scrollSnapType: "y mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
      >
        <div style={{ height: AC_ITEM_H * 2 }} />
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-center text-[20px] text-gray-800 select-none" style={{ height: AC_ITEM_H, scrollSnapAlign: "center" }}>
            {item}
          </div>
        ))}
        <div style={{ height: AC_ITEM_H * 2 }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
    </div>
  );
}
