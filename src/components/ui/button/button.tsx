import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

import { Typography } from '@/components/ui'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest}>
      <Typography>{props.children || variant}</Typography>
    </Component>
  )
}
