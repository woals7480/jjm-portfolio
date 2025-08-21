// app/_components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import * as s from "./SiteHeader.css";
import type { Theme } from "@/_lib/theme";

export type NavItem = { label: string; href: string; external?: boolean };
export type SiteHeaderProps = {
  logoText?: string;
  logoHref?: string;
  navItems?: NavItem[];
  initialTheme?: Theme; // ★ 서버에서 전달
};

export default function SiteHeader({
  logoText = "Portfolio",
  logoHref = "/",
  navItems = [],
  initialTheme = "light",
}: SiteHeaderProps) {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  // ★ 초기값을 SSR과 동일하게 맞춤 → 하이드레이션 안전
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const applyDomTheme = (t: Theme) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", t);
    root.style.colorScheme = t;
  };

  const toggleTheme = async () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    // 1) 즉시 DOM 반영 → 깜빡임 없음
    applyDomTheme(next);
    setTheme(next);
    // 2) 쿠키 갱신
    await fetch("/api/theme", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ theme: next }),
    });
    // 3) 서버 컴포넌트 새로고침 → SSR도 같은 테마로 다시 그림
    router.refresh();
  };

  return (
    <header className={s.siteHeader}>
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
          <button
            type="button"
            className={s.themeBtn}
            aria-label={
              theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"
            }
            aria-pressed={theme === "dark"}
            title={theme === "dark" ? "라이트 모드로" : "다크 모드로"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

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
function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path
        d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
