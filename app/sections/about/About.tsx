import { Heading } from '@/app/design-system/atoms/Heading'
import {
  SVGIcons,
  ServiceCard,
} from '@/app/design-system/molecules/ServiceCard'
import { Container } from '@/app/design-system/objects/Container'

interface Service {
  title: string
  description: string
  icon: SVGIcons
}

export default function About() {
  const _services: Service[] = [
    {
      title: 'Proyectos culturales',
      description:
        'La biblioteca promueve y lidera diversos proyectos culturales en el municipio, tales como la conservación de la memoria local, la promoción de artistas y la difusión de la cultura.',
      icon: 'dance',
    },
    {
      title: 'Club de lectura',
      description:
        'La biblioteca cuenta con un club de lectura que fomenta el hábito de la lectura en la comunidad y promueve la discusión de diferentes temas literarios.',
      icon: 'read',
    },
    {
      title: 'Servicios bibliotecarios',
      description:
        'Además de los servicios bibliotecarios básicos, la biblioteca ofrece recursos y servicios de información para apoyar la educación, la investigación y el aprendizaje permanente en la comunidad.',
      icon: 'library',
    },
  ]

  return (
    <section className='my-[10rem]'>
      <Container>
        <Heading size='medium' level='h1'>
          Biblioteca Pública Municipal
        </Heading>
        <Heading size='large' level='h2'>
          Lucio Pabón Núñez
        </Heading>

        <p className='mb-5 text-lpn-gray-text'>
          Somos la Biblioteca Pública Municipal Lucio Pabón Núñez, creada en
          1997 en honor al escritor y político villacarense Lucio Pabón Núñez.
          Desde entonces, hemos sido parte de la Red Departamental de
          Bibliotecas Públicas de Norte de Santander y hemos trabajado en
          proyectos importantes para el municipio, como la creación del Club de
          Lectura &quot;Corazones de Tinta Para Todos&quot; y la realización de
          festivales culturales y producciones audiovisuales para rescatar la
          memoria histórica y artística de Villa Caro.
        </p>
        <p className='mb-5  text-lpn-gray-text'>
          Actualmente, además de ofrecer los servicios bibliotecarios básicos,
          seguimos liderando proyectos como &quot;Recogiendo Huellas&quot;, que
          busca rescatar la memoria histórica del municipio, y somos un lugar
          clave para la cultura y el arte en Villa Caro. Nos enorgullece ser
          parte activa de nuestra comunidad y contribuir al desarrollo cultural
          y educativo del municipio.
        </p>

        <div className='grid gap-5 md:grid-cols-3 my-[5rem]'>
          {_services.map(({ title, description, icon }) => (
            <ServiceCard
              key={title}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
