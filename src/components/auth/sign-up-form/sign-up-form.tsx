import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import s from './sign-up.module.scss'

import { SignUpSheme, SignUpShemeType } from '@/common/shemes'
import { Button, Card, ControlledTextFiled, Typography } from '@/components/ui'

export type SignUpProps = {
  onSubmit: (data: SignUpShemeType) => void
}
export const SignUp: FC<SignUpProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpShemeType>({
    mode: 'onChange',
    resolver: zodResolver(SignUpSheme),
  })

  const onSubmitHandler = (data: SignUpShemeType) => {
    onSubmit(data)
  }

  return (
    <Card title={'Sign Up'} className={s.card}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <DevTool control={control} />
        <div className={s.containerInput}>
          <ControlledTextFiled
            name="email"
            control={control}
            errorMessage={errors.email?.message}
            label={'Email'}
          />
          <ControlledTextFiled
            name="password"
            control={control}
            password={true}
            errorMessage={errors.password?.message}
            label={'Password'}
          />
          <ControlledTextFiled
            name="confirm"
            control={control}
            password={true}
            errorMessage={errors.confirm?.message}
            label={'Confirm Password'}
          />
        </div>
        <Button variant={'primary'} fullWidth={true} type="submit">
          Sign Up
        </Button>
        <div className={s.text}>
          <Typography variant="Body_2" color="var(--color-light-900)">
            Already have an account?
          </Typography>
        </div>
        <Button as={'a'} variant={'link'} href={'*'} className={s.button}>
          Sign In
        </Button>
      </form>
    </Card>
  )
}
