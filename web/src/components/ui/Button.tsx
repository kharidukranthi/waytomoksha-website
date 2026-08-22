import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-teal text-white hover:bg-teal-dark",
  secondary: "border border-navy text-navy hover:bg-surface",
  accent: "bg-saffron text-white hover:bg-saffron/90",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${variantClasses[variant]}`;

  if (!href) {
    return (
      <span aria-disabled="true" className={`${className} cursor-not-allowed opacity-70`}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
