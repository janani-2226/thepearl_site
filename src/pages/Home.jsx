import { Link } from "react-router-dom";
import { brands } from "../data/brands.js";
import { stats, founders } from "../data/site.js";
import SectionHeading from "../components/SectionHeading.jsx";

const pillars = [
  {
    title: "Programmes we run",
    text: "Spoken English, communication, interview and placement readiness, and academic tuition. Every programme is written in-house, taught by our own trainers, and revised each year against how learners actually perform.",
  },
  {
    title: "Who we work with",
    text: "Schools, arts and science colleges, engineering campuses, teacher groups and corporate teams across Tamil Nadu — plus individual learners who join our open batches.",
  },
  {
    title: "What sits underneath",
    text: "Shared assessment, attendance and reporting across all five brands, so an institution can see exactly what changed between the first class and the last one.",
  },
];

export default function Home() {
  const founder = founders[0];
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
        <div className="container-site relative pt-20 sm:pt-28">
          <h1 className="max-w-xl text-5xl leading-[1.05] sm:text-6xl">Five ways to teach one thing well.</h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/50">
            Pearl Edu Ventures builds and runs learning brands in Chennai. Each one takes a single audience — a school, a
            campus, a working professional, a Class 10 student — and teaches them to use English with confidence.
          </p>
          <Link to="/brands" className="btn-gold mt-8">See the brands</Link>

          <div className="mt-16 grid grid-cols-2 border-t border-white/15 sm:mt-20 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((b, i) => (
              <Link
                key={b.slug}
                to="/brands"
                className={`group px-4 py-6 transition hover:bg-white/5 sm:px-5 ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}
              >
                <span className="block h-1 w-6 rounded" style={{ background: b.color }} />
                <span className="mt-4 block font-serif text-base text-white">{b.short}</span>
                <span className="mt-1 block text-xs text-white/50">{b.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE GROUP DOES */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            title="What the group does"
            text="The Pearl is the company behind the brands. We design the programmes, train the faculty, run the delivery and hold the standard across every classroom that carries one of our names."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="border-t-2 border-navy pt-5">
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE BRANDS */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            title="The brands"
            text="Different names, different rooms, one training method. Pick the one that matches your learner."
          />
          <div className="mt-12 border-t border-slate-300">
            {brands.map((b) => (
              <Link
                key={b.slug}
                to="/brands"
                className="group grid gap-4 border-b border-slate-300 py-7 md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-10"
              >
                <div className="flex gap-4">
                  <span className="w-1 shrink-0 rounded" style={{ background: b.color }} />
                  <div>
                    <h3 className="text-2xl leading-tight">{b.name}</h3>
                    <p className="mt-1 text-xs text-navy/50">{b.tagline}</p>
                  </div>
                </div>
                <p className="pl-5 text-sm leading-relaxed text-navy/60 md:pl-0">{b.summary}</p>
                <span className="pl-5 text-sm font-semibold transition group-hover:translate-x-1 md:pl-0" style={{ color: b.color }}>
                  Read more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy-ink py-20 text-white">
        <div className="container-site grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl font-light text-gold sm:text-5xl">[{s.value}]</p>
              <p className="mt-3 max-w-[12rem] text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="placeholder-img aspect-[4/5] w-full max-w-sm">[Founder photograph — 4:5]</div>
          <figure>
            <blockquote className="font-serif text-2xl leading-snug sm:text-3xl">“[{founder.quote}]”</blockquote>
            <figcaption className="mt-6 text-sm text-navy/60">{founder.name} — Founder, Pearl Edu Ventures</figcaption>
            <Link to="/founders" className="link-underline mt-6 inline-block">Meet the founders</Link>
          </figure>
        </div>
      </section>

    </>
  );
}
