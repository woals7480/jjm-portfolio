// app/api/theme/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isTheme, THEME_COOKIE } from "@/_lib/theme";

export async function POST(req: Request) {
  const { theme } = await req.json().catch(() => ({}));
  if (!isTheme(theme)) {
    return NextResponse.json(
      { ok: false, error: "invalid theme" },
      { status: 400 }
    );
  }
  const cookieStore = await cookies();
  cookieStore.set(THEME_COOKIE, theme, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
  return NextResponse.json({ ok: true });
}
