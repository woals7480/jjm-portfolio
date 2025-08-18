import { style, globalStyle } from "@vanilla-extract/css";

const headerH = "64px";
const maxW = "1100px";

// 테마 변수
export const vars = {
  bg: "rgba(255, 255, 255, 0.8)",
  fg: "#111827",
  border: "#e5e7eb",
  link: "#111827",
  linkActive: "#2563eb",
  ctaBg: "#111827",
  ctaFg: "#ffffff",
  // dark
  bgDark: "rgba(17, 24, 39, 0.7)",
  fgDark: "#e5e7eb",
  borderDark: "#374151",
  linkDark: "#e5e7eb",
  linkActiveDark: "#60a5fa",
  ctaBgDark: "#e5e7eb",
  ctaFgDark: "#111827",
};

export const siteHeader = style({
  position: "fixed",
  top: 0,
  width: "100dvw",
  zIndex: 50,
  color: vars.fg,
  background: vars.bg,
  backdropFilter: "saturate(120%) blur(8px)",
  WebkitBackdropFilter: "saturate(120%) blur(8px)",
  borderBottom: `1px solid ${vars.border}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: vars.fgDark,
      background: vars.bgDark,
      borderBottom: `1px solid ${vars.borderDark}`,
    },
  },
});

export const inner = style({
  height: headerH,
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center",
  gap: 12,
  maxWidth: maxW,
  margin: "0 auto",
  padding: "0 16px",
});

export const left = style({ display: "flex", alignItems: "center", gap: 10 });

export const logo = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  fontWeight: 700,
  textDecoration: "none",
});

export const logoText = style({ fontSize: "1.05rem", letterSpacing: 0.2 });

export const nav = style({ justifySelf: "center" });

// 기본적으로 모바일에서 nav ul 감춤
globalStyle(`${nav} ul`, {
  display: "none",
  listStyle: "none",
  gap: 20,
  padding: 0,
  margin: 0,
});

export const link = style({
  textDecoration: "none",
  color: vars.link,
  opacity: 0.9,
  transition: "opacity .15s ease",
  selectors: {
    "&:hover": { opacity: 1 },
  },
  "@media": {
    "(prefers-color-scheme: dark)": { color: vars.linkDark },
  },
});

export const linkActive = style([
  link,
  {
    color: vars.linkActive,
    opacity: 1,
    fontWeight: 600,
    "@media": {
      "(prefers-color-scheme: dark)": { color: vars.linkActiveDark },
    },
  },
]);

export const right = style({
  justifySelf: "end",
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const cta = style({
  display: "none",
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: 10,
  background: vars.ctaBg,
  color: vars.ctaFg,
  fontWeight: 600,
  "@media": {
    "(prefers-color-scheme: dark)": {
      background: vars.ctaBgDark,
      color: vars.ctaFgDark,
    },
  },
});

export const menuBtn = style({
  width: 40,
  height: 40,
  border: `1px solid ${vars.border}`,
  borderRadius: 10,
  background: "transparent",
  display: "grid",
  placeContent: "center",
  gap: 4,
  color: "inherit",
  "@media": {
    "(prefers-color-scheme: dark)": { border: `1px solid ${vars.borderDark}` },
  },
});

export const menuBtnOpen = style({});

export const barTop = style({
  width: 18,
  height: 2,
  background: "currentColor",
  transition: "transform .2s ease, opacity .2s ease",
});
export const barMid = style({
  width: 18,
  height: 2,
  background: "currentColor",
  transition: "transform .2s ease, opacity .2s ease",
});
export const barBot = style({
  width: 18,
  height: 2,
  background: "currentColor",
  transition: "transform .2s ease, opacity .2s ease",
});

// menu open일 때 바 애니메이션
globalStyle(`${menuBtnOpen} ${barTop}`, {
  transform: "translateY(6px) rotate(45deg)",
});
globalStyle(`${menuBtnOpen} ${barMid}`, { opacity: 0 });
globalStyle(`${menuBtnOpen} ${barBot}`, {
  transform: "translateY(-6px) rotate(-45deg)",
});

// 모바일 드로어 열림 스타일
export const navOpen = style({
  position: "fixed",
  top: headerH,
  left: 0,
  right: 0,
  background: vars.bg,
  borderBottom: `1px solid ${vars.border}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      background: vars.bgDark,
      borderBottom: `1px solid ${vars.borderDark}`,
    },
  },
});

globalStyle(`${navOpen} ul`, {
  display: "flex",
  flexDirection: "column",
  padding: "12px 16px",
});

globalStyle(`${navOpen} li`, { padding: "8px 0" });

export const overlay = style({
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0)",
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity .2s ease",
});

export const overlayShow = style([
  overlay,
  { background: "rgba(0,0,0,.35)", opacity: 1, pointerEvents: "auto" },
]);

export const skipLink = style({
  position: "absolute",
  left: -9999,
  top: -9999,
});

globalStyle(`${skipLink}:focus`, {
  left: 12,
  top: 12,
  background: vars.ctaBg,
  color: vars.ctaFg,
  padding: "8px 12px",
  borderRadius: 8,
});

// ===== 데스크톱 미디어쿼리들은 두번째 인자의 "@media"로 작성 =====
const desktop = "screen and (min-width: 768px)";

globalStyle(`${menuBtn}`, { "@media": { [desktop]: { display: "none" } } });

globalStyle(`${nav} ul`, { "@media": { [desktop]: { display: "flex" } } });

globalStyle(`${cta}`, { "@media": { [desktop]: { display: "inline-flex" } } });

globalStyle(`${navOpen}`, {
  "@media": { [desktop]: { position: "static", borderBottom: "none" } },
});

globalStyle(`${overlay}`, { "@media": { [desktop]: { display: "none" } } });
