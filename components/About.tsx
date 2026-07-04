"use client";

import { motion } from "framer-motion";
import { summary } from "@/lib/data";
import Section from "./Section";
import { fadeUp, stagger, viewportOnce } from "./motion";

const pillars = [
  {
    title: "Multi-Agent & Agentic AI",
    text: "Designing multi-agent architectures with Semantic Kernel and agentic frameworks that automate complex, multi-step enterprise workflows.",
  },
  {
    title: "RAG & Intelligent Search",
    text: "Building RAG pipelines and AI-powered chatbots with semantic search over large enterprise knowledge bases for accurate, context-aware responses.",
  },
  {
    title: "Azure AI Platform Engineering",
    text: "Architecting and deploying production AI solutions end-to-end on Azure — AI Services, AI Search, Container Apps, Functions, Speech, and Storage.",
  },
  {
    title: "Applied Research",
    text: "IEEE-published researcher in Arabic OCR — translating deep learning R&D into measurable, state-of-the-art competitive results.",
  },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="From R&D to production AI">
      <div className="grid gap-10 lg:grid-cols-5">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-5 text-base leading-relaxed lg:col-span-2"
        >
          {summary.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:col-span-3"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={fadeUp} className="card card-hover p-6">
              <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{pillar.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
