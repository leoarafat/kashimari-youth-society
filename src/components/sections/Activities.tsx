"use client";
import Image from "next/image";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { activities } from "@/data/site";

export default function Activities() {
  return (
    <Section id="activities" alt eyebrow="What We Do"
      title="Our Activities"
      intro="Grassroots campaigns and support programs run by young volunteers across Kashimari.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((a, i) => (
          <Reveal key={a.title} delay={(i % 3) * 0.08}>
            <article className="card-bg group h-full overflow-hidden rounded-2xl transition hover:-translate-y-1.5 hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={a.image} alt={a.title} fill loading="lazy"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-ink/70 text-mint backdrop-blur">
                  <a.icon size={18} />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-600 leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
