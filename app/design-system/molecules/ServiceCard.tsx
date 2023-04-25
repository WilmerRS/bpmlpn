import Image from 'next/image'
import { Heading } from '../atoms/Heading'

export type SVGIcons = 'dance' | 'read' | 'library'

export interface ServiceCardProps {
  title: string
  description: string
  icon: SVGIcons
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <section className='flex flex-col gap-2'>
      <div className='flex h-20 flex-col justify-center'>
        <Image
          src={`/icons/${icon}.svg`}
          alt={title}
          width={50}
          height={50}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Heading level='h5' size='tiny'>
        {title}
      </Heading>
      <p className='text-lpn-gray-text'>{description}</p>
    </section>
  )
}
