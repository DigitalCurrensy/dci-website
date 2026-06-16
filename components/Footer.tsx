import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  dashboardLogin,
  footerContent,
  globalContent,
  navItems,
  socialLinks,
} from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Logo variant="footer" />
        <p>{footerContent.body}</p>
        <a href={`mailto:${globalContent.contactEmail}`}>{globalContent.contactEmail}</a>
      </div>

      <div className="footer-links">
        {navItems.map((item) =>
          item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ) : (
            <Link key={item.href} href={item.href}>
              {item.cta ? footerContent.getInviteLabel : item.label}
            </Link>
          )
        )}
        <a href={dashboardLogin.href} target="_blank" rel="noopener noreferrer">
          {dashboardLogin.footerLabel}
        </a>
      </div>

      <div className="footer-socials">
        {socialLinks.map((link) => (
          <a href={link.url} key={link.label} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>

      <div className="footer-legal">
        {footerContent.legalLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <span>{footerContent.copyright}</span>
      </div>
    </footer>
  );
}
