import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { delivered } from "@/lib/data";

export function generateStaticParams() {
  return delivered.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = delivered.find((d) => d.slug === slug);
  return p ? { title: `${p.project}, ${p.client}`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = delivered.findIndex((d) => d.slug === slug);
  if (i < 0) notFound();
  const next = delivered[(i + 1) % delivered.length];
  return (
    <>
      <CaseStudy p={delivered[i]} />
      <div className="wrap border-t border-line py-10">
        <a href={`/work/${next.slug}/`} className="group block">
          <p className="text-sm text-muted">Next project</p>
          <p className="mt-1 font-display text-[1.6rem] font-bold group-hover:text-accent">
            {next.project}, {next.clientShort}
          </p>
        </a>
      </div>
    </>
  );
}
