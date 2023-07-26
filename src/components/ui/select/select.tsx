import { FC, ForwardedRef, forwardRef, ReactNode } from 'react'

import * as S from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { ArrowDown } from '../../../assets/icons/components'
import { Typography } from '../typography'

import s from './select.module.scss'
export type ShowOnPageSelectProps = {
  selectCurrent: string
  selectOptions: string[]
  onSelectChange?: (item: string) => void
  label?: string
  disabled: boolean
}
export const Select: FC<ShowOnPageSelectProps> = ({
  selectCurrent,
  selectOptions,
  onSelectChange,
  label,
  disabled,
}) => {
  return (
    <S.Root value={selectCurrent} onValueChange={onSelectChange} disabled={disabled}>
      <Typography variant={'Body_2'} style={{ color: 'var(--color-dark-100)' }}>
        {label}
      </Typography>
      <S.Trigger className={s.trigger}>
        <S.Value aria-label={selectCurrent}>
          <Typography variant={'Body_1'}>{selectCurrent}</Typography>
        </S.Value>
        <ArrowDown size={16} />
      </S.Trigger>
      <S.Portal>
        <S.Content className={s.content} position={'popper'}>
          <S.Viewport>
            <S.Group>
              {selectOptions.map(option => (
                <SelectItem key={option} value={option} className={s.item}>
                  {option}
                </SelectItem>
              ))}
            </S.Group>
          </S.Viewport>
        </S.Content>
      </S.Portal>
    </S.Root>
  )
}

const SelectItem = forwardRef(
  (
    { children, className, value, ...props }: SelectItemProps,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <S.Item className={clsx('SelectItem', className)} value={value} {...props} ref={forwardedRef}>
        <S.ItemText>
          <Typography variant={'Body_1'}>{children}</Typography>
        </S.ItemText>
      </S.Item>
    )
  }
)

type SelectItemProps = {
  children: ReactNode
  className?: string
  value: string
}
