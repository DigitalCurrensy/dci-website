/* eslint-disable @next/next/no-img-element */
import type { MouseEventHandler } from "react";
import Link from "next/link";
import { globalContent, mediaPaths } from "@/data/siteContent";

type LogoProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  variant?: "header" | "footer";
};

export function Logo({ className = "", onClick, variant = "header" }: LogoProps) {
  const classes = ["brand-lockup", variant === "footer" ? "brand-lockup-footer" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={classes} href="/" onClick={onClick}>
      <span className="brand-mark">
                <img src={mediaPaths.logoMark} alt="Digital Currensy Inc. logo mark" />
      </span>
      <span>
        <strong>{globalContent.shortCompanyName}</strong>
        <small>{globalContent.companyName.toUpperCase()}</small>
      </span>
    </Link>
  );
}
