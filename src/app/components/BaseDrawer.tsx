import { motion, AnimatePresence } from "framer-motion";

interface BaseDrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxHeight?: string;
  /** Flush to bottom edge (no home-indicator offset) */
  flush?: boolean;
  /** Hide the drag handle */
  hideHandle?: boolean;
  /** Disable scrolling */
  noScroll?: boolean;
}

export function BaseDrawer({ open, onClose, children, maxHeight = "80%", flush = false, hideHandle = false, noScroll = false }: BaseDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30 z-40"
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`absolute left-0 right-0 bg-white rounded-t-3xl z-50 ${noScroll ? "overflow-hidden" : "overflow-y-auto"} ${flush ? "bottom-0" : "bottom-[34px]"}`}
            style={{ maxHeight }}
          >
            {/* Drag handle */}
            {!hideHandle && (
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-[6px] bg-gray-300 rounded-full" />
              </div>
            )}
            <div className="px-5 pb-6">{children}</div>
            {/* White extension to prevent gap during spring bounce */}
            <div className="absolute left-0 right-0 top-full h-40 bg-white" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
