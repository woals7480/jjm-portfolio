import { style, globalStyle } from "@vanilla-extract/css";

const c = {
  fg: "#111827",
  fgMuted: "#6b7280",
  border: "#e5e7eb",
  card: "#ffffff",
  chipBg: "rgba(99,102,241,.08)", // indigo tint
  chipBorder: "rgba(99,102,241,.35)",
  shadow: "0 8px 26px rgba(0,0,0,.06)",
  // dark
  fgDark: "#e5e7eb",
  fgMutedDark: "#9ca3af",
  borderDark: "#374151",
  cardDark: "rgba(17,24,39,.7)",
  chipBgDark: "rgba(99,102,241,.18)",
  chipBorderDark: "rgba(99,102,241,.45)",
};

export const card = style({
  background: c.card,
  border: `1px solid ${c.border}`,
  borderRadius: 16,
  boxShadow: c.shadow,
  padding: 16,
  color: c.fg,
});
globalStyle(`[data-theme="dark"] ${card}`, {
  background: c.cardDark,
  borderColor: c.borderDark,
  color: c.fgDark,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  paddingBottom: 10,
  borderBottom: `1px solid ${c.border}`,
  marginBottom: 12,
});
globalStyle(`[data-theme="dark"] ${header}`, {
  borderBottomColor: c.borderDark,
});

export const headerIcon = style({ fontSize: 20, lineHeight: 1 });
export const headerTitle = style({ fontWeight: 900, fontSize: "1.05rem" });

export const rows = style({
  display: "grid",
  gap: 18,
});

export const row = style({
  display: "grid",
  gridTemplateColumns: "160px 1fr",
  alignItems: "center",
  columnGap: 12,
  rowGap: 8,
  "@media": { "(width <= 600px)": { gridTemplateColumns: "1fr", rowGap: 6 } },
});

export const left = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  minHeight: 28,
});

export const colorDot = style({
  width: 10,
  height: 10,
  borderRadius: 2,
  flex: "0 0 10px",
  border: `1px solid ${c.border}`,
});
globalStyle(`[data-theme="dark"] ${colorDot}`, { borderColor: c.borderDark });

export const categoryLabel = style({
  fontWeight: 700,
  color: c.fgMuted,
});
globalStyle(`[data-theme="dark"] ${categoryLabel}`, { color: c.fgMutedDark });

export const right = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
});

export const chip = style({
  fontSize: ".88rem",
  lineHeight: 1.9,
  padding: "2px 8px",
  borderRadius: 8,
  background: c.chipBg,
  border: `1px solid ${c.chipBorder}`,
});
globalStyle(`[data-theme="dark"] ${chip}`, {
  background: c.chipBgDark,
  borderColor: c.chipBorderDark,
});
