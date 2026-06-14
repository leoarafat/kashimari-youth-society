import { ReactNode } from "react";
import Reveal from "./Reveal";

/** Standard section shell with eyebrow + title + optional intro. */
export default function Section({
  id, eyebrow, title, intro, children, alt = false, className = "",
}: {
  id?: string; eyebrow?: string; title?: string; intro?: string;
  children: ReactNode; alt?: boolean; className?: string;
}) {
  return (
    <section id={id} className={`${alt ? "surface" : ""} py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <Reveal className="mb-12 max-w-2xl">
            {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
            {title && (
              <h2 className="mt-4 font-display text-3xl font-700 leading-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
