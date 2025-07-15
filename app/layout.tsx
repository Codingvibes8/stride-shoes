import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Header } from "@/components/Header/Header"
import { ToastProvider } from "@/components/providers/toast-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NexShop Pro - Enterprise E-commerce Platform",
  description: "Modern, scalable e-commerce solution built with Next.js 15, TypeScript, and cutting-edge technologies.",
  keywords: ["e-commerce", "online store", "shopping", "nextjs", "typescript"],
  authors: [{ name: "NexShop Pro Team" }],
  openGraph: {
    title: "NexShop Pro - Enterprise E-commerce Platform",
    description:
      "Modern, scalable e-commerce solution built with Next.js 15, TypeScript, and cutting-edge technologies.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToastProvider>
              <div className="min-h-screen bg-background">
                <Header />
                <main>{children}</main>
              </div>
            </ToastProvider>
          </ThemeProvider>
        </body>
      </html>
 </ClerkProvider>
  )
}