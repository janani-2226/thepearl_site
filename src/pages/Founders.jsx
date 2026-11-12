import { founders, milestones, values } from "../data/site.js";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Founders() {
  return (
    <>
      <PageHeader
        eyebrow="Founders"
        title="Started in a classroom. Built into a group."
        text="The Pearl began with one trainer and one question: why do people who know English still freeze when it is time to speak?"
      />

      {/* Founder profiles */}
      <section className="py-20 sm:py-24">
        <div className="container-site space-y-24">
          {founders.map((f, i) => (
            <article key={f.name} className={`grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="placeholder-img aspect-[4/5] w-full max-w-sm">[{f.name} photograph — 4:5]</div>
              <div>
                <p className="eyebrow">{f.role}</p>
                <h2 className="mt-3 text-4xl">{f.name}</h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-navy/70">
                  {f.bio.map((p) => <p key={p}>{p}</p>)}
                </div>
                <blockquote className="mt-8 border-l-2 border-gold pl-5 font-serif text-xl leading-snug">“{f.quote}”</blockquote>
                {f.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-underline mt-6 inline-block">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading title="What we believe" text="Three ideas sit underneath every programme the group runs." />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-navy pt-5">
                <h3 className="text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading title="How we got here" />
          <ol className="mt-12 border-l border-slate-300">
            {milestones.map((m) => (
              <li key={m.text} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                <p className="font-serif text-xl text-gold">{m.year}</p>
                <p className="mt-1 text-sm text-navy/70">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </>
  );
}
