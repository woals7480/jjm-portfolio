import { globalStyle, style } from "@vanilla-extract/css";

export const vars = {
  bg: "rgba(255, 255, 255, 0.8)",
  // dark
  bgDark: "#374151",
};

export const RootBody = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: vars.bg,
});

globalStyle(`[data-theme="dark"] ${RootBody}`, {
  backgroundColor: vars.bgDark,
});

export const RootMain = style({
  maxWidth: "1100px",
  width: "100%",
  marginTop: "64px",
});
