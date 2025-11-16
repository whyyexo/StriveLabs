import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Background3DWrapper } from "@/components/Background3DWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StriveLabs - Building the AI Companies of Tomorrow",
  description: "StriveLabs is a next-generation AI holding company. We design, build and launch products that push the boundaries of automation, intelligence and creativity.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#0A0A0A' }}>
      <body className={`${inter.className} antialiased`} style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', margin: 0, padding: 0 }}>
        <Background3DWrapper />
        <Header />
        <main className="min-h-screen pt-20" style={{ paddingTop: '80px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

