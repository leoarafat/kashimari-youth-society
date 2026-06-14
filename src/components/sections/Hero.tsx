import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { hero, org } from "@/data/site";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden bg-ink pt-28 pb-20 text-white sm:pt-32">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-royal/30 blur-3xl animate-float" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-leaf/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-ember/15 blur-3xl animate-float" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-600 tracking-wide text-mint"
          >
            <Sparkles size={13} /> Youth-led since {org.established}
          </motion.span>

          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="mt-6 font-display text-4xl font-700 leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Empowering Youth,{" "}
            <span className="gradient-text">Building a Better Society</span>
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 font-600 text-white transition hover:bg-emberlite"
            >
              {hero.primaryCta.label}
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-600 text-white transition hover:bg-white/10"
            >
              <Play size={16} /> {hero.secondaryCta.label}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <img
              src={hero.image}
              alt="Youth volunteers working together in the community"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
          {/* Floating stat card */}
          <motion.div
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
          >
            <p className="font-display text-2xl font-700 text-white">1000+</p>
            <p className="text-xs text-white/70">People Reached</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
