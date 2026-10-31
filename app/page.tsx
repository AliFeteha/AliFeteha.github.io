import Hero from "@/components/Hero";
import ProjectRow from "@/components/ProjectRow";
import { delivered, publications, research } from "@/lib/data";
import { formatDate, getPosts } from "@/lib/posts";

export default function Home() {
  const posts = getPosts().slice(0, 2);
  return (
    <>
      <Hero />
      <section className="border-t border-line bg-surface py-16 md:py-24">
        <div className="wrap">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-[2rem] font-bold tracking-[-0.015em] sm:text-[2.4rem]">Delivered to production</h2>
            <a href="/work/" className="link font-medium">Filter by what I built</a>
          </div>
          <div className="border-b border-line">
            {delivered.map((p) => (
              <ProjectRow key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="wrap grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <h2 className="font-display text-[1.8rem] font-bold">Research</h2>
          <p className="mt-3 text-lg text-ink/85">
            {research.title}, my graduation project, reads handwritten Arabic documents with a{" "}
            <span className="font-medium">{research.results[0].value}</span> character recognition rate. It became{" "}
            {publications.length} papers, including one at IEEE NILES 2024.
          </p>
          <a href="/research/" className="link mt-5 inline-block font-medium">Read about the research</a>
        </div>
        <div>
          <h2 className="font-display text-[1.8rem] font-bold">Writing</h2>
          {posts.length ? (
            <ul className="mt-4 space-y-5">
              {posts.map((p) => (
                <li key={p.slug}>
                  <a href={`/writing/${p.slug}/`} className="group block">
                    <p className="text-sm text-muted">{formatDate(p.date)}{p.draft ? ", draft" : ""}</p>
                    <p className="mt-1 font-medium leading-snug group-hover:text-accent">{p.title}</p>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-lg text-ink/85">Notes on building agents for production are on the way.</p>
          )}
        </div>
      </section>
    </>
  );
}
