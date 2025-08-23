import { style, globalStyle } from "@vanilla-extract/css";

const c = {
  fg: "#111827",
  fgMuted: "#6b7280",
  border: "#e5e7eb",
  card: "#ffffff",
  shadow: "0 8px 26px rgba(0,0,0,.06)",
  primary: "#2563eb",
  primaryDark: "#60a5fa",
  // dark
  fgDark: "#e5e7eb",
  fgMutedDark: "#9ca3af",
  borderDark: "#374151",
  cardDark: "rgba(17,24,39,.7)",
};

export const card = style({
  background: c.card,
  border: `1px solid ${c.border}`,
  borderRadius: 16,
  boxShadow: c.shadow,
  padding: 16,
});
globalStyle(`[data-theme="dark"] ${card}`, {
  background: c.cardDark,
  borderColor: c.borderDark,
});

export const hero = style({
  display: "flex",
  alignItems: "center",
  gap: 14,
  marginBottom: 8,
});

export const avatar = style({
  width: 96,
  height: 96,
  borderRadius: 12,
  objectFit: "cover",
  border: `1px solid ${c.border}`,
});
globalStyle(`[data-theme="dark"] ${avatar}`, { borderColor: c.borderDark });

export const title = style({ fontSize: "1.6rem", fontWeight: 900 });
export const role = style({ fontWeight: 700, marginTop: 2 });
export const subtitle = style({ color: c.fgMuted, marginTop: 6 });
globalStyle(`[data-theme="dark"] ${subtitle}`, { color: c.fgMutedDark });

export const kv = style({
  listStyle: "none",
  margin: "8px 0 0",
  padding: 0,
  display: "grid",
  gap: 6,
});
export const k = style({
  minWidth: 74,
  display: "inline-block",
  color: c.fgMuted,
});
globalStyle(`[data-theme="dark"] ${k}`, { color: c.fgMutedDark });
export const a = style({
  color: c.primary,
  textDecoration: "none",
  selectors: { "&:hover": { textDecoration: "underline" } },
});
globalStyle(`[data-theme="dark"] ${a}`, { color: c.primaryDark });
