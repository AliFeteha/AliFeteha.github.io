"use client";

import { motion } from "framer-motion";
import { publications } from "@/lib/data";
import Section from "./Section";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { ExternalLinkIcon } from "./Icons";

export default function Publications() {
  return (
    <Section id="publications" eyebrow="Research" title="Publications">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6"
      >
        {publications.map((pub) => (
          <motion.article key={pub.doi} variants={fadeUp} className="card card-hover p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="chip-accent mb-3">{pub.badge}</span>
                <h3 className="font-display text-xl font-bold leading-snug text-slate-900 dark:text-white">
                  {pub.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                  {pub.authors} ({pub.year}). <em>{pub.venue}</em>.
                </p>
                {pub.note && <p className="mt-3 text-sm leading-relaxed">{pub.note}</p>}
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                  DOI: {pub.doi}
                </p>
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-5 py-2.5 text-sm font-semibold text-sky-600 transition-all hover:-translate-y-0.5 hover:bg-sky-500/20 dark:text-sky-400"
              >
                Read paper <ExternalLinkIcon />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
