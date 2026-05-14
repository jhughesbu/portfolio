import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { CursorSpotlight } from '@/components/ui/CursorSpotlight'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export const metadata: Metadata = {
  title: 'Jack Hughes — Builder',
  description: 'Jack Hughes is a builder who ships products, tools, and systems from idea to production.',
  openGraph: { title: 'Jack Hughes — Builder', description: 'Builder. Maker. Tinkerer. Shipper.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Jack Hughes — Builder', description: 'Builder. Maker. Tinkerer. Shipper.' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${inter.variable} antialiased`}>
        <CursorSpotlight />
        <Nav />
        {children}
      </body>
    </html>
  )
}
