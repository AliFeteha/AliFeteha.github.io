import type { Delivered } from "@/lib/data";

/** Architecture as boxes and arrows: what happens, and which tool does it. */
export default function Flow({ steps, label }: { steps: Delivered["flow"]; label: string }) {
  return (
    <div className="overflow-x-auto">
      <ol aria-label={label} className="flex min-w-0 flex-col gap-0 md:flex-row md:items-stretch">
        {steps.map((s, i) => (
          <li key={s.label} className="flex flex-col md:flex-1 md:flex-row md:items-stretch">
            <div
              className={`flex-1 rounded-lg border px-3.5 py-3 ${
                s.agent ? "border-accent bg-accent/[0.07]" : "border-line bg-bg"
              }`}
            >
              <p className={`text-[0.95rem] font-medium leading-snug ${s.agent ? "text-accent" : ""}`}>{s.label}</p>
              {s.tool && <p className="mt-1 text-[0.82rem] leading-snug text-muted">{s.tool}</p>}
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="flex items-center justify-center py-1 text-sand md:px-1.5 md:py-0">
                <svg width="14" height="14" viewBox="0 0 14 14" className="rotate-90 md:rotate-0">
                  <path d="M1 7h11M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
