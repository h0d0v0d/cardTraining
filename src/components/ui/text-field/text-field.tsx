import { ComponentProps, ReactNode, KeyboardEvent } from 'react'

import s from './text-field.module.scss'

export type TextFieldProps = {
  value?: string
  label?: string
  errorMessage?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  search?: boolean
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClearClick?: () => void
} & ComponentProps<'input'>

export const TextField = (props: TextFieldProps) => {
  const { errorMessage, label } = props

  return (
    <div className={s.root}>
      <span>{label}</span>
      <input type="text" className={s.input} placeholder={label} />
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}
