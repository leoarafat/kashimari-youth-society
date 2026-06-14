import { Eye, Target, Users } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { about } from "@/data/site";

const cards = [
  { icon: Eye, title: "Our Vision", body: about.vision, tint: "from-royal/10 to-royal/0", ring: "text-royal" },
  { icon: Target, title: "Our Mission", body: about.mission, tint: "from-leaf/10 to-leaf/0", ring: "text-leaf" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About Us" title="A youth movement for a kinder, fairer community">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-ember/10 text-ember">
              <Users size={20} />
            </span>
            <h3 className="font-display text-2xl font-600">Who We Are</h3>
          </div>
          <p className="mt-5 text-lg leading-relaxed text-muted">{about.who}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {["Trust", "Youth", "Growth", "Safety"].map((v) => (
              <div key={v} className="card-bg rounded-xl px-4 py-3 text-sm font-600">
                <span className="text-leaf">●</span> {v}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className={`card-bg group relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.tint} p-7 transition hover:-translate-y-1`}>
                <span className={`grid h-12 w-12 place-items-center rounded-xl bg-[var(--surface)] ${c.ring}`}>
                  <c.icon size={22} />
                </span>
                <h4 className="mt-5 font-display text-xl font-600">{c.title}</h4>
                <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
