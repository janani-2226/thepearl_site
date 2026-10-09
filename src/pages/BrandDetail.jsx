import { Link, useParams } from "react-router-dom";
import { brands, getBrand } from "../data/brands.js";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import NotFound from "./NotFound.jsx";

export default function BrandDetail() {
  const { slug } = useParams();
  const brand = getBrand(slug);
  if (!brand) return <NotFound />;

  const idx = brands.findIndex((b) => b.slug === slug);
  const next = brands[(idx + 1) % brands.length];

  return (
    <>
      <PageHeader eyebrow={brand.category} accent={brand.color} title={brand.name} text={brand.summary}>
        <p className="mt-6 font-serif text-xl italic" style={{ color: brand.color === "#4A2F86" ? "#A68BE0" : brand.color }}>
          {brand.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-gold">Enquire about {brand.short}</Link>
          {brand.external && (
            <a href={brand.external.href} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-sm border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              {brand.external.label} ↗
            </a>
          )}
        </div>
      </PageHeader>

      {/* About */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">About {brand.short}</h2>
            <p className="mt-6 text-base leading-relaxed text-navy/70">{brand.intro}</p>
            <div className="placeholder-img mt-10 aspect-[16/9] w-full">[{brand.short} classroom photograph — 16:9]</div>
          </div>
          <aside className="h-fit border-l-4 bg-mist p-8" style={{ borderColor: brand.color }}>
            <h3 className="text-xl">Who it's for</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-navy/70">
              {brand.audience.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: brand.color }} />
                  {a}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl">How it's delivered</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {brand.formats.map((f) => (
                <span key={f} className="rounded-full bg-white px-3 py-1 text-xs text-navy/70">{f}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Programmes */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading title="Programmes" text={`Every ${brand.short} programme can be run as an open batch or delivered on campus for a single institution.`} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {brand.programmes.map((p) => (
              <div key={p.title} className="flex flex-col bg-white p-7" style={{ borderTop: `3px solid ${brand.color}` }}>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy/50">{p.duration}</p>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-navy-ink py-20 text-white">
        <div className="container-site">
          <h2 className="text-3xl sm:text-4xl">By the last session, learners can…</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {brand.outcomes.map((o, i) => (
              <div key={o}>
                <p className="font-serif text-4xl font-light text-gold">0{i + 1}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next brand */}
      <section className="py-14">
        <div className="container-site flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <Link to="/brands" className="link-underline w-fit">← All brands</Link>
          <Link to={`/brands/${next.slug}`} className="group text-right">
            <span className="block text-xs text-navy/50">Next brand</span>
            <span className="font-serif text-2xl transition group-hover:opacity-70" style={{ color: next.color }}>{next.name} →</span>
          </Link>
        </div>
      </section>

    </>
  );
}
