import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './tables.module.scss'

type Column = {
  title: string
  sortKey: string
  width?: string
}

export type TableProps = {
  columns: Column[]
  children?: ReactNode
  className?: string
}

export const Table: FC<TableProps> = ({ columns, children, className }) => {
  return (
    <table className={clsx(s.table, className)}>
      <thead>
        <tr>
          {columns.map(({ title, width }, index) => {
            return (
              <th key={`column-${index}`} style={{ width }}>
                {title && <Typography variant={'Subtitle_2'}>{title}</Typography>}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

type CellProps = {
  children?: ReactNode
  className?: string
  img?: string
}

export const Cell: FC<CellProps> = ({ children, className, img }) => {
  return (
    <td className={clsx(s.cell, className)}>
      <div className={s.cellContainer}>
        {img && (
          <div className={s.imgContainer}>
            <img src={img} alt="packImg" />
          </div>
        )}
        {typeof children === 'string' ? (
          <Typography variant={'Body_2'}>{children}</Typography>
        ) : (
          <> {children}</>
        )}
      </div>
    </td>
  )
}
