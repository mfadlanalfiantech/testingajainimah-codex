import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const styles = {
  base: "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  variants: {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-border bg-transparent hover:bg-muted",
    ghost: "bg-transparent hover:bg-muted"
  },
  sizes: {
    sm: "h-9 px-4",
    md: "h-11 px-6",
    lg: "h-12 px-8 text-base"
  }
};

export function buttonVariants({
  variant = "default",
  size = "md",
  className
}: Pick<ButtonProps, "variant" | "size" | "className">) {
  return cn(styles.base, styles.variants[variant], styles.sizes[size], className);
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
