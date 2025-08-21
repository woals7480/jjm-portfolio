import { style, globalStyle } from "@vanilla-extract/css";

// 토큰
const vars = {
  bg: "rgba(255,255,255,.9)",
  fg: "#111827",
  border: "#e5e7eb",
  muted: "#6b7280",
  brand: "#2563eb",
  shadow: "0 2px 12px rgba(0,0,0,.06)",
  // dark
  bgDark: "rgba(17,24,39,.7)",
  fgDark: "#e5e7eb",
  borderDark: "#374151",
  mutedDark: "#9ca3af",
  brandDark: "#60a5fa",
};

export const card = style({
  borderRadius: 14,
  border: `1px solid ${vars.border}`,
  background: vars.bg,
  color: vars.fg,
  boxShadow: vars.shadow,
  padding: 20,
  margin: 16,
  maxWidth: 1100,
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      transition: "background .2s ease, color .2s ease, border-color .2s ease",
    },
    "(width >= 768px)": { padding: 24 },
  },
});

globalStyle(`[data-theme="dark"] ${card}`, {
  background: vars.bgDark,
  color: vars.fgDark,
  borderColor: vars.borderDark,
});

export const headerRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
});

export const profileArea = style({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const photoWrap = style({
  width: 84,
  height: 84,
  borderRadius: 12,
  overflow: "hidden",
  border: `1px solid ${vars.border}`,
});
globalStyle(`[data-theme="dark"] ${photoWrap}`, {
  borderColor: vars.borderDark,
});

export const photo = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const name = style({
  fontSize: "1.25rem",
  fontWeight: 800,
  lineHeight: 1.2,
});
export const nameSub = style({
  fontWeight: 600,
  color: vars.muted,
});
globalStyle(`[data-theme="dark"] ${nameSub}`, { color: vars.mutedDark });

export const title = style({
  marginTop: 4,
  fontSize: ".95rem",
  color: vars.muted,
});
globalStyle(`[data-theme="dark"] ${title}`, { color: vars.mutedDark });

export const contactRow = style({
  marginTop: 8,
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
});

export const contactLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  textDecoration: "none",
  color: "inherit",
  opacity: 0.9,
  selectors: { "&:hover": { opacity: 1 } },
});

export const badge = style({
  fontSize: ".85rem",
  background: "rgba(34,197,94,.15)",
  color: "#16a34a",
  border: "1px solid rgba(34,197,94,.3)",
  padding: "6px 10px",
  borderRadius: 999,
  fontWeight: 700,
});

export const sep = style({
  margin: "16px 0",
  border: 0,
  borderTop: `1px solid ${vars.border}`,
});
globalStyle(`[data-theme="dark"] ${sep}`, { borderTopColor: vars.borderDark });

export const grid = style({
  display: "grid",
  gap: 16,
  "@media": {
    "(width >= 900px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
});

export const section = style({
  borderRadius: 10,
  border: `1px solid ${vars.border}`,
  padding: 14,
  background: "transparent",
});
globalStyle(`[data-theme="dark"] ${section}`, { borderColor: vars.borderDark });

export const sectionTitle = style({
  fontSize: ".95rem",
  fontWeight: 800,
  marginBottom: 10,
});

export const dl = style({
  display: "grid",
  gridTemplateColumns: "84px 1fr",
  rowGap: 8,
  columnGap: 12,
  color: "inherit",
});
export const row = style({ display: "contents" });
globalStyle(`${dl} dt`, {
  color: vars.muted,
  fontWeight: 600,
});
globalStyle(`[data-theme="dark"] ${dl} dt`, { color: vars.mutedDark });
globalStyle(`${dl} dd`, { margin: 0 });

export const tight = style({
  rowGap: 6,
});

export const linkList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: 8,
});
export const linkA = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  textDecoration: "none",
  color: "inherit",
  borderBottom: `1px dashed transparent`,
  selectors: {
    "&:hover": { borderBottomColor: vars.brand },
  },
});
globalStyle(`[data-theme="dark"] ${linkA}:hover`, {
  borderBottomColor: vars.brandDark,
});

export const noteInCard = style({
  marginTop: 12,
  paddingTop: 12,
  fontSize: ".95rem",
  lineHeight: 1.65,
  color: vars.fg,
  textAlign: "left",
  whiteSpace: "pre-line",
});

globalStyle(`[data-theme="dark"] ${noteInCard}`, {
  color: vars.fgDark,
  borderTopColor: vars.borderDark,
});
