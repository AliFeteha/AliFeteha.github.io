import { publications, research } from "@/lib/data";
import PageHead from "./PageHead";

export default function Research() {
  return (
    <>
      <PageHead title="Research" note="Before agents, I worked on reading Arabic handwriting. The work became two papers." />
      <section className="wrap pb-20 md:pb-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <div>
          <h3 className="font-display text-[1.65rem] font-bold leading-tight">
            {research.title}: {research.subtitle}
          </h3>
          <p className="mt-1 text-muted">{research.period}</p>
          <p className="mt-5 max-w-[38rem] text-lg">{research.summary}</p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {research.results.map((r) => (
              <div key={r.value} className="border-t-2 border-sand pt-4">
                <dt className="font-display text-[2.6rem] font-bold leading-none tracking-[-0.02em]">{r.value}</dt>
                <dd className="mt-3 text-[0.98rem] text-muted">{r.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-[38rem] text-muted">{research.extra}</p>
          <a className="link mt-5 inline-block font-medium" href={research.code} target="_blank" rel="noopener noreferrer">
            View the code on GitHub
          </a>
        </div>
        <div className="space-y-5">
          {publications.map((p) => (
            <a
              key={p.link}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent"
            >
              <p className="text-sm font-medium text-accent">{p.venue}</p>
              <p className="mt-2 font-display text-[1.2rem] font-bold leading-snug">{p.title}</p>
              <p className="mt-3 text-[0.92rem] text-muted">{p.authors}</p>
              <p className="mt-4 text-[0.95rem] font-medium underline decoration-line decoration-2 underline-offset-4 group-hover:decoration-accent">
                {p.linkLabel}
              </p>
            </a>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
