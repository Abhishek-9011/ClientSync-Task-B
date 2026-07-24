import { CheckCircle2, PieChart, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Unified dashboard for every lead, from every channel",
  "Automated status updates so nothing falls through the cracks",
  "Role-based access for founders, sales reps, and admins",
  "Exportable reports for weekly and monthly reviews",
];

export default function WhyChoose() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container-app grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left: dashboard mockup */}
        <div className="order-2 lg:order-1">
          <div className="rounded-2xl bg-ink-950 p-8 shadow-soft-lg sm:p-10">
            <div className="flex items-center justify-between">
              <p className="font-display text-sm font-semibold text-white">
                Team Performance
              </p>
              <PieChart className="h-4 w-4 text-primary-400" />
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full"
                style={{
                  background:
                    "conic-gradient(#f4581a 0% 68%, rgba(255,255,255,0.12) 68% 100%)",
                }}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-ink-950">
                  <span className="font-display text-2xl font-bold text-white">68%</span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-white/50">Closed this month</p>
                  <p className="font-display text-lg font-bold text-white">214 leads</p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Avg. response time</p>
                  <p className="font-display text-lg font-bold text-white">4.2 hrs</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              {["Website Leads", "Referral Leads", "Ad Campaigns"].map((label, i) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span>{label}</span>
                    <span>{[74, 52, 38][i]}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/10">
                    <div
                      className="h-1.5 rounded-full bg-primary-500"
                      style={{ width: `${[74, 52, 38][i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="order-1 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
            Why ClinetSync
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Built for teams who can't afford to lose a lead
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            Spreadsheets break down as you grow. ClinetSync gives your team a
            single source of truth for every lead — with the visibility and
            speed a modern sales process needs.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                <span className="text-ink-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex items-center gap-4">
            <Button size="lg" asChild>
              <a href="#lead-form">Start Managing Leads</a>
            </Button>
            <div className="flex items-center gap-2 text-sm text-ink-500">
              <Clock3 className="h-4 w-4" />
              Setup in under 5 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
