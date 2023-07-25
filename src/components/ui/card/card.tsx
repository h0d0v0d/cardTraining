import { FC, PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './card.module.scss'

type CardProps = {
  className?: string
  title: string
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ children, className, title }) => {
  return (
    <div className={clsx(s.root, className)}>
      <div className={s.title}>
        <Typography variant={'Large'}>{title}</Typography>
      </div>
      <div className={s.content}>{children}</div>
    </div>
  )
}
