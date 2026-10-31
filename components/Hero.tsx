import { intro, personal } from "@/lib/data";
import AgentTrace from "./AgentTrace";

export default function Hero() {
  return (
    <section id="top" className="wrap grid gap-12 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28">
      <div>
        <p className="text-muted">
          {personal.role}, {personal.location}
        </p>
        <h1 className="mt-5 font-display text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[4rem]">
          {intro.lead}
        </h1>
        <p className="mt-6 max-w-[34rem] text-lg text-muted">{intro.body}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${personal.email}`} className="btn-primary">
            Email me
          </a>
          <a href="/work/" className="btn-quiet">
            See delivered projects
          </a>
        </div>
        <p className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem] text-muted">
          <a className="link" href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="link" href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>Microsoft Certified Azure AI Engineer</span>
        </p>
      </div>
      <AgentTrace />
    </section>
  );
}
