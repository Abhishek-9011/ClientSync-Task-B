import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-50 text-primary-700",
        new: "bg-sky-50 text-sky-700",
        contacted: "bg-amber-50 text-amber-700",
        closed: "bg-emerald-50 text-emerald-700",
        outline: "border border-ink-200 text-ink-700",
        dark: "bg-ink-950 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
