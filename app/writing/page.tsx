import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  const posts = getPosts();
  return (
    <>
      <PageHead title="Writing" note="Notes from building AI systems that go to production." />
      <section className="wrap pb-20">
        {posts.length ? (
          <ul className="border-b border-line">
            {posts.map((p) => (
              <li key={p.slug} className="border-t border-line">
                <a href={`/writing/${p.slug}/`} className="group grid gap-2 py-7 md:grid-cols-[10rem_1fr] md:gap-8">
                  <p className="text-[0.95rem] text-muted">{formatDate(p.date)}{p.draft ? " (draft)" : ""}</p>
                  <div>
                    <h2 className="font-display text-[1.5rem] font-bold leading-tight group-hover:text-accent">{p.title}</h2>
                    <p className="mt-2 max-w-[40rem] text-ink/85">{p.summary}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg">The first post is on its way. Until then, the <a className="link" href="/work/">case studies</a> show how I work.</p>
        )}
      </section>
    </>
  );
}
