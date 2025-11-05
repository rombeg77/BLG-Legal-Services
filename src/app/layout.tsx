import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BLG Legal Services - Immigration, Trademarks & Business Law',
  description: 'Trusted immigration law firm providing services in family petitions, removal defense, asylum, business visas, and trademarks. Serving clients nationwide with multilingual support.',
  keywords: 'immigration lawyer, immigration attorney, NYC immigration, family petitions, asylum lawyer, removal defense, business visas, trademarks',
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

