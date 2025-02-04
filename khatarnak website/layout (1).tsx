import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "Karachi Metropolitan Corporation",
  description: "Official website of Karachi Metropolitan Corporation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

