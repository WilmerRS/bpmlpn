import { Heading } from '@/app/design-system/atoms/Heading'
import { Logo } from '@/app/design-system/icons/Logo'
import { Container } from '@/app/design-system/objects/Container'

import NextLink from 'next/link'

import { Special_Elite } from 'next/font/google'

const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
})

export default function Footer() {
  return (
    <footer className='mt-[5rem] bg-lpn-dark-blue py-10'>
      <Container>
        <div className='flex flex-col gap-4 md:flex-row md:gap-14'>
          <NextLink className='my-auto' href='/'>
            <Logo className='grow fill-lpn-white' height={120} />
          </NextLink>
          <nav className=''>
            <Heading size='tiny' color='light'>
              Nuestros servicios
            </Heading>

            <NextLink
              className='my-3 block text-lpn-white hover:underline'
              href='/'
            >
              Inicio
            </NextLink>
            <NextLink
              className='my-3 block text-lpn-white hover:underline'
              href='/blog'
            >
              Blog
            </NextLink>
            <NextLink
              className='my-3 block text-lpn-white hover:underline'
              href='/books'
            >
              Librería
            </NextLink>
          </nav>

          <nav className=''>
            <Heading size='tiny' color='light'>
              ¡Síguenos!
            </Heading>

            <NextLink
              className='my-3 block text-lpn-white hover:underline'
              href='https://www.facebook.com/bpm.luciopabonnunez.33'
              target='_blank'
            >
              Facebook
            </NextLink>
            <NextLink
              className='my-3 block text-lpn-white hover:underline'
              href='https://www.facebook.com/bpm.luciopabonnunez.33'
              target='_blank'
            >
              Instagram
            </NextLink>
          </nav>

          <div
            className={`${specialElite.className} ml-auto max-w-[25rem] italic text-white md:my-auto`}
          >
            <p className={`text-xl font-semibold md:text-2xl`}>
              El amor por los libros es uno de los regalos más selectos de los
              dioses.
            </p>
            <span>- Arthur Conan Doyle</span>
          </div>
        </div>

        <p className='mt-8 text-center font-light text-white'>
          <span className='pr-2'>Hecho con amor 🤍 por</span>
          <NextLink
            className='hover:underline'
            href={'https://www.linkedin.com/in/wilmerrs'}
            target='_blank'
          >
            WRS
          </NextLink>
        </p>
      </Container>
    </footer>
  )
}
