import { Inbox, Activity, LayoutDashboard, SlidersHorizontal, Tags, LineChart } from "lucide-react";

const features = [
  {
    icon: Inbox,
    title: "Lead Collection",
    description:
      "Capture leads automatically from your website, forms, and campaigns into a single, organized inbox.",
  },
  {
    icon: Activity,
    title: "Lead Tracking",
    description:
      "Follow every lead's journey from first touch to closed deal, with a full activity timeline.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-time Dashboard",
    description:
      "Get a live view of pipeline health, conversion rates, and team performance the moment it happens.",
  },
  {
    icon: SlidersHorizontal,
    title: "Search & Filter",
    description:
      "Instantly find any lead by name, email, budget, or status with powerful, fast filtering.",
  },
  {
    icon: Tags,
    title: "Status Management",
    description:
      "Move leads through New, Contacted, and Closed stages with a single click and full audit history.",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    description:
      "Understand what's driving revenue with clear reports on sources, conversion, and team output.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
            Features
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Everything you need to manage leads, in one place
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            ClinetSync brings capture, tracking, and analytics together so your
            team spends less time on spreadsheets and more time closing deals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                <feature.icon className="h-5.5 w-5.5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
