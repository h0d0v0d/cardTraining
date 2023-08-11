import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

import { Typography, Variant } from '@/components/ui'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
  variantTypography?: Variant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    variant = 'primary',
    fullWidth,
    className,
    as: Component = 'button',
    variantTypography = 'Subtitle_2',
    children,
    ...rest
  } = props
  const buttonClass = `${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`

  return (
    <Component className={buttonClass} {...rest}>
      <Typography variant={variantTypography} color={buttonClass}>
        {children}
      </Typography>
    </Component>
  )
}
