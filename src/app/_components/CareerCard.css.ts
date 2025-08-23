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

export const h2 = style({
  fontWeight: 900,
  fontSize: "1.05rem",
  marginBottom: 10,
  position: "relative",
  paddingBottom: 6,
  selectors: {
    "&::after": {
      content: "",
      position: "absolute",
      left: 0,
      bottom: 0,
      height: 2,
      width: 56,
      background: c.primary,
      borderRadius: 2,
      display: "block",
    },
  },
});
globalStyle(`[data-theme="dark"] ${h2}::after`, { background: c.primaryDark });

export const stack = style({ display: "grid", gap: 24 });
export const item = style({ display: "grid", gap: 12 });
export const itemHeader = style({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: 8,
});
export const itemTitle = style({ fontWeight: 800 });
export const period = style({ color: c.fgMuted, fontSize: ".9rem" });
globalStyle(`[data-theme="dark"] ${period}`, { color: c.fgMutedDark });
export const org = style({ color: c.fgMuted, fontSize: ".95rem" });
globalStyle(`[data-theme="dark"] ${org}`, { color: c.fgMutedDark });
export const list = style({ margin: 0, paddingLeft: 18, lineHeight: 1.75 });
