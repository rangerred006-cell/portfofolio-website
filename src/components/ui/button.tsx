import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  href?: string;      // kalau diisi, render <a>
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", href, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    const variants = {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/80 px-6 py-3 shadow-lg hover:shadow-primary/50",
      outline:
        "border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground px-6 py-3",
      ghost: "hover:bg-secondary hover:text-foreground px-4 py-2",
    } as const;

    const classes = cn(base, variants[variant], className);

    if (href) {
      return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <a href={href} className={classes} {...(props as any)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";