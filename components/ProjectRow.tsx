import type { Delivered } from "@/lib/data";

export default function ProjectRow({ p }: { p: Delivered }) {
  return (
    <a
      href={`/work/${p.slug}/`}
      data-caps={p.capabilities.join(" ")}
      className="group grid gap-3 border-t border-line py-7 transition-colors md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)_auto] md:items-baseline md:gap-8"
    >
      <div>
        <p className="text-[0.95rem] text-muted">{p.client}</p>
        <h3 className="mt-0.5 font-display text-[1.5rem] font-bold leading-tight tracking-[-0.01em] group-hover:text-accent sm:text-[1.75rem]">
          {p.project}
        </h3>
        <p className="mt-2 max-w-[40rem] text-ink/85">{p.summary}</p>
      </div>
      <div>
        <p className="font-display text-[1.25rem] font-bold text-accent">{p.proof.value}</p>
        <p className="text-[0.9rem] text-muted">{p.proof.label}</p>
      </div>
      <span className="hidden text-sm font-medium text-muted group-hover:text-ink md:block">Read case study</span>
    </a>
  );
}
