"use client";

import { motion } from "framer-motion";
import { certifications, education } from "@/lib/data";
import Section from "./Section";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { ExternalLinkIcon, MapPinIcon } from "./Icons";

export default function Certifications() {
  return (
    <Section id="education" eyebrow="Credentials" title="Certifications & Education">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Education */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-2"
        >
          <div className="card card-hover h-full p-6 sm:p-8">
            <span className="chip-accent mb-4">Education</span>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              <a
                href={education.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition-colors hover:text-sky-600 dark:hover:text-sky-400"
              >
                {education.school}
                <ExternalLinkIcon className="mt-1.5 h-4 w-4 shrink-0" />
              </a>
            </h3>
            <p className="mt-2 font-medium text-sky-600 dark:text-sky-400">{education.degree}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Grade: {education.grade} · {education.period}
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <MapPinIcon className="h-3.5 w-3.5" />
              {education.location}
            </p>
            <p className="mt-5 border-l-2 border-sky-500/50 pl-4 text-sm leading-relaxed">
              {education.thesis}
            </p>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:col-span-3"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={fadeUp} className="card card-hover p-5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  {cert.issuer}
                </p>
                <p className="shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400">{cert.date}</p>
              </div>
              <h3 className="mt-2 font-display text-sm font-bold leading-snug text-slate-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{cert.detail}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400"
                >
                  Verify credential <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
