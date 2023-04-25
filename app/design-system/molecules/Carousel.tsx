'use client'

import React, { useRef, useState } from 'react'

export interface CarouselProps {
  children: React.ReactNode
}

export function Carousel({ ...props }: CarouselProps) {
  const carousel = useRef<HTMLDivElement>(null)
  const slider = useRef<HTMLDivElement>(null)
  const slides = React.Children.toArray(props.children)
  const [offset, setOffset] = useState(0)

  function getCarouselWidthOrThrow() {
    if (!carousel.current) {
      throw new Error('Expected carousel ref to be defined')
    }

    return carousel.current.offsetWidth
  }

  function getSlideWidthOrThrow() {
    if (!slider.current || !slider.current.children[0]) {
      throw new Error('Expected slide ref to be defined')
    }

    return (slider.current.children[0] as HTMLDivElement).offsetWidth
  }

  function scrollTo(x: number) {
    const slider = getSliderOrThrow()
    slider.scrollTo(x, 0)
  }

  function getSliderOrThrow() {
    if (!slider.current) {
      throw new Error('Expected slider ref to be defined')
    }

    return slider.current
  }

  function nextSlide() {
    const carouselWidth = getCarouselWidthOrThrow()
    const slideWidth = getSlideWidthOrThrow()

    const maxOffset = slideWidth * slides.length - carouselWidth
    let newOffset = Math.min(offset + slideWidth, maxOffset)

    if (newOffset === maxOffset) {
      newOffset = 0
    }

    setOffset(newOffset)
    scrollTo(newOffset)
  }

  function previousSlide() {
    const slideWidth = getSlideWidthOrThrow()

    let newOffset = Math.max(offset - slideWidth, 0)

    if (offset - slideWidth < 0) {
      const carouselWidth = getCarouselWidthOrThrow()
      const maxOffset = slideWidth * slides.length - carouselWidth
      newOffset = maxOffset
    }

    setOffset(newOffset)
    scrollTo(newOffset)
  }

  return (
    <div ref={carousel} className='overflow-hidden'>
      <div
        ref={slider}
        className='scrollbar-hide flex overflow-y-hidden overflow-x-scroll scroll-smooth transition-transform duration-150'
      >
        {slides.map((child, index) => (
          <div
            key={index}
            className='carousel-slide transition-transform duration-150'
          >
            {child}
          </div>
        ))}
      </div>

      <nav className='mb-4 mt-7'>
        <button
          className='h-10 w-10 rounded-full text-xl font-semibold text-white outline-lpn-dark-blue ring-white transition-all duration-200 hover:bg-white hover:text-lpn-dark-blue'
          onClick={previousSlide}
          aria-label='Anterior'
        >
          {'<-'}
        </button>
        <button
          className='h-10 w-10 rounded-full text-xl font-semibold text-white outline-lpn-dark-blue ring-white transition-all duration-200 hover:bg-white hover:text-lpn-dark-blue'
          onClick={nextSlide}
          aria-label='Siguiente'
        >
          {'->'}
        </button>
      </nav>
    </div>
  )
}
