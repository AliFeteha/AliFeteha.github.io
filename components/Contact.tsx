import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink py-20 text-bg md:py-24">
      <div className="wrap">
        <h2 className="max-w-3xl font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem]">
          Have an AI project that needs to reach production? Let’s talk.
        </h2>
        <a
          href={`mailto:${personal.email}`}
          className="mt-7 inline-block break-all font-display text-[1.35rem] font-bold underline decoration-bg/30 decoration-2 underline-offset-[6px] hover:decoration-bg sm:text-[1.8rem]"
        >
          {personal.email}
        </a>
        <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-bg/75">
          <a className="hover:text-bg" href={personal.phoneHref}>{personal.phone}</a>
          <a className="hover:text-bg" href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hover:text-bg" href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-bg" href={personal.cvFile} download>Download CV (PDF)</a>
        </div>
        <p className="mt-14 text-sm text-bg/55">© {new Date().getFullYear()} Ali Feteha. Based in {personal.location}.</p>
      </div>
    </footer>
  );
}
