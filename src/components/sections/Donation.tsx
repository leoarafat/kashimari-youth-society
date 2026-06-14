import { Heart, ShieldCheck, Info } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { donationImpact, donationAccounts } from "@/data/site";

export default function Donation() {
  return (
    <Section id="donate" alt eyebrow="Support Us"
      title="Your gift creates change"
      intro="Every contribution funds awareness campaigns, education support and relief for those who need it most.">
      <div className="grid gap-6 lg:grid-cols-3">
        {donationImpact.map((d, i) => (
          <Reveal key={d.amount} delay={i * 0.1}>
            <div className="card-bg group flex h-full flex-col rounded-2xl p-7 transition hover:-translate-y-1.5 hover:border-ember">
              <Heart className="text-ember" size={26} />
              <p className="mt-4 font-display text-3xl font-700 text-royal">{d.amount}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{d.impact}</p>
              <button className="mt-5 rounded-full bg-[var(--surface)] py-3 text-sm font-600 transition group-hover:bg-ember group-hover:text-white">
                Donate {d.amount}
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
          <div className="mb-5 flex items-start gap-3 rounded-xl bg-ember/10 px-4 py-3 text-sm text-ember">
            <Info size={18} className="mt-0.5 shrink-0" />
            <p>
              These donation accounts are placeholders. Real account details
              will be added shortly.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {donationAccounts.map((a) => (
              <div key={a.label} className="card-bg rounded-xl p-5">
                <p className="text-xs font-700 uppercase tracking-wider text-leaf">{a.label}</p>
                <p className="mt-2 font-display text-lg font-700">{a.number}</p>
                <p className="mt-1 text-xs text-muted">{a.holder}</p>
                <p className="mt-2 text-[10px] font-700 uppercase tracking-wider text-ember">Dummy — not active</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl bg-ink p-8 text-white sm:flex-row">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-mint" size={28} />
            <p className="text-sm text-white/80">Secure giving. We accept the methods below.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {["bKash", "Nagad", "Rocket", "Visa", "Mastercard"].map((m) => (
              <span key={m} className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-600">
                {m}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
