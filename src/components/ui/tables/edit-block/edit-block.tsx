import { Children, FC, ReactNode } from 'react'

import s from '../tables.module.scss'

type EditBlockProps = {
  children: ReactNode
  className?: string
  img?: string
}
export const EditBlock: FC<EditBlockProps> = ({ children }) => {
  return (
    <div className={s.editBlock}>
      {Children.map(children, child => {
        return <button className={s.button}>{child}</button>
      })}
    </div>
  )
}
