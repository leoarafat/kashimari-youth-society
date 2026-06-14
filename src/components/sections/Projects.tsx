import { ArrowUpRight, Calendar } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Initiatives & Projects"
      title="Work that changes lives"
      intro="A growing record of campaigns and projects. New initiatives can be added anytime from the data file.">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.1}>
            <article className="card-bg group flex h-full overflow-hidden rounded-2xl transition hover:shadow-xl">
              <div className="relative w-2/5 shrink-0 overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-600 text-leaf">
                  <Calendar size={12} /> {p.date}
                </span>
                <h3 className="mt-2 font-display text-lg font-600 leading-snug">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                <button className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-600 text-ember transition hover:gap-2">
                  Read More <ArrowUpRight size={15} />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
