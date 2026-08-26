import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-gold text-navy hover:bg-gold-dark",
  secondary: "border border-navy text-navy hover:bg-surface",
  accent: "bg-gold text-navy hover:bg-gold-dark",
};

export function buttonClassName(variant: ButtonVariant = "primary", className = "") {
  return `inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${variantClasses[variant]} ${className}`;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = buttonClassName(variant, className);

  if (!href) {
    return (
      <span aria-disabled="true" className={`${classes} cursor-not-allowed opacity-70`}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
