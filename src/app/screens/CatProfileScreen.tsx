import { useState, useRef, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OrangeButton } from "../components/OrangeButton";
import { CatAvatar } from "../components/CatAvatar";
import type { CatProfile } from "../AppPrototype";

const catBreeds = [
  "Siamese cat",
  "British Shorthair",
  "Maine Coon",
  "Persian cat",
  "Ragdoll",
  "Sphynx cat",
  "Bengal",
  "Abyssinian",
  "Scottish Fold",
  "Russian Blue",
  "Norwegian Forest",
  "Burmese",
  "Devon Rex",
  "Exotic Shorthair",
  "Himalayan",
  "Domestic Shorthair",
  "Mixed Cat",
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const ITEM_HEIGHT = 40;
const VISIBLE_COUNT = 5;
const WHEEL_HEIGHT = ITEM_HEIGHT * VISIBLE_COUNT;

interface CatProfileScreenProps {
  onNext: () => void;
  catProfile: CatProfile;
  setCatProfile: (p: CatProfile) => void;
}

export function CatProfileScreen({ onNext, catProfile, setCatProfile }: CatProfileScreenProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState(catProfile.name);
  const [mm, setMm] = useState(catProfile.dob.mm);
  const [dd, setDd] = useState(catProfile.dob.dd);
  const [yyyy, setYyyy] = useState(catProfile.dob.yyyy);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(catProfile.breed);
  const [hasPhoto, setHasPhoto] = useState(catProfile.hasPhoto);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [showAlbumPicker, setShowAlbumPicker] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(catProfile.photoSrc);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Sync local state up to parent
  useEffect(() => {
    setCatProfile({ name, breed: selectedBreed, dob: { mm, dd, yyyy }, hasPhoto, photoSrc: selectedPhoto });
  }, [name, mm, dd, yyyy, selectedBreed, hasPhoto, selectedPhoto]);

  const handleDateDone = (month: number, day: number, year: number) => {
    setMm(String(month).padStart(2, "0"));
    setDd(String(day).padStart(2, "0"));
    setYyyy(String(year));
    setShowDatePicker(false);
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else {
      onNext();
    }
  };

  return (
    <div className="h-full flex flex-col relative overflow-hidden bg-black">
      {/* ── Header: background photo + logo ── */}
      <div className="relative flex-shrink-0" style={{ height: 190 }}>
        <img
          src="/onboarding-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_50%]"
        />
        {/* Fade image to black at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black z-[1]" />
        {/* Back button — step 2 only */}
        {step === 2 && (
          <button
            onClick={() => setStep(1)}
            className="absolute top-12 left-4 z-20 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}
        {/* White logo on photo */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pb-2">
          <img src="/logo-white.svg" alt="Meow Mobile" className="h-16 w-auto drop-shadow-lg" />
        </div>
      </div>

      {/* ── White content card ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 280 }}
          className="absolute left-0 right-0 bottom-0 bg-white rounded-t-[28px] z-10 flex flex-col"
          style={{ top: 185 }}
        >
          {step === 1 ? (
            <Step1Content
              hasPhoto={hasPhoto}
              photoSrc={selectedPhoto}
              onPhotoTap={() => setShowImagePicker(true)}
              name={name}
              setName={setName}
              mm={mm}
              dd={dd}
              yyyy={yyyy}
              onDobTap={() => setShowDatePicker(true)}
            />
          ) : (
            <Step2Content
              name={name}
              hasPhoto={hasPhoto}
              photoSrc={selectedPhoto}
              selectedBreed={selectedBreed}
              setSelectedBreed={setSelectedBreed}
            />
          )}
          {/* ── Bottom bar ── */}
          <div className="flex-shrink-0 px-5 pb-10 pt-2">
            <OrangeButton onClick={handleContinue}>Continue</OrangeButton>
          </div>
          {/* White extension to prevent gap during spring bounce */}
          <div className="absolute left-0 right-0 top-full h-[500px] bg-white" />
        </motion.div>
      </AnimatePresence>

      {/* ── iOS Image Picker Alert ── */}
      {showImagePicker && (
        <ImagePickerAlert
          onSelectAlbum={() => {
            setShowImagePicker(false);
            setShowAlbumPicker(true);
          }}
          onTakePhoto={() => {
            setHasPhoto(true);
            setSelectedPhoto("/cat-stock-3.jpg");
            setShowImagePicker(false);
          }}
          onCancel={() => setShowImagePicker(false)}
        />
      )}

      {/* ── iOS Album Photo Picker ── */}
      <AnimatePresence>
        {showAlbumPicker && (
          <AlbumPicker
            onSelect={(photo) => {
              setSelectedPhoto(photo);
              setHasPhoto(true);
              setShowAlbumPicker(false);
            }}
            onCancel={() => setShowAlbumPicker(false)}
          />
        )}
      </AnimatePresence>

      {/* ── iOS Date Picker ── */}
      {showDatePicker && (
        <DatePickerDrawer
          initialMonth={mm ? parseInt(mm) : 2}
          initialDay={dd ? parseInt(dd) : 26}
          initialYear={yyyy ? parseInt(yyyy) : 2024}
          onDone={handleDateDone}
          onCancel={() => setShowDatePicker(false)}
        />
      )}
    </div>
  );
}

/* ─────────────── Step 1: Photo, Name, DOB ─────────────── */

function Step1Content({
  hasPhoto,
  photoSrc,
  onPhotoTap,
  name,
  setName,
  mm,
  dd,
  yyyy,
  onDobTap,
}: {
  hasPhoto: boolean;
  photoSrc: string | null;
  onPhotoTap: () => void;
  name: string;
  setName: (v: string) => void;
  mm: string;
  dd: string;
  yyyy: string;
  onDobTap: () => void;
}) {
  return (
    <div className="flex-1 overflow-y-auto px-6 pt-6">
      {/* Step indicator */}
      <StepIndicator step={1} total={2} />
      <h2 className="font-bold text-xl text-black text-center mb-6">
        Add your furry friend
      </h2>

      {/* Cat photo placeholder */}
      <div className="flex justify-center mb-6">
        <button onClick={onPhotoTap}>
          <CatAvatar size={172} photoSrc={hasPhoto ? photoSrc : null} />
        </button>
      </div>

      {/* Name input */}
      <div className="flex justify-center mb-5">
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            maxLength={24}
            className="text-[28px] font-dynapuff font-medium text-center text-gray-800 placeholder:text-gray-300 outline-none border-none bg-transparent w-52 caret-orange-500"
          />
        </div>
      </div>

      {/* DOB — tappable pills */}
      <button
        onClick={onDobTap}
        className="flex items-center justify-center gap-2 mx-auto"
      >
        <span className="text-gray-500 text-sm font-medium">DOB</span>
        <div className="flex gap-1.5">
          <span className={`w-12 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium ${mm ? "text-gray-600" : "text-gray-400"}`}>
            {mm || "MM"}
          </span>
          <span className={`w-12 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium ${dd ? "text-gray-600" : "text-gray-400"}`}>
            {dd || "DD"}
          </span>
          <span className={`w-14 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium ${yyyy ? "text-gray-600" : "text-gray-400"}`}>
            {yyyy || "YYYY"}
          </span>
        </div>
      </button>
    </div>
  );
}

/* ─────────────── Step 2: Breed Selection ─────────────── */

function Step2Content({
  name,
  hasPhoto,
  photoSrc,
  selectedBreed,
  setSelectedBreed,
}: {
  name: string;
  hasPhoto: boolean;
  photoSrc: string | null;
  selectedBreed: string | null;
  setSelectedBreed: (v: string | null) => void;
}) {
  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Fixed header — stays put while breeds scroll */}
      <div className="flex-shrink-0 px-6 pt-6 pb-2 bg-white relative z-10">
        {/* Step indicator */}
        <StepIndicator step={2} total={2} />
        <h2 className="font-bold text-xl text-black text-center mb-4">
          What breed is {name || "your cat"}?
        </h2>

        {/* Small cat avatar */}
        <div className="flex justify-center">
          <CatAvatar size={100} photoSrc={hasPhoto ? photoSrc : null} />
        </div>
      </div>

      {/* Scrollable breed list — pills disappear behind the fixed header */}
      <div className="flex-1 relative min-h-0">
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/60 to-transparent z-10 pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/60 to-transparent z-10 pointer-events-none" />
        <div className="h-full overflow-y-auto px-6">
        <div className="flex flex-col items-center gap-3 pt-3 pb-3">
          {catBreeds.map((breed) => (
            <button
              key={breed}
              onClick={() =>
                setSelectedBreed(selectedBreed === breed ? null : breed)
              }
              className={`w-[220px] h-12 rounded-full flex items-center justify-center transition-all text-base font-dynapuff leading-tight ${
                selectedBreed === breed
                  ? "border-2 border-orange-400 bg-orange-50 text-orange-500"
                  : "border-2 border-transparent bg-neutral-100 text-gray-700/60"
              }`}
            >
              {breed}
            </button>
          ))}
        </div>

        {/* Footer text */}
        <p className="text-gray-400 text-sm text-center mt-2 mb-3 italic">
          We'll tailor tips, reminders, and vet care for your cat
        </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Step Indicator ─────────────── */

function StepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex flex-col items-center mb-3">
      <span className="font-dynapuff text-orange-500 font-bold text-base">
        {step} of {total}
      </span>
      <svg width="52" height="20" viewBox="0 0 62 41" fill="none" className="-mt-2">
        <path
          d="M1.75755 12.4025C8.35397 20.8865 15.2182 20.1791 28.7742 21.2355C42.3303 22.2919 35.8186 33.2199 29.0302 28.8614C22.2418 24.503 38.7091 12.9036 61.556 26.0814"
          stroke="#E87C00"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* ─────────────── iOS Image Picker Alert ─────────────── */

function ImagePickerAlert({
  onSelectAlbum,
  onTakePhoto,
  onCancel,
}: {
  onSelectAlbum: () => void;
  onTakePhoto: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center pb-3">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onCancel} />

      {/* Alert content */}
      <div className="relative z-10 w-[calc(100%-24px)] flex flex-col gap-2">
        {/* Main action group */}
        <div className="bg-[#ECECEC]/95 backdrop-blur-xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="px-4 pt-4 pb-3 text-center">
            <p className="text-sm font-semibold text-black">Select image</p>
            <p className="text-xs text-gray-500 mt-0.5">
              Please choose how to get the image
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-300/60" />

          {/* Select from album */}
          <button
            onClick={onSelectAlbum}
            className="w-full py-3 text-center text-[17px] text-black font-normal hover:bg-black/5 active:bg-black/10 transition-colors"
          >
            Select from album
          </button>

          {/* Divider */}
          <div className="h-px bg-gray-300/60" />

          {/* Take a photo */}
          <button
            onClick={onTakePhoto}
            className="w-full py-3 text-center text-[17px] text-black font-normal hover:bg-black/5 active:bg-black/10 transition-colors"
          >
            Take a photo
          </button>
        </div>

        {/* Cancel button — separate card */}
        <button
          onClick={onCancel}
          className="w-full py-3 bg-white/95 backdrop-blur-xl rounded-2xl text-center text-[17px] text-black font-semibold hover:bg-white/80 active:bg-white/70 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

/* ─────────────── iOS Album Photo Picker ─────────────── */

const ALBUM_PHOTOS = [
  "/cat-stock-1.jpg", "/cat-stock-2.jpg", "/cat-stock-3.jpg", "/cat-stock-4.jpg", "/cat-stock-5.jpg",
  "/cat-stock-3.jpg", "/cat-stock-1.jpg", "/cat-stock-4.jpg", "/cat-stock-2.jpg",
  "/cat-stock-5.jpg", "/cat-stock-3.jpg", "/cat-stock-1.jpg", "/cat-stock-4.jpg", "/cat-stock-2.jpg",
  "/cat-stock-5.jpg", "/cat-stock-1.jpg", "/cat-stock-3.jpg", "/cat-stock-2.jpg",
];

function AlbumPicker({
  onSelect,
  onCancel,
}: {
  onSelect: (photo: string) => void;
  onCancel: () => void;
}) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="absolute inset-0 z-50 bg-[#f2f2f7] flex flex-col"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* Nav bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2 bg-[#f9f9f9] border-b border-gray-200">
        <button onClick={onCancel} className="text-[#007AFF] text-[17px]">
          Cancel
        </button>
        <span className="text-[17px] font-semibold text-black">Recents</span>
        <div className="w-14" />
      </div>

      {/* Photo grid */}
      <div className="flex-1 overflow-y-auto p-[2px]">
        <div className="grid grid-cols-3 gap-[2px]">
          {ALBUM_PHOTOS.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(photo)}
              className="relative aspect-square overflow-hidden active:opacity-70 transition-opacity"
            >
              <img
                src={photo}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────── iOS Date Picker Drawer ─────────────── */

function DatePickerDrawer({
  initialMonth,
  initialDay,
  initialYear,
  onDone,
  onCancel,
}: {
  initialMonth: number;
  initialDay: number;
  initialYear: number;
  onDone: (month: number, day: number, year: number) => void;
  onCancel: () => void;
}) {
  const [month, setMonth] = useState(initialMonth);
  const [day, setDay] = useState(initialDay);
  const [year, setYear] = useState(initialYear);

  const dayItems = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const currentYear = 2026;
  const yearStart = currentYear - 25;
  const yearItems = Array.from({ length: 30 }, (_, i) => String(yearStart + i));

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center">
      <style dangerouslySetInnerHTML={{ __html: `.wheel-col::-webkit-scrollbar { display: none; }` }} />
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onCancel} />

      {/* Picker card */}
      <div className="relative z-10 w-full bg-white rounded-t-2xl pb-6">
        {/* Handle */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 pb-3">
          <button onClick={onCancel} className="text-blue-500 text-[17px] w-16 text-left">
            Cancel
          </button>
          <span className="text-[17px] font-semibold text-gray-900">Select Date</span>
          <button
            onClick={() => onDone(month, day, year)}
            className="text-blue-500 text-[17px] font-semibold w-16 text-right"
          >
            Done
          </button>
        </div>

        {/* Wheels */}
        <div className="relative px-2">
          {/* Selection band */}
          <div
            className="absolute left-2 right-2 bg-gray-100 rounded-xl pointer-events-none"
            style={{ top: ITEM_HEIGHT * 2, height: ITEM_HEIGHT }}
          />
          <div className="flex">
            <WheelColumn
              items={MONTHS}
              selectedIndex={month - 1}
              onSelect={(i) => setMonth(i + 1)}
            />
            <WheelColumn
              items={dayItems}
              selectedIndex={day - 1}
              onSelect={(i) => setDay(i + 1)}
            />
            <WheelColumn
              items={yearItems}
              selectedIndex={year - yearStart}
              onSelect={(i) => setYear(yearStart + i)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Scroll Wheel Column ─────────────── */

function WheelColumn({
  items,
  selectedIndex,
  onSelect,
}: {
  items: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = selectedIndex * ITEM_HEIGHT;
    }
  }, []);

  const handleScroll = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (ref.current) {
        const index = Math.round(ref.current.scrollTop / ITEM_HEIGHT);
        const clamped = Math.max(0, Math.min(items.length - 1, index));
        onSelect(clamped);
      }
    }, 60);
  };

  return (
    <div className="relative flex-1" style={{ height: WHEEL_HEIGHT }}>
      <div
        ref={ref}
        onScroll={handleScroll}
        className="absolute inset-0 overflow-y-auto wheel-col"
        style={{
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        <div style={{ height: ITEM_HEIGHT * 2 }} />
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center text-[20px] text-gray-800 select-none"
            style={{
              height: ITEM_HEIGHT,
              scrollSnapAlign: "center",
            }}
          >
            {item}
          </div>
        ))}
        <div style={{ height: ITEM_HEIGHT * 2 }} />
      </div>
      {/* Top/bottom fade */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
    </div>
  );
}
