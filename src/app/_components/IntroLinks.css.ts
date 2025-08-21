import { style, globalStyle } from "@vanilla-extract/css";

const maxW = 1100;

const vars = {
  fg: "#111827",
  fgMuted: "#6b7280",
  border: "#e5e7eb",
  // brand(살짝 변경)
  resumeFrom: "#4f46e5", // indigo-600
  resumeTo: "#7c3aed", // violet-600
  portFrom: "#10b981", // emerald-500
  portTo: "#22d3ee", // cyan-400
  // dark
  fgDark: "#e5e7eb",
  fgMutedDark: "#a3a3a3",
  borderDark: "#374151",
  cardShadow: "0 12px 30px rgba(0,0,0,.08)",
};

export const wrap = style({
  maxWidth: maxW,
  margin: "18px auto 0",
  padding: "0 16px 26px",
  color: vars.fg,
});
globalStyle(`[data-theme="dark"] ${wrap}`, { color: vars.fgDark });

export const tiles = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 18,
  "@media": { "(width >= 860px)": { gridTemplateColumns: "1fr 1fr" } },
});

const baseTile = {
  height: 170,
  borderRadius: 20,
  display: "grid",
  placeContent: "center",
  textDecoration: "none",
  boxShadow: vars.cardShadow as string,
  transform: "translateZ(0)",
  transition: "transform .18s ease, box-shadow .18s ease, filter .18s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 14px 36px rgba(0,0,0,.12)",
    },
    "&:active": { transform: "translateY(0)" },
  },
} as const;

export const tileResume = style({
  ...baseTile,
  color: "#fff",
  background: `linear-gradient(135deg, ${vars.resumeFrom}, ${vars.resumeTo})`,
});

export const tilePortfolio = style({
  ...baseTile,
  color: "#0f172a",
  background: `linear-gradient(135deg, ${vars.portFrom}, ${vars.portTo})`,
});

export const emoji = style({
  fontSize: 34,
  justifySelf: "center",
  marginBottom: 8,
});

export const tileTitle = style({
  fontWeight: 900,
  fontSize: 38,
  letterSpacing: ".3px",
});

export const captions = style({
  marginTop: 14,
  display: "grid",
  gap: 8,
  textAlign: "center",
  fontSize: ".98rem",
  "@media": { "(width >= 860px)": { gridTemplateColumns: "1fr 1fr", gap: 12 } },
});

export const hlResume = style({
  background: "rgba(99,102,241,.18)", // indigo-500 tint
  borderRadius: 6,
  padding: "0 6px",
  fontWeight: 800,
});
globalStyle(`[data-theme="dark"] ${hlResume}`, {
  background: "rgba(99,102,241,1)",
});

export const hlPortfolio = style({
  background: "rgba(16,185,129,.18)", // emerald-500 tint
  borderRadius: 6,
  padding: "0 6px",
  fontWeight: 800,
});
globalStyle(`[data-theme="dark"] ${hlPortfolio}`, {
  background: "rgba(16,185,129,1)",
});

export const sep = style({
  margin: "20px 0",
  border: 0,
  borderTop: `1px solid ${vars.border}`,
});
globalStyle(`[data-theme="dark"] ${sep}`, { borderTopColor: vars.borderDark });

export const footer = style({
  marginTop: 16,
  borderTop: `1px solid ${vars.border}`,
  paddingTop: 12,
  color: vars.fgMuted,
  fontStyle: "italic",
  fontSize: ".92rem",
  textAlign: "left",
});
globalStyle(`[data-theme="dark"] ${footer}`, {
  borderTopColor: vars.borderDark,
  color: vars.fgMutedDark,
});
