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
  to?: string
  class?: {}
}

export const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
  children,
  variant,
  text,
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

const getTag = (variant: Variant) => {
  if (/link_[12]/i.test(variant)) {
    return 'a'
  } else if (/h[123]/i.test(variant)) {
    return variant as 'h1' | 'h2' | 'h3'
  } else if (/body_[12]/i.test(variant)) {
    return 'p'
  } else {
    return 'span'
  }
}
