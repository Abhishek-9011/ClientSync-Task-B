import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    company: "Founder, Loomcraft Studio",
    review:
      "ClinetSync replaced three spreadsheets and a shared inbox. Our team now sees every lead in real time, and our response time has never been faster.",
    initials: "AS",
  },
  {
    name: "Karan Malhotra",
    company: "Head of Sales, Northbridge",
    review:
      "The dashboard alone is worth it. I can see conversion rates and pipeline health at a glance instead of digging through reports every Monday.",
    initials: "KM",
  },
  {
    name: "Divya Reddy",
    company: "Operations Lead, Verve Agency",
    review:
      "Setup took minutes, and the status tracking keeps our whole team accountable. It genuinely feels like a premium product built for how we work.",
    initials: "DR",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink-50/60 py-24 md:py-32">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
            Testimonials
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Loved by fast-growing sales teams
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1.5"
            >
              <Quote className="h-6 w-6 text-primary-300" />
              <div className="mt-3 flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                {t.review}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary-700">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-950">{t.name}</p>
                  <p className="text-xs text-ink-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
