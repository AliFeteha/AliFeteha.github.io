import { personal } from "@/lib/data";
import { getPosts } from "@/lib/posts";

export default function Header() {
  const nav = [
    { label: "Work", href: "/work/" },
    { label: "Research", href: "/research/" },
    ...(getPosts().length ? [{ label: "Writing", href: "/writing/" }] : []),
    { label: "About", href: "/about/" },
  ];
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="/" className="font-display text-lg font-bold tracking-tight">
          Ali Feteha
        </a>
        <nav aria-label="Main" className="flex items-center gap-4 text-[0.95rem] text-muted sm:gap-7">
          {nav.map((n) => (
            <a key={n.href} href={n.href} data-nav className="transition-colors hover:text-ink aria-[current=page]:text-ink aria-[current=page]:underline aria-[current=page]:decoration-accent aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-[6px]">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={personal.cvFile} download className="btn-quiet hidden !py-1.5 text-sm lg:inline-flex">
            Download CV
          </a>
          <button
            id="theme-toggle"
            type="button"
            aria-label="Switch theme"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
