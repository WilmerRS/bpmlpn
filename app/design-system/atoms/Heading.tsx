import React from 'react'

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingSizes = 'tiny' | 'small' | 'medium' | 'large'
type HeadingColor = 'light' | 'dark'

export interface HeadingProps {
  level?: HeadingLevels
  size?: HeadingSizes
  id?: string
  color?: HeadingColor
  children: React.ReactNode
}

const _levels: {
  [key in HeadingLevels]: string
} = {
  h1: 'font-bold',
  h2: 'font-bold',
  h3: 'font-bold',
  h4: 'font-bold',
  h5: 'font-bold',
  h6: 'font-bold',
}
const _sizes: {
  [key in HeadingSizes]: string
} = {
  tiny: 'text-md md:text-lg mb-1',
  small: 'text-lg mb-2',
  medium: 'text-3xl md:text-3xl lg:text-4xl mb-3 sm:mb-3 md:mb-4 lg:mb-6',
  large: 'text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-5 md:mb-6 lg:mb-10',
}

const _colors: {
  [key in HeadingColor]: string
} = {
  light: 'text-lpn-white',
  dark: 'text-lpn-dark-blue',
}

export function Heading({
  children,
  level = 'h1',
  size = 'medium',
  color = 'dark',
  id,
  ...props
}: HeadingProps) {
  const Tag = level

  return (
    <Tag
      id={id}
      className={`${_levels[level]} ${_sizes[size]} ${_colors[color]}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
