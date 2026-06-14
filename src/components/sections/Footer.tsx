"use client";
import { HeartHandshake } from "lucide-react";
import { nav, org, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-700">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-royal to-leaf">
              <HeartHandshake size={18} />
            </span>
            {org.name}
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            A youth-led social welfare organization building a safe, educated and progressive
            society through awareness, action and community development.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition hover:bg-ember hover:text-white">
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-700 uppercase tracking-wider text-mint">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:text-ember">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-700 uppercase tracking-wider text-mint">Reach Us</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{org.address}</li>
            <li><a href={`mailto:${org.email}`} className="transition hover:text-ember">{org.email}</a></li>
            <li><a href={`tel:${org.phone}`} className="transition hover:text-ember">{org.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/55 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {org.name}. All rights reserved.</p>
          <p>Built with care for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
