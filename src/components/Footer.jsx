import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { site, navLinks } from "../data/site.js";
import { brands } from "../data/brands.js";

export default function Footer() {
  return (
    <footer className="bg-navy-ink text-white/70">
      <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed">
            {site.tagline}
            <br />
            {site.blurb}
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-sm font-semibold text-white">Pages</h4>
          <ul className="space-y-2.5 text-sm">
            {[...navLinks, { to: "/contact", label: "Contact us" }].map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-gold">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-sm font-semibold text-white">Our brands</h4>
          <ul className="space-y-2.5 text-sm">
            {brands.map((b) => (
              <li key={b.slug}><Link to={`/brands/${b.slug}`} className="hover:text-gold">{b.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-sm font-semibold text-white">Reach us</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a></li>
            <li>{site.phone}</li>
            <li className="leading-relaxed">{site.address.map((l) => <span key={l} className="block">{l}</span>)}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.legal}. All rights reserved.</span>
          <span>{site.instagram}</span>
        </div>
      </div>
    </footer>
  );
}
