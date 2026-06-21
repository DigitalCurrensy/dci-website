import Link from "next/link";
import type { ReactNode } from "react";

type ChromeButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function ChromeButton({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}: ChromeButtonProps) {
  const classes = `chrome-button chrome-button-${variant} ${className}`;

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      <span>{children}</span>
    </Link>
  );
}
