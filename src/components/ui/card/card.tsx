import { FC, ReactNode } from 'react'
import s from './card.module.scss'
import { clsx } from 'clsx'
import { Typography } from '../typography'

type CardProps = {
  children?: ReactNode
  className?: string
  title: string
}

export const Card: FC<CardProps> = ({ children, className, title }) => {
  return (
    <div className={clsx(s.root, className)}>
      <div className={s.title}>
        <Typography variant={'large'}>{title}</Typography>
      </div>
      <div className={s.content}>{children}</div>
    </div>
  )
}
