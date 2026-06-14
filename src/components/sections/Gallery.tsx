import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Section from "../ui/Section";
import { gallery } from "@/data/site";

export default function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <Section id="gallery" alt eyebrow="Photo Gallery"
      title="Moments from the field"
      intro="Glimpses of our campaigns, drives and community work. Click any photo to enlarge.">
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {gallery.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 4) * 0.06 }}
            onClick={() => setOpen(src)}
            className="group block w-full overflow-hidden rounded-xl"
          >
            <img src={src} alt={`Gallery photo ${i + 1}`} width={600} height={700}
              loading="lazy"
              className="w-full transition duration-500 group-hover:scale-105" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[90] grid place-items-center bg-black/85 p-5"
          >
            <button aria-label="Close" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl"
            >
              <img src={open} alt="Enlarged gallery photo" width={1200} height={1400}
                className="h-auto w-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
