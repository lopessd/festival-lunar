import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Festival da Lua 2025 | Sustentabilidade Ambiental",
  description:
    "4ª edição do Festival da Lua - 27 e 28 de setembro no Centro de Convivência. Tema: Sustentabilidade Ambiental.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
