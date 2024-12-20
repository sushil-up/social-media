// https://github.com/nextauthjs/next-auth/discussions/4996

// https://next-auth.js.org/configuration/nextjs#advanced-usage

export { default } from "next-auth/middleware"

export const config = { matcher: ["/menupages/:path*"] }
