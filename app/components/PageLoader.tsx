"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  loading: boolean;
};

export default function PageLoader({ loading }: Props) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
              }}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-red-600 text-4xl shadow-2xl"
            >
              📦
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-3xl font-extrabold text-red-600"
            >
              PN2B
            </motion.h2>

            <p className="mt-2 text-gray-500">
              Parcel Tracking
            </p>

            <div className="mt-8 h-2 w-52 overflow-hidden rounded-full bg-gray-200">

              <motion.div
                className="h-full rounded-full bg-red-600"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.3,
                  ease: "easeInOut",
                }}
              />

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}