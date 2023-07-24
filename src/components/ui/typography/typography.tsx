import * as React from 'react'

import './typography.scss'

type Variant =
  | 'Large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'Body 1'
  | 'Body 2'
  | 'Subtitle 1'
  | 'Subtitle 2'
  | 'Caption'
  | 'Overline'
  | 'Link 1'
  | 'Link 2'
type TypographyProps = {
  variant: Variant
  as?: 'h1' | 'h2' | 'h3' | 'a' | 'p'
  text: string
  to?: string
}

export const Typography: React.FC<TypographyProps> = ({ variant, text, as = 'p', to = '#' }) => {
  const Component = as
  const classs = `typography ${variant.toLowerCase()}`

  return <Component className={classs}>{text}</Component>
}
