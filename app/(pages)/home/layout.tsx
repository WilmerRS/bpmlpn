import Footer from '@/app/sections/layout/Footer'
import Header from '@/app/sections/layout/Header'

export const metadata = {
  title: 'Inicio | BPM Lucio Pabón Núñez',
  description: 'BPM Lucio Pabón Núñez home',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
