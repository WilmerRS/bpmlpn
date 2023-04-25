'use client'

import React from 'react'

export interface InfiniteCarouselProps {
  children: React.ReactNode
}

export function InfiniteCarousel({ children }: InfiniteCarouselProps) {
  const slides = React.Children.toArray(children)

  return (
    <div className='overflow-hidden'>
      <div className='scrollbar-hide flex items-center justify-center gap-12  overflow-y-hidden overflow-x-scroll scroll-smooth transition-transform duration-150'>
        {slides.map((child, index) => (
          <div
            key={index}
            className='carousel-slide transition-transform duration-150'
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
