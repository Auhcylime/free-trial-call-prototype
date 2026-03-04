import { motion } from "framer-motion";

interface MochiMessageProps {
  message: string;
}

export function MochiMessage({ message }: MochiMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex items-end gap-2"
    >
      {/* Cat avatar */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white text-lg shadow-md">
        🐱
      </div>
      {/* Bubble */}
      <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm max-w-[220px]">
        <p className="text-sm text-gray-700 leading-snug">{message}</p>
      </div>
    </motion.div>
  );
}
