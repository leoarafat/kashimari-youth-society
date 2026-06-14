import { Facebook, Linkedin, Twitter } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { team } from "@/data/site";

export default function Team() {
  return (
    <Section id="team" eyebrow="Leadership"
      title="The people behind the mission"
      intro="A dedicated executive committee guiding Kashimari Youth Society forward.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={(i % 3) * 0.08}>
            <article className="card-bg group overflow-hidden rounded-2xl text-center transition hover:-translate-y-1.5 hover:shadow-xl">
              <div className="relative mx-auto mt-7 h-32 w-32 overflow-hidden rounded-full ring-4 ring-[var(--surface)]">
                <img src={m.photo} alt={m.name} loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-600">{m.name}</h3>
                <p className="text-sm font-600 text-ember">{m.role}</p>
                <div className="mt-4 flex justify-center gap-2">
                  {[Facebook, Twitter, Linkedin].map((Icon, k) => (
                    <a key={k} href="#" aria-label={`${m.name} social link`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-[var(--surface)] text-muted transition hover:bg-royal hover:text-white">
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
