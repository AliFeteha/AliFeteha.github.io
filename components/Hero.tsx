"use client";

import { motion } from "framer-motion";
import { personal, summary } from "@/lib/data";
import { fadeUp, stagger } from "./motion";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/15 animate-pulse-slow" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/15" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="container-page relative py-16 sm:py-24"
      >
        <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
          <span className="chip inline-flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5" />
            {personal.location}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 font-display text-xl font-semibold sm:text-2xl lg:text-3xl"
        >
          <span className="heading-gradient">{personal.headline}</span>
        </motion.p>

        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
          {summary.intro}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/30"
          >
            Get in touch
          </a>
          <a
            href={personal.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-400 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-sky-500"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>
          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-slate-300 bg-white/60 p-3 text-slate-600 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
            >
              <GitHubIcon />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-slate-300 bg-white/60 p-3 text-slate-600 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="rounded-xl border border-slate-300 bg-white/60 p-3 text-slate-600 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
            >
              <MailIcon />
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-2">
          {summary.specialties.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
