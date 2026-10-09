import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="The Pearl — home">
      <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_3px_rgba(196,137,26,0.18)]" />
      <span className="leading-none">
        <span className={`block text-[13px] font-bold tracking-[0.22em] ${light ? "text-white" : "text-navy"}`}>
          THE PEARL
        </span>
        <span className={`mt-1 block text-[8px] font-semibold tracking-[0.25em] ${light ? "text-white/50" : "text-navy/50"}`}>
          PEARL EDU VENTURES
        </span>
      </span>
    </Link>
  );
}
