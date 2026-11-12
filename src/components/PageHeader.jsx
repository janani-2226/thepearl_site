// Inner-page hero — same navy + glow language as the home hero, shorter.
export default function PageHeader({ eyebrow, title, text, accent, children }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-white/15 to-transparent" />
      <div className="container-site relative py-20 sm:py-24">
        {eyebrow && (
          <p className="eyebrow flex items-center gap-3">
            {accent && <span className="h-1 w-6 rounded" style={{ background: accent }} />}
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">{text}</p>}
        {children}
      </div>
    </section>
  );
}
