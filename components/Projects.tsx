"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import Section from "./Section";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";

function ProjectLinks({ project }: { project: Project }) {
  const pills = [
    project.paper && { label: "Paper", href: project.paper },
    project.arxiv && { label: "arXiv", href: project.arxiv },
    project.demo && { label: "Live demo", href: project.demo },
  ].filter(Boolean) as { label: string; href: string }[];

  if (pills.length === 0 && !project.github) return null;

  return (
    <div className="flex items-center gap-2">
      {pills.map((pill) => (
        <a
          key={pill.label}
          href={pill.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-600 transition-all hover:-translate-y-0.5 hover:bg-sky-500/20 dark:text-sky-400"
        >
          {pill.label}
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </a>
      ))}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — source code on GitHub`}
          title="View source on GitHub"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 p-2 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-400"
        >
          <GitHubIcon className="h-[18px] w-[18px]" />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" eyebrow="Portfolio" title="Featured projects">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6"
      >
        {/* Flagship project — full width */}
        <motion.article variants={fadeUp} className="card card-hover relative overflow-hidden p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
          />
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="chip-accent mb-3">Flagship · IEEE Published · {featured.highlight}</span>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{featured.subtitle}</p>
              </div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{featured.period}</p>
            </div>
            <ul className="mt-5 grid gap-2.5 lg:grid-cols-2">
              {featured.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <ProjectLinks project={featured} />
            </div>
          </div>
        </motion.article>

        {/* Remaining projects — grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <motion.article key={project.title} variants={fadeUp} className="card card-hover flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                {project.highlight && <span className="chip-accent shrink-0">{project.highlight}</span>}
              </div>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{project.period}</p>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p>
              <ul className="mt-4 flex-1 space-y-2.5">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <ProjectLinks project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
