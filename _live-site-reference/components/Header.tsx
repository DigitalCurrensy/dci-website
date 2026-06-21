"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { Logo } from "@/components/Logo";
import { dashboardLogin, navItems } from "@/data/siteContent";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Logo onClick={() => setOpen(false)} />

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={open ? "primary-nav primary-nav-open" : "primary-nav"}>
        {navItems.map((item) => {
          const active =
            !item.external &&
            (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));
          const className = `nav-link ${item.cta ? "nav-cta" : ""} ${
            active ? "nav-active" : ""
          }`;

          const navItem = item.external ? (
            <a
              key={item.href}
              className={className}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.href}
              className={className}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );

          if (!item.cta) {
            return navItem;
          }

          return (
            <Fragment key="dashboard-login-and-invite">
              <a
                className="nav-link nav-login"
                href={dashboardLogin.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {dashboardLogin.headerLabel}
              </a>
              {navItem}
            </Fragment>
          );
        })}
      </nav>
    </header>
  );
}
