import * as React from 'react'
import { FC, PropsWithChildren } from 'react'

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
type TypographyProps = {
  variant?: Variant
  text?: string
  href?: string
  style?: {}
}

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  variant = 'h2',
  text = 'add in child text',
  ...restProps
}) => {
  const Tag = getTag(variant)
  const classs = `typography ${variant.toLowerCase()}`

  return (
    <Tag className={classs} {...restProps}>
      {children || text}
    </Tag>
  )
}
