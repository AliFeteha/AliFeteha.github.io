import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ProjectRow from "@/components/ProjectRow";
import { capabilities, delivered, sideProjects } from "@/lib/data";

export const metadata: Metadata = { title: "Work" };

// Filters projects by capability. Reads and writes the URL hash (#rag, #tool-calling...).
const filterScript = `(function(){var chips=document.querySelectorAll("[data-filter]");var rows=document.querySelectorAll("#project-list [data-caps]");var count=document.getElementById("filter-count");function apply(id){var n=0;rows.forEach(function(r){var on=!id||r.dataset.caps.split(" ").indexOf(id)>-1;r.hidden=!on;if(on)n++;});chips.forEach(function(c){c.setAttribute("aria-pressed",String(c.dataset.filter===(id||"all")));});count.textContent=id?n+" of "+rows.length+" projects":"All "+rows.length+" projects";}chips.forEach(function(c){c.addEventListener("click",function(){var id=c.dataset.filter==="all"?"":c.dataset.filter;history.replaceState(null,"",id?"#"+id:location.pathname);apply(id);});});var h=location.hash.slice(1);apply(document.querySelector('[data-filter="'+h+'"]')?h:"");})();`;

export default function WorkPage() {
  const used = capabilities.filter((c) => delivered.some((d) => d.capabilities.includes(c.id)));
  return (
    <>
      <PageHead
        title="Work"
        note="Client projects I delivered at Applab, all in production. Pick a capability to see where I’ve done it."
      >
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          <button data-filter="all" aria-pressed="true" className="chip-filter">All</button>
          {used.map((c) => (
            <button key={c.id} data-filter={c.id} aria-pressed="false" title={c.detail} className="chip-filter">
              {c.label}
            </button>
          ))}
        </div>
        <p id="filter-count" aria-live="polite" className="mt-4 text-sm text-muted">
          All {delivered.length} projects
        </p>
      </PageHead>
      <section className="border-t border-line bg-surface pb-20 pt-2">
        <div id="project-list" className="wrap">
          {delivered.map((p) => (
            <ProjectRow key={p.slug} p={p} />
          ))}
        </div>
      </section>
      <section className="wrap py-16 md:py-20">
        <h2 className="font-display text-[1.6rem] font-bold">Earlier projects on GitHub</h2>
        <ul className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {sideProjects.map((p) => (
            <li key={p.title}>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block">
                <p className="font-medium underline decoration-line decoration-2 underline-offset-4 group-hover:decoration-accent">{p.title}</p>
                <p className="mt-1.5 text-muted">{p.detail}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <script dangerouslySetInnerHTML={{ __html: filterScript }} />
    </>
  );
}
