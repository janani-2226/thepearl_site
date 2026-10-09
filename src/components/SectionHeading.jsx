// Two-column heading used across the template: title left, short text right.
export default function SectionHeading({ title, text }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-start">
      <h2 className="max-w-xs text-3xl leading-tight sm:text-4xl">{title}</h2>
      {text && <p className="text-sm leading-relaxed text-navy/60">{text}</p>}
    </div>
  );
}
