export default function PageHead({ title, note, children }: { title: string; note?: string; children?: React.ReactNode }) {
  return (
    <div className="wrap pb-10 pt-14 md:pb-14 md:pt-20">
      <h1 className="font-display text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[3.2rem]">{title}</h1>
      {note && <p className="mt-4 max-w-[40rem] text-lg text-muted">{note}</p>}
      {children}
    </div>
  );
}
