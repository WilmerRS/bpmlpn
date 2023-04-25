import { Heading } from '@/app/design-system/atoms/Heading'
import { Carousel } from '@/app/design-system/molecules/Carousel'
import { MediaCard } from '@/app/design-system/molecules/MediaCard'
import { Container } from '@/app/design-system/objects/Container'
import Link from 'next/link'

interface Media {
  url: string
  title: string
  description: string
}

const content: Media[] = [
  {
    url: '/images/slide-01.png',
    title: 'Excursión en la lectura',
    description: 'Excursión en la lectura: Un proyecto para incentivar la lectura en el area rural.',
  },
  {
    url: '/images/slide-02.png',
    title: 'Excursión en la lectura',
    description: 'Excursión en la lectura: Un proyecto para incentivar la lectura en el area rural.',
  },
  {
    url: '/images/slide-01.png',
    title: 'Excursión en la lectura',
    description: 'Excursión en la lectura: Un proyecto para incentivar la lectura en el area rural.',
  },
  {
    url: '/images/slide-02.png',
    title: 'Excursión en la lectura',
    description: 'Excursión en la lectura: Un proyecto para incentivar la lectura en el area rural.',
  },
  {
    url: '/images/slide-01.png',
    title: '5',
    description: '5',
  },
  {
    url: '/images/slide-02.png',
    title: '6',
    description: '6',
  },
]

export default function MediaContent() {
  return (
    <section className='bg-lpn-dark-blue py-[5rem]'>
      <Container>
        <header className='mb-16'>
          <Heading size='medium' color='light'>
            Contenido audiovisual
          </Heading>
        </header>

        <Carousel>
          {content.map(({ url, title, description }) => (
            <MediaCard
              key={title}
              title={title}
              description={description}
              url={url}
            />
          ))}
        </Carousel>

        <div className='mt-2 text-white text-center'>
          <span className='pr-2'>👋 Cultura y entretenimiento:</span>
          <Link className='font-bold hover:underline' href={'/content'}>
          Descubre más contenido
          </Link>
        </div>
      </Container>
    </section>
  )
}
