import Image from 'next/image'
import { Heading } from '../atoms/Heading'

export interface PartnerProps {
  image: string
  alt: string
}

export function Partner({ image, alt }: PartnerProps) {
  return (
    <div className='grayscale hover:grayscale-0 transition-all duration-150 w-40'>
      <Image
        src={image}
        alt={alt}
        width={1000}
        height={1000}
      />
    </div>
  )
}
