import { ArrowUpRight } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { blog } from "@/data/site";

export default function Blog() {
  return (
    <Section id="blog" eyebrow="Blog & News"
      title="Stories and updates"
      intro="Insights from the field and news from our latest work.">
      <div className="grid gap-6 lg:grid-cols-3">
        {blog.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08}>
            <article className="card-bg group flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1.5 hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={b.image} alt={b.title} loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-leaf px-3 py-1 text-xs font-700 text-white">
                  {b.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-600 text-muted">{b.date}</p>
                <h3 className="mt-2 font-display text-lg font-600 leading-snug">{b.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{b.excerpt}</p>
                <button className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-600 text-ember transition hover:gap-2">
                  Read article <ArrowUpRight size={15} />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
