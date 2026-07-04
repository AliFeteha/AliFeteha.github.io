import { personal } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-slate-800/70">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {personal.name} · AI Engineer
        </p>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-sky-500"
          >
            <GitHubIcon />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-sky-500"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="transition-colors hover:text-sky-500"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
