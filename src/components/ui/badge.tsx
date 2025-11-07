import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300",
        variant === "default" &&
          "bg-primary/10 text-primary border border-primary/50 hover:bg-primary/20",
        variant === "secondary" &&
          "bg-secondary text-secondary-foreground",
        variant === "outline" &&
          "border border-primary/50 text-foreground hover:border-primary",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
