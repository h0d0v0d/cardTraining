import * as React from 'react'

import './typography.scss'

type Variant =
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
