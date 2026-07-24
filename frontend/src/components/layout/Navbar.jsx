import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-lg shadow-soft border-b border-ink-100"
          : "bg-transparent"
      )}
    >
      <nav className="container-app flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-white shadow-glow">
            <Workflow className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold text-ink-950">
            ClinetSync
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink-700 transition-colors hover:text-primary-600"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-primary-600",
                    isActive ? "text-primary-600" : "text-ink-700"
                  )
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Button asChild size="default">
            <a href="/#contact">Get Started</a>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-ink-700"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-ink-700"
                >
                  {link.label}
                </Link>
              )
            )}
            <Button asChild className="w-full">
              <a href="/#contact" onClick={() => setOpen(false)}>
                Get Started
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
