import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";
import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-deep py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: "linear-gradient(135deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <p className="font-display text-4xl font-700 text-white sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
