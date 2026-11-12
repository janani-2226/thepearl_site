import { team } from "../data/site.js";
import PageHeader from "../components/PageHeader.jsx";

// Shows the photo if `image` is set in site.js, otherwise a placeholder box.
// `imagePosition` in site.js controls which part of the photo stays visible when it's cropped
// to a square ("top", "center", or e.g. "50% 20%"). Defaults to center.
function Photo({ person, className = "" }) {
  return person.image ? (
    <img
      src={person.image}
      alt={person.name}
      className={`aspect-square w-full object-cover ${className}`}
      style={{ objectPosition: person.imagePosition || "center" }}
      loading="lazy"
    />
  ) : (
    <div className={`placeholder-img aspect-square w-full ${className}`}>[{person.name} — photo 1:1]</div>
  );
}

export default function Team() {
  const { memorial, members } = team;
  return (
    <>
      <PageHeader eyebrow="Team" title="The People Behind Our Purpose" />

      {/* In memoriam */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="grid gap-10 border-l-4 border-gold bg-mist p-8 sm:p-10 md:grid-cols-[0.6fr_1.4fr] md:items-center">
            <Photo person={memorial} className="max-w-xs grayscale" />
            <div>
              <p className="eyebrow">In loving memory</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">{memorial.name}</h2>
              <p className="mt-1 text-sm font-semibold text-gold">{memorial.role}</p>
              {memorial.bio.map((para) => (
                <p key={para} className="mt-4 text-base leading-relaxed text-navy/70">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & brand heads */}
      <section className="pb-20 sm:pb-24">
        <div className="container-site">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((p) => (
              <article key={p.name}>
                <Photo person={p} />
                <h3 className="mt-5 text-xl">{p.name}</h3>
                <p className="text-sm font-semibold text-gold">{p.role}</p>
                {p.bio.map((para) => (
                  <p key={para} className="mt-3 text-sm leading-relaxed text-navy/60">{para}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
