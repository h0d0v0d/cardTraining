import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import s from './edit-name.module.scss'

import { EditNameSheme, EditNameShemeType } from '@/common/shemes/editNameShreme.ts'
import { Button, ControlledTextFiled } from '@/components/ui'

type EditNameProps = {
  saveName: (name: string) => void
  name: string
}
export const EditName: FC<EditNameProps> = ({ saveName, name }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EditNameShemeType>({
    mode: 'onSubmit',
    resolver: zodResolver(EditNameSheme),
    defaultValues: {
      name: name,
    },
  })

  const onSubmit = (data: EditNameShemeType) => {
    saveName(data.name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={s.nameContainer}>
        <DevTool control={control} />
        <ControlledTextFiled
          name="name"
          control={control}
          defaultValue={name}
          errorMessage={errors.name?.message}
          label={'Nickname'}
        />
        <Button variant={'primary'} fullWidth={true} type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  )
}
