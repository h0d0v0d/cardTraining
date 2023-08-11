import { UseControllerProps, useController, FieldValues } from 'react-hook-form'

import { TextField } from '../..'
import { TextFieldProps } from '../../text-field'

type ControlledTextFiledProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<TextFieldProps, 'value' | 'onChange' | 'id'>

export const ControlledTextFiled = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...restProps
}: ControlledTextFiledProps<TFieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return <TextField value={value} onChange={onChange} id={name} {...restProps} />
}
