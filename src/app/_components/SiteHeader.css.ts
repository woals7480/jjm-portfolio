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
  // dark
  bgDark: "rgba(17, 24, 39, 0.7)",
  fgDark: "#e5e7eb",
  borderDark: "#374151",
  linkDark: "#e5e7eb",
  linkActiveDark: "#60a5fa",
};

export const siteHeader = style({
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 50,
  color: vars.fg,
  background: vars.bg,
  backdropFilter: "saturate(120%) blur(8px)",
  WebkitBackdropFilter: "saturate(120%) blur(8px)",
  borderBottom: `1px solid ${vars.border}`,
});

export const inner = style({
  height: headerH,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
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

export const nav = style({
  justifySelf: "center",
  flex: 1,
});

// 기본적으로 모바일에서 nav ul 감춤
globalStyle(`${nav} ul`, {
  display: "none",
  listStyle: "none",
  gap: 20,
  padding: 0,
  margin: 0,
  justifyContent: "space-around",
});

export const link = style({
  textDecoration: "none",
  color: vars.link,
  opacity: 0.9,
  transition: "opacity .15s ease",
  selectors: { "&:hover": { opacity: 1 } },
});

export const linkActive = style([
  link,
  {
    color: vars.linkActive,
    opacity: 1,
    fontWeight: 600,
  },
]);

export const right = style({
  justifySelf: "end",
  display: "flex",
  alignItems: "center",
  gap: 10,
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
  cursor: "pointer",
  color: "inherit",
});

// 토글 버튼
export const themeBtn = style({
  width: 40,
  height: 40,
  border: `1px solid ${vars.border}`,
  borderRadius: 10,
  background: "transparent",
  display: "grid",
  placeContent: "center",
  cursor: "pointer",
  color: "inherit",
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
  width: "100dvw",
  borderBottom: `1px solid ${vars.border}`,
});

globalStyle(`${navOpen} ul`, {
  display: "flex",
  flexDirection: "column",
  padding: "12px 16px",
});

globalStyle(`${navOpen} li`, { padding: "8px 0" });

// ===== 데스크톱 미디어쿼리 =====
const desktop = "screen and (min-width: 768px)";
globalStyle(`${menuBtn}`, { "@media": { [desktop]: { display: "none" } } });
globalStyle(`${nav} ul`, { "@media": { [desktop]: { display: "flex" } } });
globalStyle(`${navOpen}`, {
  "@media": { [desktop]: { position: "static", borderBottom: "none" } },
});

/* =========================
   data-theme="dark" 전용 오버라이드 (토글만 반응)
   ========================= */
const dark = `[data-theme="dark"]`;

globalStyle(`${dark} ${siteHeader}`, {
  color: vars.fgDark,
  background: vars.bgDark,
  borderBottom: `1px solid ${vars.borderDark}`,
});
globalStyle(`${dark} ${link}`, { color: vars.linkDark });
globalStyle(`${dark} ${linkActive}`, { color: vars.linkActiveDark });
globalStyle(`${dark} ${menuBtn}`, { border: `1px solid ${vars.borderDark}` });
globalStyle(`${dark} ${themeBtn}`, { border: `1px solid ${vars.borderDark}` });
globalStyle(`${dark} ${navOpen}`, {
  background: vars.bgDark,
  borderBottom: `1px solid ${vars.borderDark}`,
});
