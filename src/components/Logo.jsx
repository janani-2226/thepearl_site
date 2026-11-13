import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  // Navbar (light background): the Pearl logo image. Footer (dark background): text logo, since the image has navy text.
  if (!light) {
    return (
      <Link to="/" className="flex items-center" aria-label="The Pearl — home">
        <img src="https://ik.imagekit.io/vftyrvygo/Pearl%20World/Pearl%20Logo.png" alt="The Pearl Edu Ventures" className="h-10 w-auto sm:h-12" />
      </Link>
    );
  }
  return (
    <Link to="/" className="flex items-center" aria-label="The Pearl — home">
      <span className="leading-none">
        <span className={`block text-[18px] font-bold tracking-[0.22em] ${light ? "text-white" : "text-navy"}`}>
          THE PEARL
        </span>
        <span className={`mt-1.5 block text-[11px] font-semibold tracking-[0.25em] ${light ? "text-white/50" : "text-navy/50"}`}>
          PEARL EDU VENTURES
        </span>
      </span>
    </Link>
  );
}
