import { motion } from 'motion/react';

export const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0e7d7]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-[#702a0c]/20 border-t-[#702a0c] rounded-full"
      />
    </div>
  );
};