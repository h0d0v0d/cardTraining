import * as React from 'react'

import s from './typography.module.scss'

type TypographyProps = {
  variant:
    | 'Large'
    | 'Body 1'
    | 'Body 2'
    | 'Subtitle 1'
    | 'Subtitle 2'
    | 'Caption'
    | 'Overline'
    | 'Link 1'
    | 'Link 2'
  as?: 'h1' | 'h2' | 'h3' | 'a' | 'p'
  text: string
  to?: string
}

export const Typography: React.FC<TypographyProps> = ({ variant, text, as = 'p', to = '#' }) => {
  const Component = as
  const classs = variant.toLowerCase()

  return <Component className={s[classs]}>{text}</Component>
}
