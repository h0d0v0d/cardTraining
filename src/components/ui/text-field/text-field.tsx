import { ComponentProps, ReactNode, KeyboardEvent } from 'react'
import { clsx } from 'clsx'
import s from './text-field.module.scss'
import { Close, Search } from '../../../assets/icons/components'
import { Typography } from '../typography'
import { PasswordEye } from '../../../assets/icons/components'

export type TextFieldProps = {
  value?: string
  label?: string
  errorMessage?: string
  placeholder?: string
  search?: boolean
  password?: boolean
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClearClick?: () => void
} & ComponentProps<'input'>

export const TextField = (props: TextFieldProps) => {
  const { errorMessage, label, search, placeholder, password, onClearClick, ...rest } = props

  let iconStart: ReactNode | null = null
  let iconEnd: ReactNode | null = null
  if (search) iconStart = <Search color={'var(--color-dark-100)'} size={20} />
  if (password) iconEnd = <PasswordEye color={'var(--color-light-100)'} size={20} />

  const isShowClearButton = onClearClick && rest?.value?.length! > 0
  const dataIconStart = iconStart ? 'start' : ''
  const dataIconEnd = isShowClearButton || iconEnd ? 'end' : ''
  const dataIcon = dataIconStart + dataIconEnd
  return (
    <div className={s.root}>
      {!search && (
        <Typography
          variant={'Body_2'}
          style={{ color: rest.disabled ? 'var(--color-dark-300)' : 'var(--color-dark-100)' }}
        >
          {label}
        </Typography>
      )}
      <div className={s.inputContainer}>
        <input
          type={password ? 'password' : 'text'}
          className={clsx(s.input, errorMessage && s.error)}
          data-icon={dataIcon}
          placeholder={placeholder}
          disabled={rest.disabled}
          {...rest}
        />
        {iconStart && <span className={s.iconStart}>{iconStart}</span>}
        {iconEnd && <span className={s.iconEnd}>{iconEnd}</span>}
        {isShowClearButton && (
          <button
            className={clsx(s.clearButton, s.iconEnd)}
            onClick={onClearClick}
            type="button"
            disabled={rest.disabled}
          >
            {<Close size={20} color={'var(--color-dark-100)'} />}
          </button>
        )}
      </div>
      {errorMessage && (
        <Typography variant={'Caption'} style={{ color: 'var(--color-danger-300)' }}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
