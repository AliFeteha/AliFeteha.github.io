import { capabilities, type Delivered } from "@/lib/data";
import Flow from "./Flow";

export default function CaseStudy({ p }: { p: Delivered }) {
  const caps = capabilities.filter((c) => p.capabilities.includes(c.id));
  return (
    <article>
      <div className="wrap pb-12 pt-12 md:pt-16">
        <a href="/work/" className="text-[0.95rem] text-muted hover:text-ink">All work</a>
        <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] md:gap-12">
          <div>
            <p className="text-lg text-muted">{p.client}</p>
            <h1 className="mt-1 font-display text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[3.2rem]">{p.project}</h1>
            <p className="mt-5 max-w-[40rem] text-xl leading-relaxed">{p.summary}</p>
          </div>
          <dl className="space-y-5 md:border-l md:border-line md:pl-8 md:pt-2">
            <div>
              <dt className="sr-only">Result</dt>
              <dd className="font-display text-[2.2rem] font-bold leading-none tracking-[-0.02em] text-accent">{p.proof.value}</dd>
              <dd className="mt-2 text-[0.95rem] text-muted">{p.proof.label}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">My role</dt>
              <dd className="mt-0.5 font-medium">{p.role}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-y border-line bg-surface py-10">
        <div className="wrap">
          <h2 className="mb-4 font-medium text-muted">How it works</h2>
          <Flow steps={p.flow} label={`How ${p.project} works`} />
        </div>
      </div>

      <div className="wrap grid gap-12 py-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14 md:py-20">
        <div>
          <h2 className="font-display text-[1.5rem] font-bold">The problem</h2>
          <p className="mt-3 text-lg text-ink/90">{p.challenge}</p>
          <h2 className="mt-10 font-display text-[1.5rem] font-bold">Shows</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {caps.map((c) => (
              <li key={c.id}>
                <a href={`/work/#${c.id}`} className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent hover:bg-accent/20">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="mt-10 font-display text-[1.5rem] font-bold">Built with</h2>
          <p className="mt-3 text-ink/85">{p.stack.join(", ")}</p>
        </div>
        <div>
          <h2 className="font-display text-[1.5rem] font-bold">What I built</h2>
          <ul className="mt-4 list-disc space-y-3.5 pl-5 text-[1.05rem] marker:text-sand">
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
