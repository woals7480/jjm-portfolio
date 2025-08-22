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
  gap: 14, // 한 줄에 하나씩 쌓임
});
globalStyle(`[data-theme="dark"] ${page}`, { color: c.fgDark });

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

export const body = style({
  display: "grid",
  gap: 10,
  lineHeight: 1.75,
  color: "inherit",
});
export const list = style({ margin: 0, paddingLeft: 18, lineHeight: 1.75 });
export const stack = style({ display: "grid", gap: 24 }); // 섹션 내부 1열 스택
export const item = style({ display: "grid", gap: 12 });
export const projectsStack = style([stack]);

// 바로 아래 한 줄이 핵심: projectsStack 안에서 item 다음에 오는 item에만 선 추가
globalStyle(`${projectsStack} > ${item}:not(:first-child)`, {
  borderTop: `1px solid ${c.border}`,
  paddingTop: 12,
  marginTop: 12,
});

globalStyle(
  `[data-theme="dark"] ${projectsStack} > ${item}:not(:first-child)`,
  {
    borderTopColor: c.borderDark,
  }
);
export const itemHeader = style({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: 8,
});
export const titleRow = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  flexWrap: "wrap",
});
export const titleLink = style({
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  color: c.fgMuted,
  transition: "color .15s ease, opacity .15s ease",
  selectors: {
    "&:hover": { color: c.primary },
    "&:focus-visible": {
      outline: "2px solid currentColor",
      outlineOffset: 2,
    },
  },
});
globalStyle(`[data-theme="dark"] ${titleLink}`, { color: c.fgMutedDark });

export const itemTitle = style({ fontWeight: 800 });
export const itemSubtitle = style({ color: c.fgMuted });
globalStyle(`[data-theme="dark"] ${itemSubtitle}`, { color: c.fgMutedDark });
export const period = style({ color: c.fgMuted, fontSize: ".9rem" });
globalStyle(`[data-theme="dark"] ${period}`, { color: c.fgMutedDark });

const badgeBase = {
  display: "inline-block",
  fontSize: ".78rem",
  fontWeight: 700,
  padding: "2px 8px",
  borderRadius: 999,
  border: `1px solid ${c.border}`,
  marginTop: 6,
  marginRight: 6,
} as const;

export const badgeCompany = style({
  ...badgeBase,
  background: "rgba(37,99,235,0.6)", // blue tint
  borderColor: c.border,
});
export const badgePersonal = style({
  ...badgeBase,
  background: "rgba(16,185,129,0.6)", // emerald tint
  borderColor: c.border,
});
export const badgeFreelance = style({
  ...badgeBase,
  background: "rgba(139,92,246,0.6)", // violet tint
  borderColor: c.border,
});

export const org = style({ color: c.fgMuted, fontSize: ".95rem" });
globalStyle(`[data-theme="dark"] ${org}`, { color: c.fgMutedDark });

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 8,
});
export const tag = style({
  fontSize: ".85rem",
  padding: "4px 8px",
  borderRadius: 999,
  border: `1px solid ${c.border}`,
});
globalStyle(`[data-theme="dark"] ${tag}`, { borderColor: c.borderDark });

export const edu = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px dashed ${c.border}`,
  borderRadius: 10,
  padding: 10,
});
globalStyle(`[data-theme="dark"] ${edu}`, { borderColor: c.borderDark });
export const eduSchool = style({ fontWeight: 800 });
export const eduMajor = style({ color: c.fgMuted });
globalStyle(`[data-theme="dark"] ${eduMajor}`, { color: c.fgMutedDark });

export const bottom = style({
  color: c.fgMuted,
  textAlign: "right",
  fontSize: ".9rem",
});
globalStyle(`[data-theme="dark"] ${bottom}`, { color: c.fgMutedDark });

export const linkIcon = style({
  width: 16,
  height: 16,
  verticalAlign: "middle",
});
