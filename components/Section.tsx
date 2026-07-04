"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./motion";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10 sm:mb-14"
        >
          <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-400">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
