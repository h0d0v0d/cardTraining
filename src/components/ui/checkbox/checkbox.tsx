import { FC, ReactNode } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './checkbox.module.scss'

import { Typography } from '@/components/ui'
import { Variant } from '@/components/ui/typography'

export type CheckboxProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  variantTypography?: Variant
  children?: ReactNode
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled,
  required,
  label,
  id,
  variantTypography,
  children,
}) => {
  const classNames = {
    container: s.container,
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    root: s.root,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root className={classNames.label}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            className={classNames.root}
            checked={checked}
            onCheckedChange={onChange}
            disabled={disabled}
            required={required}
            id={id}
          ></CheckboxRadix.Root>
        </div>
        <Typography
          variant={variantTypography ? variantTypography : 'Body_2'}
          color={disabled ? 'var(--color-dark-100, #808080)' : ''}
        >
          {children || label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
}
