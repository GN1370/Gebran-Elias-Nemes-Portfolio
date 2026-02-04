import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gebran Nemes | Frontend Developer",
  description:
    "Portfolio of Gebran Nemes, a Frontend Developer specializing in Angular, React, and Next.js with a focus on UI/UX and AI-integrated web applications.",
  generator: "gebran-nemes-portfolio",
  openGraph: {
    title: "Gebran Nemes | Frontend Developer",
    description:
      "Frontend Developer focused on Angular, React, Next.js, and AI-integrated web applications. Based in Beirut, Lebanon.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebran Nemes | Frontend Developer",
    description:
      "Frontend Developer focused on Angular, React, Next.js, and AI-integrated web applications.",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${plexSans.variable} ${plexMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
