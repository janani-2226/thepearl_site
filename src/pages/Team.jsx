import { Link } from "react-router-dom";
import { team } from "../data/site.js";
import { brands } from "../data/brands.js";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const colorFor = (short) => brands.find((b) => b.short === short)?.color ?? "#C4891A";

export default function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="The people in the room."
        text="Every Pearl session is taught by a trainer from our own faculty — hired, trained and observed by the group before they take a batch."
      />

      {/* Leadership */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading title="Leadership" text="The team that designs the programmes, runs delivery and holds the standard across all five brands." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.leadership.map((p) => (
              <div key={p.role}>
                <div className="placeholder-img aspect-square w-full">[Photo — 1:1]</div>
                <h3 className="mt-5 text-xl">{p.name}</h3>
                <p className="text-sm font-semibold text-gold">{p.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading title="Faculty" text="Trainers and tutors across the group. Most teach under more than one brand." />
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.faculty.map((p, i) => (
              <div key={i} className="bg-white p-5" style={{ borderTop: `3px solid ${colorFor(p.brand)}` }}>
                <div className="placeholder-img aspect-square w-full">[Photo]</div>
                <h3 className="mt-4 text-lg">{p.name}</h3>
                <p className="text-xs text-navy/60">{p.role}</p>
                <p className="mt-2 text-xs font-semibold" style={{ color: colorFor(p.brand) }}>{p.brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How trainers join */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading title="How a trainer joins" />
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {[
              ["Demo session", "Every applicant teaches a 20-minute live session to our faculty lead."],
              ["Pearl method training", "[2] weeks learning the session plans, assessment rubric and reporting."],
              ["Shadow batches", "Co-teaching alongside a senior trainer before running a room alone."],
              ["Ongoing observation", "Every trainer is observed and scored at least once a term."],
            ].map(([t, d], i) => (
              <div key={t}>
                <p className="font-serif text-4xl font-light text-gold">0{i + 1}</p>
                <h3 className="mt-3 text-lg">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-navy-ink py-16 text-white">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl">Want to teach with us?</h2>
            <p className="mt-3 max-w-lg text-sm text-white/60">
              We are always looking for trainers who can hold a room. Send us your profile and a short video of you teaching.
            </p>
          </div>
          <Link to="/contact?type=careers" className="btn-gold">Apply to join the faculty</Link>
        </div>
      </section>

    </>
  );
}
