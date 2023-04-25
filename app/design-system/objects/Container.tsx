export interface ContainerProps {
  children: React.ReactNode
  tag?: 'div' | 'section'
  ariaLabel?: string
  ariaLabelledby?: string
}

export function Container({
  tag = 'div',
  ariaLabel,
  ariaLabelledby,
  children,
}: ContainerProps) {
  const Tag = tag

  return (
    <Tag
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className='mx-auto w-[375px] max-w-full px-4 sm:w-[480px] sm:px-5 md:w-[1024px] md:px-7 lg:w-[1240px] lg:px-12'
    >
      {children}
    </Tag>
  )
}
