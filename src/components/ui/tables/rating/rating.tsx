import { FC } from 'react'

import { Star } from '../../../../assets/icons/components'
import { StarOutline } from '../../../../assets/icons/components/StarOutline.tsx'
type EditBlockProps = {
  value: number
}
export const Rating: FC<EditBlockProps> = ({ value }) => {
  const starArr = []

  for (let i = 0; i < 5; i++) {
    let star = <Star color={'var(--color-warning-300)'} />

    if (value - 1 < i) star = <StarOutline color={'var(--color-warning-300)'} />
    starArr.push(star)
  }

  return <div>{starArr}</div>
}
