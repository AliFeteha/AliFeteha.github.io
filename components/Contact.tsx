"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import Section from "./Section";
import { fadeUp, stagger, viewportOnce } from "./motion";
import {
  DownloadIcon,
  GitHubIcon,
  GlobeIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons";

const channels = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
    icon: PhoneIcon,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "ali-ibrahim-600520237",
    href: personal.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "AliFeteha",
    href: personal.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "Portfolio",
    value: "alifeteha.github.io",
    href: personal.portfolio,
    icon: GlobeIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something intelligent">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="max-w-xl text-base leading-relaxed sm:text-lg">
            Whether it&apos;s multi-agent systems, RAG pipelines, or end-to-end Azure AI platforms —
            I&apos;m always happy to talk about my work and challenging AI problems. Reach out
            through any channel.
          </p>
          <a
            href={personal.cvFile}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/30"
          >
            <DownloadIcon className="h-4 w-4" />
            Download my CV
          </a>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2"
        >
          {channels.map((channel) => (
            <motion.a
              key={channel.label}
              variants={fadeUp}
              href={channel.href}
              {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="card card-hover flex items-center gap-4 p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <channel.icon />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {channel.label}
                </span>
                <span className="block truncate text-sm font-medium text-slate-900 dark:text-white">
                  {channel.value}
                </span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
