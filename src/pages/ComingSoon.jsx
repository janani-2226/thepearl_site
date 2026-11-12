import { Link, useParams } from "react-router-dom";
import { brands } from "../data/brands.js";
import NotFound from "./NotFound.jsx";

// Shown when a brand's Explore button is clicked but its website isn't live yet.
export default function ComingSoon() {
  const { slug } = useParams();
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return <NotFound />;

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: brand.color }}
      />
      <div className="container-site relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        {brand.logo && (
          <div className="mb-10 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-white/10">
            <img src={brand.logo} alt={`${brand.name} logo`} className="h-32 w-auto max-w-[18rem] rounded-xl object-contain sm:h-40 sm:max-w-sm" />
          </div>
        )}
        <p className="eyebrow flex items-center gap-3">
          <span className="h-1 w-6 rounded" style={{ background: brand.color }} />
          {brand.category}
        </p>
        <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">{brand.name}</h1>
        {brand.tagline && <p className="mt-4 font-serif text-xl italic text-white/60">{brand.tagline}</p>}

        <span
          className="mt-10 inline-flex items-center gap-3 rounded-full border px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.25em]"
          style={{ borderColor: brand.color, color: brand.color }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: brand.color }} />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: brand.color }} />
          </span>
          Launching soon
        </span>

        <p className="mt-8 max-w-lg text-base leading-relaxed text-white/60">
          The {brand.short} website is on its way. Until then, get in touch with us for programmes and enquiries.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-gold">Contact us</Link>
          <Link to="/brands" className="inline-flex items-center justify-center rounded-sm border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">
            ← Back to brands
          </Link>
        </div>
      </div>
    </section>
  );
}
