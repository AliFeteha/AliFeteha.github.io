import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  const posts = getPosts();
  // Static export needs at least one param; a placeholder 404s cleanly.
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "none" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPosts().find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <article className="wrap pb-20 pt-12 md:pt-16">
      <a href="/writing/" className="text-[0.95rem] text-muted hover:text-ink">All writing</a>
      <header className="mt-6 max-w-[44rem]">
        <p className="text-muted">{formatDate(post.date)}{post.draft ? " (draft, hidden on the live site)" : ""}</p>
        <h1 className="mt-2 font-display text-[2.2rem] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[2.8rem]">{post.title}</h1>
        <p className="mt-4 text-xl text-muted">{post.summary}</p>
      </header>
      <div className="prose mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
