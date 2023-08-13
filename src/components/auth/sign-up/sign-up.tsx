import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { LoginSheme, LoginShemeType } from '@/common/shemes'
import { Button, ControlledTextFiled, Typography } from '@/components/ui'

type SignUpProps = {
  onSubmit: (data: LoginShemeType) => void
}
export const SignUp: FC<SignUpProps> = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginShemeType>({
    mode: 'onChange',
    resolver: zodResolver(LoginSheme),
  })
  const onSubmit = (data: LoginShemeType) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <ControlledTextFiled
        name="email"
        control={control}
        defaultValue={''}
        errorMessage={errors.email?.message}
        label={'Email'}
      />
      <ControlledTextFiled
        name="password"
        control={control}
        defaultValue={''}
        password={true}
        errorMessage={errors.password?.message}
        label={'Password'}
      />
      <ControlledTextFiled
        name="confirm"
        control={control}
        defaultValue={''}
        password={true}
        errorMessage={errors.confirm?.message}
        label={'Confirm Password'}
      />
      <Button variant={'primary'} fullWidth={true}>
        Sign Up
      </Button>
      <Typography variant="Body_2" color="var(--color-light-900)">
        Already have an account?
      </Typography>
      <Button as={'a'} variant={'link'} href={'*'}>
        Sign In
      </Button>
    </form>
  )
}
