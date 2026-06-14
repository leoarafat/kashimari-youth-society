import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { org } from "@/data/site";

type F = { name: string; email: string; subject: string; message: string };
const empty: F = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [f, setF] = useState<F>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof F, string>>>({});
  const [sent, setSent] = useState(false);

  const submit = () => {
    const e: Partial<Record<keyof F, string>> = {};
    if (f.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email.";
    if (f.subject.trim().length < 2) e.subject = "Please add a subject.";
    if (f.message.trim().length < 10) e.message = "Message is too short.";
    setErrors(e);
    if (Object.keys(e).length) return;
    setSent(true); setF(empty); setTimeout(() => setSent(false), 5000);
  };

  const info = [
    { icon: Mail, label: "Email", value: org.email, href: `mailto:${org.email}` },
    { icon: Phone, label: "Phone", value: org.phone, href: `tel:${org.phone}` },
    { icon: MapPin, label: "Address", value: org.address },
  ];

  return (
    <Section id="contact" eyebrow="Contact"
      title="Get in touch"
      intro="Questions, partnerships or want to help? Send us a message.">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4">
            {info.map((it) => (
              <a key={it.label} href={it.href ?? undefined}
                className="card-bg flex items-center gap-4 rounded-2xl p-5 transition hover:border-ember">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ember/10 text-ember">
                  <it.icon size={20} />
                </span>
                <div>
                  <p className="text-xs font-600 uppercase tracking-wide text-muted">{it.label}</p>
                  <p className="font-600">{it.value}</p>
                </div>
              </a>
            ))}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)]">
              {/* Google Map placeholder */}
              <div className="grid aspect-[16/9] place-items-center bg-[var(--surface)] text-center text-sm text-muted">
                <div>
                  <MapPin className="mx-auto mb-2 text-leaf" />
                  Google Map Placeholder
                  <p className="mt-1 text-xs">Embed your location map here</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-bg rounded-2xl p-7">
            {sent && (
              <div className="mb-5 flex items-center gap-2 rounded-xl bg-leaf/10 px-4 py-3 text-sm font-600 text-leaf">
                <CheckCircle2 size={18} /> Message sent! We&apos;ll reply soon.
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              {(["name", "email"] as const).map((k) => (
                <div key={k}>
                  <label className="mb-1.5 block text-sm font-600 capitalize">{k}</label>
                  <input value={f[k]} type={k === "email" ? "email" : "text"}
                    onChange={(e) => setF({ ...f, [k]: e.target.value })}
                    className={`w-full rounded-xl border bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-ember ${errors[k] ? "border-red-400" : "border-[var(--border)]"}`} />
                  {errors[k] && <p className="mt-1 text-xs text-red-500">{errors[k]}</p>}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-600">Subject</label>
              <input value={f.subject}
                onChange={(e) => setF({ ...f, subject: e.target.value })}
                className={`w-full rounded-xl border bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-ember ${errors.subject ? "border-red-400" : "border-[var(--border)]"}`} />
              {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-600">Message</label>
              <textarea rows={5} value={f.message}
                onChange={(e) => setF({ ...f, message: e.target.value })}
                className={`w-full rounded-xl border bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-ember ${errors.message ? "border-red-400" : "border-[var(--border)]"}`} />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>
            <button onClick={submit}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember py-3.5 font-600 text-white transition hover:bg-emberlite">
              <Send size={16} /> Send Message
            </button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
