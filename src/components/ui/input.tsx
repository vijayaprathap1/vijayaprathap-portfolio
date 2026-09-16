import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-sm bg-bg px-3.5 text-base text-fg shadow-[inset_0_0_0_1px_var(--color-border)] outline-none transition-[box-shadow] duration-150 ease-out placeholder:text-subtle md:text-sm",
        "focus-visible:shadow-[inset_0_0_0_1px_var(--color-fg)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
