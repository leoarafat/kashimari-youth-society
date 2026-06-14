"use client";
import { useState } from "react";
import { CheckCircle2, HeartHandshake } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

type Fields = { name: string; phone: string; email: string; address: string; occupation: string; why: string };
const empty: Fields = { name: "", phone: "", email: "", address: "", occupation: "", why: "" };

export default function Volunteer() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (f.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[0-9+\-\s]{7,}$/.test(f.phone)) e.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address.";
    if (f.address.trim().length < 3) e.address = "Please enter your address.";
    if (f.occupation.trim().length < 2) e.occupation = "Please enter your occupation.";
    if (f.why.trim().length < 10) e.why = "Tell us a little more (10+ characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    setSent(true);
    setF(empty);
    setTimeout(() => setSent(false), 5000);
  };

  const field = (key: keyof Fields, label: string, type = "text") => (
    <div>
      <label className="mb-1.5 block text-sm font-600">{label}</label>
      <input
        type={type} value={f[key]}
        onChange={(e) => setF({ ...f, [key]: e.target.value })}
        className={`w-full rounded-xl border bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-ember ${errors[key] ? "border-red-400" : "border-[var(--border)]"}`}
      />
      {errors[key] && <p className="mt-1 text-xs text-red-500">{errors[key]}</p>}
    </div>
  );

  return (
    <Section id="volunteer" eyebrow="Get Involved"
      title="Become a volunteer"
      intro="Lend your time and energy. Fill in the form and our team will reach out.">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl bg-gradient-to-br from-royal to-leaf p-8 text-white">
            <HeartHandshake size={36} />
            <h3 className="mt-5 font-display text-2xl font-700">Why volunteer with us?</h3>
            <ul className="mt-5 space-y-3 text-white/90">
              {["Make a real difference in your own community",
                "Build leadership and teamwork skills",
                "Join a network of motivated young people",
                "Be part of campaigns that protect families"].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-mint" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-bg rounded-2xl p-7">
            {sent && (
              <div className="mb-5 flex items-center gap-2 rounded-xl bg-leaf/10 px-4 py-3 text-sm font-600 text-leaf">
                <CheckCircle2 size={18} /> Thank you! Your registration has been received.
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              {field("name", "Full Name")}
              {field("phone", "Phone Number", "tel")}
              {field("email", "Email", "email")}
              {field("occupation", "Occupation")}
            </div>
            <div className="mt-4">{field("address", "Address")}</div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-600">Why do you want to volunteer?</label>
              <textarea rows={4} value={f.why}
                onChange={(e) => setF({ ...f, why: e.target.value })}
                className={`w-full rounded-xl border bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-ember ${errors.why ? "border-red-400" : "border-[var(--border)]"}`} />
              {errors.why && <p className="mt-1 text-xs text-red-500">{errors.why}</p>}
            </div>
            <button onClick={submit}
              className="mt-6 w-full rounded-full bg-ember py-3.5 font-600 text-white transition hover:bg-emberlite">
              Submit Registration
            </button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
