"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import Section from "./Section";
import { fadeUp, stagger, viewportOnce } from "./motion";

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Impact" title="Achievements at a glance">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {achievements.map((item) => (
          <motion.div key={item.label} variants={fadeUp} className="card card-hover p-6 text-center">
            <p className="font-display text-4xl font-bold tracking-tight">
              <span className="heading-gradient">{item.stat}</span>
            </p>
            <p className="mt-2 font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
