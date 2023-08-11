import { FC } from 'react'

import { useController } from 'react-hook-form'

import { Checkbox } from '../../checkbox'

type PropsType = {
  control: any
  name: string
}

export const ControlledCheckbox: FC<PropsType> = ({ control, name }) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue: false,
  })

  return <Checkbox checked={value} onChange={onChange} />
}
