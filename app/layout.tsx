import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
