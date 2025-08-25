import { style, globalStyle } from "@vanilla-extract/css";

const c = {
  // light
  fg: "#1f2937",
  fgMuted: "#6b7280",
  border: "#e5e7eb",
  borderSoft: "rgba(17,24,39,.06)",
  card: "#ffffff",
  sheetShadow: "0 28px 80px rgba(15,23,42,.22)",

  // dark
  fgDark: "#e5e7eb",
  fgMutedDark: "#9ca3af",
  borderDark: "#374151",
  borderSoftDark: "rgba(255,255,255,.08)",
  cardDark: "rgba(17,24,39,.92)",
  sheetShadowDark: "0 40px 90px rgba(0,0,0,.6)",

  // accents
  calloutBg: "rgba(251, 191, 36, .08)", // amber
  calloutBorder: "rgba(251, 191, 36, .45)",
};

export const overlay = style({
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.45)",
  backdropFilter: "blur(2px)",
  zIndex: 1000,
  display: "grid",
  placeItems: "center",
  padding: 18,
});

export const dialog = style({
  width: "min(1100px, 96vw)",
  maxHeight: "90vh",
  overflow: "auto",
  background: c.card,
  borderRadius: 20,
  boxShadow: c.sheetShadow,
  border: `1px solid ${c.borderSoft}`,
});
globalStyle(`[data-theme="dark"] ${dialog}`, {
  background: c.cardDark,
  borderColor: c.borderSoftDark,
  boxShadow: c.sheetShadowDark,
});

/* 문서 레이아웃 */
export const doc = style({
  padding: "28px 28px 32px",
  color: c.fg,
});
globalStyle(`[data-theme="dark"] ${doc}`, { color: c.fgDark });

/* 상단 */
export const headerBar = style({
  display: "flex",
  justifyContent: "flex-end",
  paddingBottom: 8,
});
export const closeBtn = style({
  appearance: "none",
  border: `1px solid ${c.border}`,
  background: "#fff",
  padding: "6px 10px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 600,
});
globalStyle(`[data-theme="dark"] ${closeBtn}`, {
  background: "rgba(55,65,81,.4)",
  borderColor: c.borderDark,
  color: c.fgDark,
});

/* 히어로(이모지 + 제목 + 메타) */
export const hero = style({
  display: "grid",
  gap: 8,
  marginBottom: 12,
});
/* ===== 헤더 좌/우 레이아웃 ===== */
export const heroRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  flexWrap: "wrap",
});
export const heroLeft = style({
  minWidth: 0,
  display: "grid",
  gap: 6,
});
export const heroRight = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
  flexWrap: "wrap",
});

/* ===== 프로젝트 종류 칩(chip) ===== */
const badgeBase = style({
  display: "inline-block",
  fontSize: ".78rem",
  fontWeight: 700,
  padding: "2px 10px",
  borderRadius: 999,
  border: `1px solid ${c.border}`,
  marginTop: 6,
});
globalStyle(`[data-theme="dark"] ${badgeBase}`, {
  borderColor: c.borderDark,
});
export const badgeCompany = style([
  badgeBase,
  { background: "rgba(37,99,235,0.6)", color: "#fff" }, // blue
]);
export const badgePersonal = style([
  badgeBase,
  { background: "rgba(16,185,129,0.6)", color: "#fff" }, // emerald
]);
export const badgeFreelance = style([
  badgeBase,
  { background: "rgba(139,92,246,0.6)", color: "#fff" }, // violet
]);
export const badgeUnknown = style([
  badgeBase,
  { background: "rgba(17,24,39,.06)" },
]);
globalStyle(`[data-theme="dark"] ${badgeUnknown}`, {
  background: "rgba(148,163,184,.16)",
});

/* ===== 참여 인원수(FE/BE) ===== */
export const participants = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  marginTop: 6,
});
export const countPill = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontSize: ".78rem",
  fontWeight: 700,
  padding: "2px 10px",
  borderRadius: 999,
  border: `1px solid ${c.border}`,
  background: "rgba(17,24,39,.04)",
});
globalStyle(`[data-theme="dark"] ${countPill}`, {
  borderColor: c.borderDark,
  background: "rgba(148,163,184,.16)",
});
export const partLabel = style({
  color: c.fgMuted,
  fontWeight: 700,
});
globalStyle(`[data-theme="dark"] ${partLabel}`, { color: c.fgMutedDark });
export const partNumber = style({
  fontWeight: 900,
});

export const title = style({
  fontSize: "2rem",
  fontWeight: 900,
  letterSpacing: "-0.01em",
  lineHeight: 1.2,
});
export const meta = style({
  color: c.fgMuted,
  fontSize: ".95rem",
});
globalStyle(`[data-theme="dark"] ${meta}`, { color: c.fgMutedDark });

export const hr = style({
  height: 1,
  background: c.border,
  margin: "16px 0",
});
globalStyle(`[data-theme="dark"] ${hr}`, { background: c.borderDark });

export const section = style({
  display: "grid",
  gap: 12,
  marginTop: 24,
});
export const h2 = style({
  fontSize: "1.1rem",
  fontWeight: 800,
  letterSpacing: "-.005em",
});

/* 이미지 갤러리 */
export const imageGrid = style({
  display: "grid",
  gap: 12,
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
});
export const imageWrap = style({
  position: "relative",
  aspectRatio: "16/9",
  borderRadius: 14,
  overflow: "hidden",
  border: `1px solid ${c.border}`,
  boxShadow: "0 8px 26px rgba(15,23,42,.08)",
  background: "#f3f4f6",
});
globalStyle(`[data-theme="dark"] ${imageWrap}`, { borderColor: c.borderDark });
export const img = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

/* 콜아웃 (선택) */
export const callout = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "flex-start",
  gap: 10,
  padding: 12,
  background: c.calloutBg,
  border: `1px solid ${c.calloutBorder}`,
  borderRadius: 12,
});
export const calloutIcon = style({
  fontSize: 18,
  lineHeight: 1.2,
  paddingTop: 2,
});

/* 링크 리스트 (선택) */
export const linkList = style({
  display: "grid",
  gap: 8,
});
export const link = style({
  color: c.fg,
  textDecoration: "none",
  fontWeight: 700,
  selectors: { "&:hover": { textDecoration: "underline" } },
});
globalStyle(`[data-theme="dark"] ${link}`, { color: c.fgDark });

/* 칩(기술 스택) + 목록(상세 기능) */
export const chips = style({ display: "flex", flexWrap: "wrap", gap: 8 });
export const chip = style({
  fontSize: ".86rem",
  padding: "2px 10px",
  borderRadius: 999,
  background: "rgba(17,24,39,.05)",
  border: `1px solid ${c.border}`,
  fontWeight: 600,
});
globalStyle(`[data-theme="dark"] ${chip}`, {
  background: "rgba(148,163,184,.16)",
  borderColor: c.borderDark,
});

export const list = style({
  paddingLeft: 18,
  lineHeight: 1.9,
});
