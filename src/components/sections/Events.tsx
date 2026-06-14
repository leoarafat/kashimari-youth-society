"use client";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { events } from "@/data/site";

export default function Events() {
  return (
    <Section id="events" eyebrow="What's Next"
      title="Upcoming Events"
      intro="Join us at our next community gatherings and campaigns.">
      <div className="grid gap-6 lg:grid-cols-3">
        {events.map((e, i) => (
          <Reveal key={e.name} delay={i * 0.08}>
            <article className="card-bg group overflow-hidden rounded-2xl transition hover:-translate-y-1.5 hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={e.image} alt={e.name} fill loading="lazy"
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-lg bg-ember px-3 py-1 text-xs font-700 text-white">
                  {e.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-600">{e.name}</h3>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={13} className="text-leaf" /> {e.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{e.desc}</p>
                <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-4 py-2 text-sm font-600 transition hover:bg-royal hover:text-white">
                  <CalendarDays size={14} /> Add to calendar
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
