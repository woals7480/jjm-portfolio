import { style, globalStyle } from "@vanilla-extract/css";

const c = {
  fg: "#111827",
  fgMuted: "#6b7280",
  border: "#e5e7eb",
  card: "#ffffff",
  shadow: "0 10px 30px rgba(0,0,0,.07)",
  chipBg: "rgba(99,102,241,.08)",
  chipBorder: "rgba(99,102,241,.35)",
  badgeBg: "rgba(0,0,0,.05)",
  // dark
  fgDark: "#e5e7eb",
  fgMutedDark: "#9ca3af",
  borderDark: "#374151",
  cardDark: "rgba(17,24,39,.7)",
  chipBgDark: "rgba(99,102,241,.18)",
  chipBorderDark: "rgba(99,102,241,.45)",
  badgeBgDark: "rgba(255,255,255,.08)",
};

export const section = style({
  display: "grid",
  gap: 16,
});

/* ⬇️ 섹션 전체를 카드 컨테이너로 감싸는 스타일 */
export const cardWrap = style({
  background: c.card,
  border: `1px solid ${c.border}`,
  borderRadius: 18,
  boxShadow: "0 8px 26px rgba(0,0,0,.06)",
  padding: 16,
});
globalStyle(`[data-theme="dark"] ${cardWrap}`, {
  background: c.cardDark,
  borderColor: c.borderDark,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  paddingBottom: 6,
  borderBottom: `1px solid ${c.border}`,
});
globalStyle(`[data-theme="dark"] ${header}`, {
  borderBottomColor: c.borderDark,
});

export const headerIcon = style({ fontSize: 18 });
export const headerTitle = style({ fontWeight: 900, fontSize: "1.1rem" });

export const grid = style({
  display: "grid",
  gap: 16,
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  marginTop: 10,
});

/* 개별 프로젝트 카드는 기존처럼 */
export const card = style({
  background: c.card,
  border: `1px solid ${c.border}`,
  borderRadius: 18,
  boxShadow: c.shadow,
  overflow: "hidden",
  display: "grid",
  cursor: "pointer",
});
globalStyle(`[data-theme="dark"] ${card}`, {
  background: c.cardDark,
  borderColor: c.borderDark,
});

export const cover = style({
  background: "#f3f4f6",
  aspectRatio: "16 / 9",
  position: "relative",
});
export const coverImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const body = style({ display: "grid", gap: 10, padding: 14 });

export const title = style({
  fontWeight: 800,
  fontSize: "1.02rem",
  lineHeight: 1.3,
});
export const subtitle = style({
  marginLeft: 6,
  color: c.fgMuted,
  fontWeight: 600,
  fontSize: ".95rem",
});
globalStyle(`[data-theme="dark"] ${subtitle}`, { color: c.fgMutedDark });

export const period = style({ color: c.fgMuted, fontSize: ".92rem" });
globalStyle(`[data-theme="dark"] ${period}`, { color: c.fgMutedDark });

export const tags = style({ display: "flex", flexWrap: "wrap", gap: 8 });
export const tag = style({
  fontSize: ".85rem",
  padding: "2px 8px",
  borderRadius: 8,
  background: c.chipBg,
  border: `1px solid ${c.chipBorder}`,
});
globalStyle(`[data-theme="dark"] ${tag}`, {
  background: c.chipBgDark,
  borderColor: c.chipBorderDark,
});

export const links = style({ display: "flex", flexWrap: "wrap", gap: 14 });
export const link = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  textDecoration: "none",
  color: c.fgMuted,
  fontWeight: 600,
  selectors: { "&:hover": { textDecoration: "underline" } },
});
globalStyle(`[data-theme="dark"] ${link}`, { color: c.fgMutedDark });

export const icon = style({ width: 16, height: 16, verticalAlign: "middle" });

export const badges = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 4,
});
export const badge = style({
  fontSize: ".78rem",
  lineHeight: 1.9,
  padding: "2px 8px",
  borderRadius: 999,
  background: c.badgeBg,
  border: `1px solid ${c.border}`,
  boxShadow: "0 2px 0 rgba(0,0,0,.06)",
});
globalStyle(`[data-theme="dark"] ${badge}`, {
  background: c.badgeBgDark,
  borderColor: c.borderDark,
  boxShadow: "none",
});
