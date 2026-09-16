import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "kicker mb-2 block text-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
