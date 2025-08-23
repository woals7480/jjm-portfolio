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

export const page = style({
  maxWidth: 980,
  margin: "0 auto",
  padding: "24px 16px 56px",
  color: c.fg,
  display: "grid",
  gap: 14,
});
globalStyle(`[data-theme="dark"] ${page}`, { color: c.fgDark });
