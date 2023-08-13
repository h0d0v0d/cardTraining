import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { SignUpSheme, SignUpShemeType } from '@/common/shemes'
import { Button, ControlledTextFiled, Typography } from '@/components/ui'

type SignUpProps = {
  onSubmit: (data: SignUpShemeType) => void
}
export const SignUp: FC<SignUpProps> = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpShemeType>({
    mode: 'onChange',
    resolver: zodResolver(SignUpSheme),
  })

  console.log(errors)

  const onSubmit = (data: SignUpShemeType) => {
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
      <Button variant={'primary'} fullWidth={true} type="submit">
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
