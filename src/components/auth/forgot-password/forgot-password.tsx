import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  ForgotPasswordSheme,
  ForgotPasswordShemeType,
} from '@/common/shemes/forgotPasswordSheme.ts'
import { Button, Card, ControlledTextFiled, Typography } from '@/components/ui'

type ForgotPasswordProps = {
  onSubmit: (data: ForgotPasswordShemeType) => void
}
export const ForgotPassword: FC<ForgotPasswordProps> = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordShemeType>({
    mode: 'onChange',
    resolver: zodResolver(ForgotPasswordSheme),
  })

  console.log(errors)

  const onSubmit = (data: ForgotPasswordShemeType) => {
    onSubmit(data)
    console.log(data)
  }

  return (
    <Card title={'Forgot your password?'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledTextFiled
          name="email"
          control={control}
          defaultValue={''}
          errorMessage={errors.email?.message}
          label={'Email'}
        />
        <Typography variant="Body_2" color="var(--color-dark-100)">
          Enter your email address and we will send you further instructions
        </Typography>
        <Button variant={'primary'} fullWidth={true} type="submit">
          Send Instructions
        </Button>
      </form>
      <Typography variant="Body_2" color="var(--color-light-900)">
        Did you remember your password?
      </Typography>
      <Button as={'a'} variant={'link'} href={'*'} className={'color: var(--color-accent-500)'}>
        Try logging in
      </Button>
    </Card>
  )
}
