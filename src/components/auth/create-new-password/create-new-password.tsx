import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { NewPasswordSheme, NewPasswordShemeType } from '@/common/shemes/newPasswordSheme.ts'
import { Button, Card, ControlledTextFiled, Typography } from '@/components/ui'

type CreateNewPasswordProps = {
  onSubmit: (data: NewPasswordShemeType) => void
}
export const CreateNewPassword: FC<CreateNewPasswordProps> = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewPasswordShemeType>({
    mode: 'onChange',
    resolver: zodResolver(NewPasswordSheme),
  })

  console.log(errors)

  const onSubmit = (data: NewPasswordShemeType) => {
    onSubmit(data)
    console.log(data)
  }

  return (
    <Card title={'Create new password'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledTextFiled
          name="password"
          control={control}
          defaultValue={''}
          errorMessage={errors.password?.message}
          label={'Password'}
          password={true}
        />
        <Typography variant="Body_2" color="var(--color-dark-100)">
          Create new password and we will send you further instructions to email
        </Typography>
        <Button variant={'primary'} fullWidth={true} type="submit">
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
