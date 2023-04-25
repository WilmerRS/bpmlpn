import { Button } from '@/app/design-system/atoms/Button'
import { NavLink } from '@/app/design-system/atoms/NavLink'
import { Logo } from '@/app/design-system/icons/Logo'
import { Container } from '@/app/design-system/objects/Container'

import NextLink from 'next/link'

export default function Header() {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-10 py-3 bg-white bg-opacity-70'>
      <Container>
        <section className='flex items-center justify-between'>
          <NextLink href='/'>
            <Logo className='grow fill-lpn-dark-blue' height={40} />
          </NextLink>

          <nav className='hidden grow items-center justify-center gap-12 sm:flex '>
            <NavLink href='/home'>Inicio</NavLink>
            <NavLink href='/blog'>Blog</NavLink>
            <NavLink href='/books'>Librería</NavLink>
          </nav>

          <Button mode='primary' size='small'>
            Iniciar sesión
          </Button>
        </section>
      </Container>
    </header>
  )
}
