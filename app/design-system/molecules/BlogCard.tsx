import Image from 'next/image'
import { Heading } from '../atoms/Heading'
import Link from 'next/link'

export interface ServiceCardProps {
  title: string
  description: string
  image: string
  createdAt: Date
}

export function BlogCard({
  title,
  description,
  image,
  createdAt,
}: ServiceCardProps) {
  function dateFormat(date: Date): string {
    return date.toLocaleString('es-CO', {
      day: 'numeric',
      month: 'long',
      weekday: 'long',
      year: 'numeric',
      hour12: true,
    })
  }

  return (
    <section className='flex flex-col gap-2'>
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        style={{ objectFit: 'cover' }}
      />
      <Link className='hover:underline decoration-lpn-dark-blue' href={`/blog/${title}`}>
        <Heading level='h5' size='tiny'>
          {title}
        </Heading>
      </Link>
      <p className='text-lpn-gray-text'>{description}</p>
      <p className='text-sm font-light text-lpn-gray-text'>
        {dateFormat(createdAt)}
      </p>
    </section>
  )
}
