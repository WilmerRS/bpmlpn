import Image from 'next/image'
import { Heading } from '../atoms/Heading'

export interface MediaCardProps {
  key: string
  title: string
  description: string
  url: string
}

export function MediaCard({ title, description, url }: MediaCardProps) {
  return (
    <section className='mr-10 flex w-[30rem] flex-col sm:w-[40rem] md:w-[50rem] lg:w-[60rem]'>
      <div className='mb-5'>
        <Image
          src={url}
          alt={title}
          width={1000}
          height={1000}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Heading level='h5' size='small' color='light'>
        {title}
      </Heading>
      <p className='text-lpn-white'>{description}</p>
    </section>
  )
}
