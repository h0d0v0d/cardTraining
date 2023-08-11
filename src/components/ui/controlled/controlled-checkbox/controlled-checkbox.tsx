import { UseControllerProps, useController, FieldValues } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../../checkbox'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  shouldUnregister,
  defaultValue,
  ...restProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return <Checkbox checked={value} onChange={onChange} id={name} {...restProps} />
}
