import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, animate } from "framer-motion";
import { Check, Trash2 } from "lucide-react";
import type { CatProfile } from "../AppPrototype";

interface SwipeableCatRowProps {
  cat: CatProfile;
  index: number;
  displayName: string;
  isActive: boolean;
  canDelete: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

const REVEAL_WIDTH = 44;
const SNAP_THRESHOLD = 20;

export function SwipeableCatRow({
  cat,
  displayName,
  isActive,
  canDelete,
  onSelect,
  onDelete,
}: SwipeableCatRowProps) {
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const [dragged, setDragged] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function snapTo(target: number) {
    animate(x, target, { type: "spring", stiffness: 500, damping: 40 });
  }

  function close() {
    snapTo(0);
    setRevealed(false);
  }

  // Close the revealed trash icon when user clicks anywhere outside this row
  // Paused while the confirm popup is open
  useEffect(() => {
    if (!revealed || showConfirm) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Ignore clicks inside this row (the row button handles those)
      if (rowRef.current?.contains(target)) return;
      close();
    };
    document.addEventListener("mousedown", handler, true);
    return () => document.removeEventListener("mousedown", handler, true);
  }, [revealed, showConfirm]);

  return (
    <>
      <div ref={rowRef} className="relative overflow-hidden">
        {/* Trash icon — only rendered once user starts swiping or row is revealed */}
        {canDelete && (dragged || revealed) && (
          <div className="absolute inset-y-0 right-0 flex items-center justify-center" style={{ width: REVEAL_WIDTH }}>
            <button
              data-trash-btn
              onClick={(e) => {
                e.stopPropagation();
                setShowConfirm(true);
              }}
              className="flex items-center justify-center w-8 h-8 rounded-full"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          </div>
        )}

        {/* Foreground draggable row */}
        <motion.div
          style={{ x, touchAction: "pan-y" }}
          drag={canDelete ? "x" : false}
          dragConstraints={{ left: -REVEAL_WIDTH, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => {
            isDragging.current = true;
            setDragged(true);
          }}
          onDragEnd={(_, info) => {
            const offset = info.offset.x;
            if (offset < -SNAP_THRESHOLD) {
              snapTo(-REVEAL_WIDTH);
              setRevealed(true);
            } else {
              close();
            }
            setTimeout(() => {
              isDragging.current = false;
              setDragged(false);
            }, 50);
          }}
        >
          <button
            onClick={() => {
              if (dragged || isDragging.current) return;
              if (revealed) {
                close();
                return;
              }
              onSelect();
            }}
            className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left transition-colors ${
              isActive ? "bg-white/10" : "hover:bg-white/5 active:bg-white/10"
            }`}
            style={{ backgroundColor: "rgba(30,30,30,0.95)" }}
          >
            <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-600">
              {cat.photoSrc ? (
                <img src={cat.photoSrc} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-[10px] font-bold">
                  {displayName.charAt(0)}
                </div>
              )}
            </div>
            <span className={`text-[13px] font-medium ${isActive ? "text-orange-400" : "text-white"}`}>
              {displayName}
            </span>
            {isActive && (
              <Check className="w-3.5 h-3.5 text-orange-400 ml-auto" strokeWidth={2.5} />
            )}
          </button>
        </motion.div>
      </div>

      {/* Confirmation popup — portalled to document.body so it escapes
          the dropdown's framer-motion transforms and covers the whole screen */}
      {showConfirm && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={() => setShowConfirm(false)}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Dialog */}
          <div
            className="relative rounded-2xl px-6 pt-5 pb-4 w-[260px] text-center"
            style={{ backgroundColor: "#000000", backdropFilter: "blur(20px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Trash2 className="w-8 h-8 text-red-400 mx-auto mb-3" strokeWidth={1.5} />
            <p className="text-white text-[15px] font-semibold mb-1">Delete {displayName}?</p>
            <p className="text-white/50 text-[13px] mb-5">This can't be undone.</p>
            <div className="flex gap-2.5">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 h-10 rounded-full text-[13px] font-semibold text-white/70"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowConfirm(false);
                  onDelete();
                }}
                className="flex-1 h-10 rounded-full text-[13px] font-semibold text-white bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
