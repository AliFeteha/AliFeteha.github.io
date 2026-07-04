"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import Section from "./Section";
import { fadeUp, stagger, viewportOnce } from "./motion";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Expertise" title="Technical skills">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group) => (
          <motion.div key={group.category} variants={fadeUp} className="card card-hover p-6">
            <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
