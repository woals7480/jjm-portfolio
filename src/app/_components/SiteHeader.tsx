"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";
import * as s from "./SiteHeader.css";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SiteHeaderProps = {
  logoText?: string;
  logoHref?: string;
  navItems?: NavItem[];
  cta?: { label: string; href: string; external?: boolean };
  sticky?: boolean;
  className?: string;
};

export default function SiteHeader({
  logoText = "Portfolio",
  logoHref = "/",
  navItems = [],
  cta,
  sticky: isSticky = true,
  className = "",
}: SiteHeaderProps) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className={clsx(s.siteHeader, isSticky && s.sticky, className)}>
      <a href="#content" className={s.skipLink}>
        Skip to content
      </a>

      <div className={s.inner}>
        <div className={s.left}>
          <Link href={logoHref} className={s.logo} aria-label="Home">
            <LogoMark />
            <span className={s.logoText}>{logoText}</span>
          </Link>
        </div>

        <nav
          id="primary-nav"
          className={clsx(s.nav, open && s.navOpen)}
          aria-label="Primary"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={clsx(
                      isActive(item.href) ? s.linkActive : s.link
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={clsx(
                      isActive(item.href) ? s.linkActive : s.link
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.right}>
          {cta &&
            (cta.external ? (
              <a
                className={s.cta}
                href={cta.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {cta.label}
              </a>
            ) : (
              <Link className={s.cta} href={cta.href}>
                {cta.label}
              </Link>
            ))}

          <button
            type="button"
            className={clsx(s.menuBtn, open && s.menuBtnOpen)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={s.barTop} />
            <span className={s.barMid} />
            <span className={s.barBot} />
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        className={clsx(open ? s.overlayShow : s.overlay)}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 12h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 7v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
