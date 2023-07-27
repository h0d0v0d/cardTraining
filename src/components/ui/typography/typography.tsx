import { ElementType, FC, PropsWithChildren } from 'react'

import clsx from 'clsx'

import { getTag } from '../../../common/utilis'

import s from './typography.module.scss'

export type Variant =
  | 'Large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'Body_1'
  | 'Body_2'
  | 'Subtitle_1'
  | 'Subtitle_2'
  | 'Caption'
  | 'Overline'
  | 'Link_1'
  | 'Link_2'
type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?: Variant
  text?: string
  style?: {}
}

export const Typography = <T extends ElementType = 'p'>({
  as,
  children,
  variant = 'h2',
  text = '',
  ...restProps
}: PropsWithChildren<TypographyProps<T>>) => {
  const Component = as || getTag(variant)
  const classs = clsx(s.typography, s[variant.toLowerCase()])

  return (
    <Component className={classs} {...restProps}>
      {children || text}
    </Component>
  )
}
