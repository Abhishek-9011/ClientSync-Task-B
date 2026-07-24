import { ArrowRight, PlayCircle, Star, TrendingUp, Search, Bell, LayoutGrid, Users, ListChecks, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "12,400+", label: "Leads captured" },
  { value: "98%", label: "Uptime" },
  { value: "4.9/5", label: "Customer rating" },
];

const leadRows = [
  { name: "Meera Nair", source: "Website", status: "New" },
  { name: "Arjun Verma", source: "Referral", status: "Contacted" },
  { name: "Priya Kapoor", source: "Ad Campaign", status: "Closed" },
];

const statusStyles = {
  New: "bg-sky-50 text-sky-700",
  Contacted: "bg-amber-50 text-amber-700",
  Closed: "bg-emerald-50 text-emerald-700",
};

const bars = [40, 65, 50, 80, 60, 95, 70, 55, 85, 62, 90, 75];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary-100 via-primary-50 to-transparent opacity-70 blur-3xl" />
      </div>

      <div className="container-app grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        {/* Left column */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700">
            <Star className="h-3.5 w-3.5 fill-primary-500 text-primary-500" />
            Trusted by 500+ growing sales teams
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] text-ink-950 sm:text-5xl lg:text-[3.4rem]">
            Capture Every Lead.
            <br />
            <span className="text-primary-500">Grow Every Opportunity.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
            ClinetSync helps businesses collect, organize, track, and manage
            customer leads from one beautiful dashboard — so no opportunity
            ever slips through the cracks.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <a href="#lead-form">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">
                <PlayCircle className="h-4 w-4" />
                See How It Works
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink-100 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-ink-950">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs font-medium text-ink-500">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column — dashboard mockup */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto max-w-xl rounded-2xl border border-ink-100 bg-white p-3 shadow-soft-lg lg:mx-0">
            {/* window chrome */}
            <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            </div>

            <div className="rounded-xl border border-ink-100 bg-ink-50/60 p-4">
              {/* top bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-500 text-white">
                    <LayoutGrid className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-display text-sm font-bold text-ink-950">
                    Dashboard Overview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500">
                    <Search className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500">
                    <Bell className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              {/* stat cards */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-ink-100 bg-white p-3">
                  <Users className="h-4 w-4 text-primary-500" />
                  <p className="mt-2 font-display text-lg font-bold text-ink-950">1,284</p>
                  <p className="text-[11px] font-medium text-ink-500">Total Leads</p>
                </div>
                <div className="rounded-xl border border-ink-100 bg-white p-3">
                  <ListChecks className="h-4 w-4 text-primary-500" />
                  <p className="mt-2 font-display text-lg font-bold text-ink-950">312</p>
                  <p className="text-[11px] font-medium text-ink-500">New This Week</p>
                </div>
                <div className="rounded-xl bg-primary-500 p-3 text-white shadow-glow">
                  <TrendingUp className="h-4 w-4" />
                  <p className="mt-2 font-display text-lg font-bold">68.4%</p>
                  <p className="text-[11px] font-medium text-white/80">Conversion Rate</p>
                </div>
              </div>

              {/* chart card */}
              <div className="mt-3 rounded-xl border border-ink-100 bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-ink-800">Lead Activity</p>
                  <BarChart3 className="h-3.5 w-3.5 text-ink-400" />
                </div>
                <div className="mt-4 flex h-20 items-end gap-1.5">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-primary-500 to-primary-300"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* lead table */}
              <div className="mt-3 rounded-xl border border-ink-100 bg-white p-4">
                <p className="text-xs font-semibold text-ink-800">Recent Leads</p>
                <div className="mt-3 space-y-2.5">
                  {leadRows.map((row) => (
                    <div key={row.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-[10px] font-bold text-ink-600">
                          {row.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-ink-900">{row.name}</p>
                          <p className="text-[10px] text-ink-400">{row.source}</p>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusStyles[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -left-6 top-16 hidden animate-float-slow rounded-xl border border-ink-100 bg-white px-4 py-3 shadow-soft-lg sm:block">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-xs font-semibold text-ink-800">
              Loved by 500+ sales teams
            </p>
          </div>

          <div className="absolute -bottom-8 -right-4 hidden w-44 animate-float-slow rounded-xl bg-primary-500 p-4 text-white shadow-glow [animation-delay:1s] sm:block">
            <p className="text-[11px] font-medium text-white/80">Pipeline Health</p>
            <p className="mt-1 font-display text-2xl font-bold">92.6%</p>
            <p className="mt-1 text-[10px] leading-relaxed text-white/80">
              Up 18% from last month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
