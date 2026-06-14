"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Section from "../ui/Section";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  const [[i, dir], set] = useState<[number, number]>([0, 0]);
  const go = (d: number) => set([(i + d + testimonials.length) % testimonials.length, d]);
  const t = testimonials[i];

  return (
    <Section id="testimonials" alt eyebrow="Voices"
      title="What the community says">
      <div className="relative mx-auto max-w-3xl text-center">
        <Quote className="mx-auto text-ember/30" size={48} />
        <div className="relative mt-4 min-h-[180px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-xl leading-relaxed sm:text-2xl">“{t.text}”</p>
              <footer className="mt-6">
                <p className="font-600">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] transition hover:bg-royal hover:text-white">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, k) => (
              <button key={k} aria-label={`Go to testimonial ${k + 1}`}
                onClick={() => set([k, k > i ? 1 : -1])}
                className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-ember" : "w-2 bg-[var(--border)]"}`} />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] transition hover:bg-royal hover:text-white">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Section>
  );
}
