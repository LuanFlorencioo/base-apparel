import type { NextRequest } from "next/server"
import { i18n } from "../i18n-config"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname !== '/') {
    const { defaultLocale, locales } = i18n
    const isValidLocale = locales.some(
      (locale) => pathname === `/${locale}/`|| pathname === `/${locale}`
    )

    if (isValidLocale) return

    request.nextUrl.pathname = `/${defaultLocale}`

    return Response.redirect(request.nextUrl)
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
