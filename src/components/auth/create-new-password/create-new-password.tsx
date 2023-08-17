import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import s from './create-new-password.module.scss'

import { NewPasswordSheme, NewPasswordShemeType } from '@/common/shemes/newPasswordSheme.ts'
import { Button, Card, ControlledTextFiled, Typography } from '@/components/ui'

export type CreateNewPasswordProps = {
  createPassword: (data: NewPasswordShemeType) => void
}
export const CreateNewPassword: FC<CreateNewPasswordProps> = ({ createPassword }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewPasswordShemeType>({
    mode: 'onChange',
    resolver: zodResolver(NewPasswordSheme),
  })

  const createPasswordHandler = (data: NewPasswordShemeType) => {
    console.log(data)
    createPassword(data)
  }

  return (
    <Card title={'Create new password'} className={s.card}>
      <form onSubmit={handleSubmit(createPasswordHandler)}>
        <DevTool control={control} />
        <ControlledTextFiled
          name="password"
          control={control}
          defaultValue={''}
          errorMessage={errors.password?.message}
          label={'Password'}
          password={true}
        />
        <div className={s.text}>
          <Typography variant="Body_2" color="var(--color-light-900)">
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
        <Button variant={'primary'} fullWidth={true} type="submit">
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
