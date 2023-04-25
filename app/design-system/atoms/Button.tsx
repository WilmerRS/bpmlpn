import NextLink from 'next/link'
import React from 'react'

type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
}

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export interface ButtonProps {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'inverted'
  size?: 'large' | 'small'
  children: string
}

interface Overload {
  (props: HtmlButtonProps & ButtonProps): JSX.Element
  (props: AnchorProps & ButtonProps): JSX.Element
}

const _sizes: { [key: string]: string } = {
  large: 'px-14 py-3',
  small: 'px-7 py-2',
}

const _modes: { [key: string]: string } = {
  primary: 'bg-lpn-dark-blue text-lpn-white hover:bg-opacity-95',
  secondary: 'bg-lpn-dark-blue text-lpn-white hover:bg-opacity-95',
  tertiary: 'bg-lpn-dark-blue text-lpn-white hover:bg-opacity-95',
  inverted: 'bg-lpn-dark-blue text-lpn-white hover:bg-opacity-95',
}

const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps =>
  'href' in props

export function Button({ mode = 'primary', size = 'large', ...props }) {
  const componentProps = {
    className: `inline-flex ${_sizes[size]} ${_modes[mode]} items-center justify-center font-semibold transition-all duration-200 rounded-md outline-lpn-dark-blue`,
    ...props,
  }

  if (hasHref(componentProps)) {
    return <NextLink {...componentProps}></NextLink>
  }

  return <button {...componentProps} />
}
