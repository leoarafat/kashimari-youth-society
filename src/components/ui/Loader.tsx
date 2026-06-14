import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { org } from "@/data/site";

/** Brief brand loading animation on first paint. */
export default function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-royal to-leaf font-display text-2xl font-700 text-white"
            >
              {org.shortName}
            </motion.div>
            <motion.div
              className="mx-auto mt-5 h-0.5 w-32 overflow-hidden rounded-full bg-white/15"
            >
              <motion.div
                className="h-full bg-ember"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
