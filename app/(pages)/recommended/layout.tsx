import Footer from "@/app/sections/layout/Footer"
import Header from "@/app/sections/layout/Header"

export const metadata = {
  title: 'Recomendados | BPM Lucio Pabón Núñez',
  description: 'BPM Lucio Pabón Núñez media recommended',
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
