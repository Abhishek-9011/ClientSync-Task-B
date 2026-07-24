import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-app">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-primary-500 to-primary-700 px-8 py-16 text-center shadow-glow sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-noise opacity-10" />
          <div className="relative">
            <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Organize Your Leads?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Join hundreds of teams using ClinetSync to capture, track, and
              convert leads faster — all from one dashboard.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-600 shadow-none hover:bg-ink-50 hover:text-primary-700"
                asChild
              >
                <a href="#lead-form">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <a
                href="/admin"
                className="text-sm font-semibold text-white/90 underline-offset-4 hover:underline"
              >
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
