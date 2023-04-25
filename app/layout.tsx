import './globals.css'

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'BPM Lucio Pabón Núñez',
  description: 'BPM Lucio Pabón Núñez landing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
