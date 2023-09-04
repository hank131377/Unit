import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbar'

const comforter = Inter({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'index',
  description: 'index',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={comforter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
