// Two-column heading used across the template: title left, short text right.
// Without `text` there is no second column, so the title gets the full width.
// `titleClassName` overrides the width cap and type scale for one-off headings.
export default function SectionHeading({ title, text, titleClassName = "max-w-xs text-3xl sm:text-4xl" }) {
  return (
    <div className={`grid gap-6 md:items-start ${text ? "md:grid-cols-2" : ""}`}>
      <h2 className={`leading-tight ${titleClassName}`}>{title}</h2>
      {text && <p className="text-sm leading-relaxed text-navy/60">{text}</p>}
    </div>
  );
}
