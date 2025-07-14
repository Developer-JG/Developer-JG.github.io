import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Jeonggyu Hwang | Academic Portfolio",
  description:
    "Personal academic website of Jeonggyu Hwang, researcher and future graduate student at Yonsei University.",
  keywords: ["Jeonggyu Hwang", "semiconductor", "research", "solar cells", "academic portfolio", "Yonsei University"],
  authors: [{ name: "Jeonggyu Hwang" }],
  openGraph: {
    title: "Jeonggyu Hwang | Academic Portfolio",
    description:
      "Personal academic website of Jeonggyu Hwang, researcher and future graduate student at Yonsei University.",
    url: "https://developer-jg.github.io",
    siteName: "Jeonggyu Hwang Portfolio",
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'