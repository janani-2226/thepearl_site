import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-navy py-32 text-white">
      <div className="container-site">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl">This page isn't here.</h1>
        <p className="mt-4 text-white/60">The link may be old, or the page may have moved.</p>
        <Link to="/" className="btn-gold mt-8">Back to home</Link>
      </div>
    </section>
  );
}
