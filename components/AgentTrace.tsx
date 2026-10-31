type Line = { kind: "user" | "step" | "answer" | "cite"; tag?: string; text: string; dir?: "rtl" };

const lines: Line[] = [
  { kind: "user", text: "What are the latest drone registration requirements?" },
  { kind: "step", tag: "router", text: "intent: regulation → regulations_agent" },
  { kind: "step", tag: "search", text: "aviation-regulations index, 14 passages" },
  { kind: "step", tag: "filter", text: "amendment-aware: keep latest version only" },
  { kind: "step", tag: "rerank", text: "top 4 passages by relevance" },
  { kind: "answer", text: "Grounded answer, 2 citations" },
  { kind: "cite", text: "[1] regulations.pdf, p. 14" },
  { kind: "cite", text: "[2] amendment-03.pdf, p. 2" },
];

export default function AgentTrace() {
  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_0_rgb(var(--line))]">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-[0.8rem] text-muted">
          <span>Agent trace</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            example run
          </span>
        </div>
        <ol className="space-y-2.5 px-4 py-5 font-mono text-[0.82rem] leading-relaxed sm:px-5 sm:text-[0.86rem]">
          {lines.map((l, i) => (
            <li key={i} className="trace-line" style={{ ["--i" as string]: i }}>
              {l.kind === "user" && (
                <p dir={l.dir} className="rounded-lg bg-bg px-3 py-2 text-[0.95rem] text-ink">
                  {l.text}
                </p>
              )}
              {l.kind === "step" && (
                <p className="flex gap-3 text-muted">
                  <span className="w-[4.6rem] sm:w-[5.5rem] shrink-0 text-sand">{l.tag}</span>
                  <span className="text-ink/85">{l.text}</span>
                </p>
              )}
              {l.kind === "answer" && (
                <p className="flex gap-3 pt-1">
                  <span className="w-[4.6rem] sm:w-[5.5rem] shrink-0 text-accent">answer</span>
                  <span className="trace-caret font-medium text-ink">{l.text}</span>
                </p>
              )}
              {l.kind === "cite" && (
                <p className="flex gap-3">
                  <span className="w-[4.6rem] sm:w-[5.5rem] shrink-0" aria-hidden="true" />
                  <span className="text-muted">{l.text}</span>
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        How a bilingual regulations assistant like the one I built for Qatar CAA handles a question. Illustrative, not live data.
      </figcaption>
    </figure>
  );
}
