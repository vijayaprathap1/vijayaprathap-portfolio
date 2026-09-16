import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-36 w-full resize-y rounded-sm bg-bg px-3.5 py-3 text-base text-fg shadow-[inset_0_0_0_1px_var(--color-border)] outline-none transition-[box-shadow] duration-150 ease-out placeholder:text-subtle md:text-sm",
        "focus-visible:shadow-[inset_0_0_0_1px_var(--color-fg)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
