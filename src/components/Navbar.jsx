import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { navLinks } from "../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm transition hover:text-navy ${
      isActive ? "text-navy font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-navy" : "text-navy/60"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-mist/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="rounded-sm bg-navy px-4 py-2 text-sm font-semibold text-gold transition hover:bg-navy-deep">
            Contact us
          </Link>
        </nav>
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-mist md:hidden">
          <div className="container-site flex flex-col py-3">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => `py-3 text-base ${isActive ? "font-semibold text-navy" : "text-navy/70"}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-dark mt-2">Contact us</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
