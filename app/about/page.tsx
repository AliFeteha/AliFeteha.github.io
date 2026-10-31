import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { capabilities, credentials, delivered, evidenceFor, experience, toolGroups } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

function Evidence({ items }: { items: { label: string; href: string }[] }) {
  if (!items.length) return null;
  return (
    <span className="flex flex-wrap gap-x-3 gap-y-1">
      {items.map((e) => (
        <a
          key={e.label}
          href={e.href}
          {...(e.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-sm text-muted underline decoration-line underline-offset-[3px] hover:text-accent hover:decoration-accent"
        >
          {e.label}
        </a>
      ))}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHead title="About" />
      <section className="wrap grid gap-10 pb-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <div className="space-y-5 text-lg">
          <p>
            I’m an AI & Software Engineer at Applab in Doha. I work on the generative AI projects that have to survive
            contact with real users: public chatbots, avatar platforms, enterprise assistants and agents that take actions
            in business systems.
          </p>
          <p>
            Most of my time goes into the parts that decide whether an AI system can be trusted: retrieval that finds the
            right source, agents that call tools correctly, and evaluations that prove it before launch. I also work with
            business teams early on to scope use cases and estimate effort, and I review code and help the developers I work with.
          </p>
          <p>
            I came to this through research. My graduation project at Egypt-Japan University of Science and Technology was an
            Arabic handwritten OCR system, published at IEEE NILES 2024. Before and during my degree I worked in finance and
            the technical office of a construction company, which taught me how the businesses I now build for actually run.
          </p>
        </div>
        <aside className="self-start rounded-xl border border-line bg-surface p-6">
          <h2 className="font-medium">In short</h2>
          <dl className="mt-4 space-y-3 text-[0.98rem]">
            <div><dt className="text-muted">Now</dt><dd>AI & Software Engineer, Applab, Doha</dd></div>
            <div><dt className="text-muted">In production</dt><dd>{delivered.length} AI projects for QOC, CAA, QF and MOJ</dd></div>
            <div><dt className="text-muted">Certified</dt><dd>Azure AI Engineer Associate (AI-102)</dd></div>
            <div><dt className="text-muted">Published</dt><dd>IEEE NILES 2024, arXiv 2025</dd></div>
            <div><dt className="text-muted">Languages</dt><dd>Arabic, English</dd></div>
          </dl>
        </aside>
      </section>

      <section id="expertise" className="border-t border-line bg-surface py-16 md:py-24">
        <div className="wrap">
          <h2 className="font-display text-[2rem] font-bold tracking-[-0.015em] sm:text-[2.4rem]">What I do</h2>
          <p className="mt-3 max-w-[40rem] text-lg text-muted">Each one links to the projects where you can see it.</p>
          <ul className="mt-10 grid gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => {
              const ev = delivered.filter((d) => d.capabilities.includes(c.id));
              return (
                <li key={c.id} className="border-t-2 border-accent/60 pt-4">
                  <a href={`/work/#${c.id}`} className="font-display text-[1.2rem] font-bold hover:text-accent">{c.label}</a>
                  <p className="mt-1 text-[0.98rem] text-ink/85">{c.detail}</p>
                  <div className="mt-2">
                    <Evidence items={ev.map((d) => ({ label: d.short, href: `/work/${d.slug}/` }))} />
                  </div>
                </li>
              );
            })}
          </ul>

          <h2 id="tools" className="mt-20 font-display text-[2rem] font-bold tracking-[-0.015em] sm:text-[2.4rem]">Platforms and tools</h2>
          <p className="mt-3 max-w-[40rem] text-lg text-muted">Grouped by area, with where I used each one.</p>
          <div className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {toolGroups.map((g) => (
              <div key={g.group}>
                <h3 className="font-medium text-accent">{g.group}</h3>
                <ul className="mt-3 divide-y divide-line border-y border-line">
                  {g.tools.map((t) => (
                    <li key={t} className="grid gap-1 py-2.5 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-4">
                      <span className="font-medium">{t}</span>
                      <Evidence items={evidenceFor(t)} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="wrap py-16 md:py-24">
        <h2 className="font-display text-[2rem] font-bold tracking-[-0.015em] sm:text-[2.4rem]">Experience</h2>
        <ol className="relative mt-10 space-y-12 border-l border-line pl-7 sm:pl-10">
          {experience.map((e) => (
            <li key={e.org} className="relative">
              <span className="absolute -left-[calc(1.75rem+5px)] top-2 h-[9px] w-[9px] rounded-full border-2 border-accent bg-bg sm:-left-[calc(2.5rem+5px)]" aria-hidden="true" />
              <p className="text-[0.95rem] text-muted">{e.period}</p>
              <h3 className="mt-1 font-display text-[1.4rem] font-bold leading-tight">{e.role}</h3>
              <p className="text-muted">{e.org}, {e.place}</p>
              <ul className="mt-4 max-w-[42rem] list-disc space-y-2 pl-5 marker:text-sand">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <div className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-[1.4rem] font-bold">Certifications</h2>
          <ul className="mt-5 grid gap-5 sm:grid-cols-3">
            {credentials.map((c) => (
              <li key={c.title}>
                <p className="font-medium">{c.title}</p>
                <p className="text-[0.95rem] text-muted">{c.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
