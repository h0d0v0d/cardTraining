import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import s from './forgot-password.module.scss'

import {
  ForgotPasswordSheme,
  ForgotPasswordShemeType,
} from '@/common/shemes/forgotPasswordSheme.ts'
import { Button, Card, ControlledTextFiled, Typography } from '@/components/ui'

export type ForgotPasswordProps = {
  onCreate: (data: ForgotPasswordShemeType) => void
}
export const ForgotPassword: FC<ForgotPasswordProps> = ({ onCreate }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordShemeType>({
    mode: 'onSubmit',
    resolver: zodResolver(ForgotPasswordSheme),
    defaultValues: {
      email: '',
    },
  })

  console.log(errors)

  const onSubmit = (data: ForgotPasswordShemeType) => {
    console.log(data)
    onCreate(data)
  }

  return (
    <Card title={'Forgot your password?'} className={s.card}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledTextFiled
          name="email"
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
        />
        <div className={s.text}>
          <Typography variant="Body_2" color="var(--color-light-900)">
            Enter your email address and we will send you further instructions
          </Typography>
        </div>
        <Button variant={'primary'} fullWidth={true} type="submit">
          Send Instructions
        </Button>
      </form>
      <div className={s.textSecondary}>
        <Typography variant="Body_2" color="var(--color-light-900)">
          Did you remember your password?
        </Typography>
      </div>
      <Button as={'a'} variant={'link'} href={'*'} className={'color: var(--color-accent-500)'}>
        Try logging in
      </Button>
    </Card>
  )
}
