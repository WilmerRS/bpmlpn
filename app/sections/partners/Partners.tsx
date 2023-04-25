import { Heading } from '@/app/design-system/atoms/Heading'
import { InfiniteCarousel } from '@/app/design-system/molecules/InfiniteCarousel'
import { Partner } from '@/app/design-system/molecules/Partner'
import { Container } from '@/app/design-system/objects/Container'

interface Partner {
  image: string
  name: string
}

export default function Partners() {
  const _partners: Partner[] = [
    {
      name: 'Alcaldía Municipal de Villa Caro',
      image: '/images/partners/villacaro.png',
    },
    {
      name: 'Universidad de Pamplona',
      image: '/images/partners/universidad-pamplona.png',
    },
    {
      name: 'Biblioteca Nacional de Colombia',
      image: '/images/partners/biblioteca-nacional.png',
    },
    {
      name: 'Ministerio de Cultura',
      image: '/images/partners/mincultura.png',
    },
    {
      name: 'Red Nacional de Bibliotecas públicas',
      image: '/images/partners/red-bibliotecas.png',
    },
  ]

  return (
    <section className='my-[10rem]'>
      <Container>
        <header className='mb-16'>
          <Heading size='medium' level='h1'>
            Agradecemos todo el apoyo
          </Heading>
        </header>
        <InfiniteCarousel>
          {_partners.map(({ image, name }) => (
            <Partner key={name} image={image} alt={name} />
          ))}
        </InfiniteCarousel>
      </Container>
    </section>
  )
}
