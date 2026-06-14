"use client";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { achievements } from "@/data/site";

export default function Achievements() {
  return (
    <Section id="achievements" alt eyebrow="Our Journey"
      title="Milestones along the way"
      intro="From twelve volunteers to a recognised community force.">
      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-[var(--border)] sm:left-1/2" />
        <div className="space-y-10">
          {achievements.map((a, i) => (
            <Reveal key={a.year} delay={i * 0.08}>
              <div className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <div className="hidden flex-1 sm:block" />
                <div className="absolute left-4 top-1.5 z-10 -translate-x-1/2 sm:left-1/2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-ember text-xs font-700 text-white ring-4 ring-[var(--bg)]">
                    {i + 1}
                  </span>
                </div>
                <div className={`flex-1 pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <span className="font-display text-2xl font-700 text-royal">{a.year}</span>
                  <h3 className="mt-1 font-display text-lg font-600">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
