import { Button } from '@/app/design-system/atoms/Button'
import { Heading } from '@/app/design-system/atoms/Heading'
import { BlogCard } from '@/app/design-system/molecules/BlogCard'
import { Container } from '@/app/design-system/objects/Container'

interface BlogEntry {
  title: string
  description: string
  image: string
  createdAt: Date
}

export default function BlogPreview() {
  const _entries: BlogEntry[] = [
    {
      title: 'Talleres de lectura',
      description:
        'La biblioteca promueve y lidera diversos proyectos culturales en el municipio, tales como...',
      image: '/images/blog-01.png',
      createdAt: new Date(),
    },
    {
      title: 'Cine para todos',
      description:
        'La biblioteca promueve y lidera diversos proyectos culturales en el municipio, tales como...',
      image: '/images/blog-02.png',
      createdAt: new Date(),
    },
    {
      title: 'Arte y más arte',
      description:
        'La biblioteca promueve y lidera diversos proyectos culturales en el municipio, tales como...',
      image: '/images/blog-03.png',
      createdAt: new Date(),
    },
  ]

  return (
    <section className='my-[10rem]'>
      <Container>
        <header className='mb-16'>
          <Heading size='medium' level='h1'>
            Conoce nuestros últimos trabajos
          </Heading>
        </header>

        <div className='my-[5rem] grid gap-5 md:grid-cols-3'>
          {_entries.map(({ title, description, image, createdAt }) => (
            <BlogCard
              key={title}
              title={title}
              description={description}
              image={image}
              createdAt={createdAt}
            />
          ))}
        </div>

        <div className='my-10 text-center'>
          <Button href='/blog' size='small'>Ver todas las entradas</Button>
        </div>
      </Container>
    </section>
  )
}
