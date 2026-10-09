import { Link } from "react-router-dom";
import { brands } from "../data/brands.js";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const finder = [
  { who: "A school wanting confident speakers", slug: "beehive" },
  { who: "A college preparing for placements", slug: "project-punch" },
  { who: "A parent looking for Class 6–12 tuition", slug: "smart3-tuitions" },
  { who: "An adult who wants to fix their grammar", slug: "abacus-of-english" },
  { who: "An event, staff room or leadership team", slug: "shyamraj" },
];

export default function Brands() {
  return (
    <>
      <PageHeader
        eyebrow="Our brands"
        title="Five brands. One training method."
        text="Each Pearl brand is built for one kind of learner. They share a faculty, an assessment system and a single standard for what a good session looks like."
      />

      {/* Brand cards */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {brands.map((b, i) => (
            <Link
              key={b.slug}
              to={`/brands/${b.slug}`}
              className={`group flex flex-col border border-slate-200 bg-white p-8 transition hover:-translate-y-0.5 hover:shadow-lg ${
                i === brands.length - 1 ? "md:col-span-2" : ""
              }`}
              style={{ borderTop: `4px solid ${b.color}` }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: b.color }}>
                {b.category}
              </p>
              <h2 className="mt-3 text-3xl">{b.name}</h2>
              <p className="mt-1 text-sm text-navy/50">{b.tagline}</p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-navy/70">{b.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {b.audience.slice(0, 3).map((a) => (
                  <span key={a} className="rounded-full bg-mist px-3 py-1 text-xs text-navy/70">{a}</span>
                ))}
              </div>
              <span className="mt-6 text-sm font-semibold" style={{ color: b.color }}>
                Explore {b.short} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Which brand */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            title="Not sure which one?"
            text="Start with who the learner is. If your group sits across two brands, we will put together a combined plan."
          />
          <div className="mt-12 border-t border-slate-300">
            {finder.map((f) => {
              const b = brands.find((x) => x.slug === f.slug);
              return (
                <Link key={f.slug} to={`/brands/${b.slug}`} className="group flex items-center justify-between gap-6 border-b border-slate-300 py-5">
                  <span className="text-base">{f.who}</span>
                  <span className="flex items-center gap-3 text-sm font-semibold" style={{ color: b.color }}>
                    <span className="hidden h-1 w-6 rounded sm:block" style={{ background: b.color }} />
                    {b.short}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shared method */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading title="What every brand shares" />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              ["One faculty", "Every trainer is hired, trained and observed by the group before taking a batch under any brand."],
              ["One assessment", "Learners are assessed on day one and on the last day against the same rubric, whatever the brand."],
              ["One report", "Institutions get a single report format showing attendance, scores and trainer notes."],
            ].map(([t, d]) => (
              <div key={t} className="border-t-2 border-navy pt-5">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
