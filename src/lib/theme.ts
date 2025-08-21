export type Theme = "light" | "dark";
export const THEME_COOKIE = "theme";
export function isTheme(v: unknown): v is Theme {
  return v === "light" || v === "dark";
}
