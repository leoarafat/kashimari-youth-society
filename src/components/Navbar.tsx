import { useEffect, useState } from "react";
import { Menu, X, HeartHandshake } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, org } from "@/data/site";
import ThemeToggle from "./ui/ThemeToggle";
import { useActiveSection } from "./ui/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(nav.map((n) => n.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--border)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-700">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-royal to-leaf text-white">
            <HeartHandshake size={18} />
          </span>
          <span className="hidden sm:block">{org.name}</span>
          <span className="sm:hidden">{org.shortName}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const isActive = active === n.href.slice(1);
            return (
              <a
                key={n.href}
                href={n.href}
                className={`relative px-3.5 py-2 text-sm font-500 transition ${
                  isActive ? "text-ember" : "text-muted hover:text-[var(--fg)]"
                }`}
              >
                {n.label}
                {isActive && (
                  <motion.span
                    layoutId="navdot"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-ember"
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#volunteer"
            className="hidden rounded-full bg-ember px-5 py-2.5 text-sm font-600 text-white transition hover:bg-emberlite sm:block"
          >
            Join Us
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-500 text-muted transition hover:bg-[var(--surface)] hover:text-ember"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#volunteer"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ember px-5 py-3 text-center text-sm font-600 text-white"
              >
                Join Our Mission
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
