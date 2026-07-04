"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import Section from "./Section";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { MapPinIcon } from "./Icons";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional journey">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-sky-500/60 before:via-slate-300 before:to-transparent dark:before:via-slate-700 sm:before:block sm:pl-10"
      >
        {experience.map((job) => (
          <motion.article key={job.company} variants={fadeUp} className="relative">
            <span className="absolute -left-10 top-7 hidden h-[15px] w-[15px] rounded-full border-2 border-sky-500 bg-white dark:bg-slate-950 sm:block" />
            <div className="card card-hover p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-medium text-sky-600 dark:text-sky-400">{job.company}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold text-slate-700 dark:text-slate-300">{job.period}</p>
                  {job.location && (
                    <p className="mt-1 inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                      <MapPinIcon className="h-3.5 w-3.5" />
                      {job.location}
                    </p>
                  )}
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
