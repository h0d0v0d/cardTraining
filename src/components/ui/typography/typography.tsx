import { ElementType, FC, PropsWithChildren } from 'react'

import { getTag } from '../../../common/utilis'

import './typography.scss'

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
  const classs = `typography ${variant.toLowerCase()}`

  return (
    <Component className={classs} {...restProps}>
      {children || text}
    </Component>
  )
}
