import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { site, navLinks } from "../data/site.js";
import { brands } from "../data/brands.js";

// One column of the footer. Hairline above it while the columns are stacked,
// hairline to its left once they sit side by side.
function Column({ title, className = "", children }) {
  return (
    <div
      className={`border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/10 lg:pl-10 ${className}`}
    >
      <h4 className="eyebrow mb-5">{title}</h4>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-ink text-white/70">
      <div className="container-site grid gap-x-10 gap-y-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_1.1fr_1.2fr] lg:gap-y-0">
        {/* Identity */}
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {site.tagline}
            <br />
            {site.blurb}
          </p>
          <span className="eyebrow mb-1 mt-7 block">Call us</span>
          <a
            href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
            className="text-base font-semibold text-white transition hover:text-gold"
          >
            {site.phone}
          </a>
        </div>

        <Column title="Pages">
          <ul className="space-y-3 text-sm">
            {[...navLinks, { to: "/contact", label: "Contact us" }].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        {/* Each brand carries its own colour, the same cue used on the brand cards. */}
        <Column title="Our brands">
          <ul className="space-y-3 text-sm">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link to="/brands" className="transition hover:text-gold">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        <Column title="Our offices">
          <ul className="space-y-6 text-sm">
            {site.offices.map((o) => (
              <li key={o.label} className="leading-relaxed">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white">
                  {o.label}
                </span>
                {o.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </li>
            ))}
            <li className="leading-relaxed">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white">Hours</span>
              {site.hours}
            </li>
          </ul>
        </Column>
      </div>
    </footer>
  );
}
