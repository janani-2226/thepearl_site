import { Link } from "react-router-dom";

export default function CtaBand({
  title = "Bring a Pearl programme to your institution",
  text = "Tell us the batch size, the year of study and the dates you have free. We will send back a programme plan and a quote.",
  button = "Request a proposal",
  to = "/contact",
}) {
  return (
    <section className="bg-gold">
      <div className="container-site flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <div className="max-w-md">
          <h2 className="text-3xl leading-tight text-navy-ink sm:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-ink/80">{text}</p>
        </div>
        <Link to={to} className="btn-dark">{button}</Link>
      </div>
    </section>
  );
}
