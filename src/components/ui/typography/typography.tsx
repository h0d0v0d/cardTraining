import * as React from 'react'

import './typography.scss'

type Variant =
  | 'Large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'Body_1'
  | 'Body_2'
  | 'Subtitle 1'
  | 'Subtitle 2'
  | 'Caption'
  | 'Overline'
  | 'Link 1'
  | 'Link 2'
type TypographyProps = {
  variant: Variant
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'a' | 'span'
  to?: string
}

export const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
  children,
  variant,
  as = 'span',
  to = '#',
  text,
}) => {
  const Component = as
  const classs = `typography ${variant.toLowerCase()}`

  return <Component className={classs}>{children || text}</Component>
}
