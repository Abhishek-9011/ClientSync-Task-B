import * as React from "react";
import { cn } from "@/utils/cn";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-xl border border-ink-200 bg-white px-4 py-2 text-sm text-ink-900 placeholder:text-ink-400 transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:border-primary-400",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-200",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
