import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { site } from "../data/site.js";
import { brands } from "../data/brands.js";
import PageHeader from "../components/PageHeader.jsx";

const enquiryTypes = [
  { value: "institution", label: "Programme for my institution" },
  { value: "individual", label: "Joining a batch myself" },
  { value: "parent", label: "Tuition for my child" },
  { value: "speaking", label: "Booking Shyamraj to speak" },
  { value: "careers", label: "Joining the faculty" },
];

export default function Contact() {
  const [params] = useSearchParams();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", organisation: "",
    type: params.get("type") || "institution", brand: "", message: "",
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your backend, Formspree, EmailJS or a Google Sheet webhook.
    console.log("Enquiry", form);
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Tell us who you want to teach."
        text="Share the batch size, the year of study and the dates you have free. We reply to every enquiry within [two] working days."
      />

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form */}
          <div>
            {sent ? (
              <div className="border-l-4 border-gold bg-mist p-8">
                <h2 className="text-3xl">Thank you, {form.name.split(" ")[0] || "there"}.</h2>
                <p className="mt-3 text-sm text-navy/70">
                  We have your enquiry and will get back to you at {form.email}. If it is urgent, call us on {site.phone}.
                </p>
                <button onClick={() => setSent(false)} className="link-underline mt-6">Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold">I'm enquiring about</span>
                  <select className="field" value={form.type} onChange={set("type")}>
                    {enquiryTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </label>
                <label>
                  <span className="mb-2 block text-sm font-semibold">Full name *</span>
                  <input required className="field" value={form.name} onChange={set("name")} />
                </label>
                <label>
                  <span className="mb-2 block text-sm font-semibold">Email *</span>
                  <input required type="email" className="field" value={form.email} onChange={set("email")} />
                </label>
                <label>
                  <span className="mb-2 block text-sm font-semibold">Phone</span>
                  <input type="tel" className="field" value={form.phone} onChange={set("phone")} />
                </label>
                <label>
                  <span className="mb-2 block text-sm font-semibold">Institution / company</span>
                  <input className="field" value={form.organisation} onChange={set("organisation")} />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold">Brand (if you know)</span>
                  <select className="field" value={form.brand} onChange={set("brand")}>
                    <option value="">Not sure yet</option>
                    {brands.map((b) => <option key={b.slug} value={b.slug}>{b.name}</option>)}
                  </select>
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold">Message *</span>
                  <textarea
                    required rows={6} className="field resize-y" value={form.message} onChange={set("message")}
                    placeholder="Batch size, year of study, preferred dates, anything else we should know."
                  />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-dark">Send enquiry</button>
                </div>
              </form>
            )}
          </div>

          {/* Details */}
          <aside className="space-y-8">
            {[
              ["Email", <a key="e" href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a>],
              ["Phone", site.phone],
              ["Office", site.address.map((l) => <span key={l} className="block">{l}</span>)],
              ["Hours", site.hours],
              ["Instagram", site.instagram],
            ].map(([label, value]) => (
              <div key={label} className="border-t-2 border-navy pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/50">{label}</p>
                <div className="mt-2 text-base">{value}</div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-site">
          <div className="placeholder-img aspect-[21/9] w-full">[Google Maps embed — office location]</div>
        </div>
      </section>
    </>
  );
}
