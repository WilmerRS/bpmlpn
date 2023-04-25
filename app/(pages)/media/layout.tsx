import Footer from "@/app/sections/layout/Footer"
import Header from "@/app/sections/layout/Header"

export const metadata = {
  title: 'Contenido | BPM Lucio Pabón Núñez',
  description: 'BPM Lucio Pabón Núñez media content',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
