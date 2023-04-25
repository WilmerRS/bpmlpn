import Image from 'next/image'

import { Heading } from '@/app/design-system/atoms/Heading'
import { Container } from '@/app/design-system/objects/Container'
import { Button } from '@/app/design-system/atoms/Button'

export default function Advertising() {
  return (
    <section className='md:[27rem] relative h-[35rem] w-full'>
      <Image
        src='/images/advertising-background.png'
        alt='Advertising background'
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className='absolute inset-0 mx-auto my-20 flex flex-col items-center justify-center'>
        <Container>
          <Heading size='large' level='h1'>
            Un espacio para la cultura y la memoria.
          </Heading>

          <p className='my-10 text-base text-lpn-dark-blue md:text-lg'>
            La Biblioteca Pública Municipal Lucio Pabón Núñez es más que un
            lugar para leer, es un espacio para la cultura y la memoria de Villa
            Caro. Desde proyectos de rescate de saberes ancestrales hasta
            iniciativas de producción audiovisual, la biblioteca es un centro de
            acción comunitaria. Únete, participa y visita la biblioteca, ¡te
            esperamos!
          </p>

          <Button
            target='_blank'
            href='https://www.facebook.com/bpm.luciopabonnunez.33'
            size='small'
          >
            ¡Siguenos en Facebook!
          </Button>
        </Container>
      </div>
    </section>
  )
}
