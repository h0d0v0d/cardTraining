import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import s from './login-form.module.scss'

import { LoginSheme, LoginShemeType } from '@/common/shemes'
import { Button, Card, ControlledCheckbox, ControlledTextFiled, Typography } from '@/components/ui'

export type LoginFormProps = {
  onSubmit: (data: LoginShemeType) => void
}

export const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginShemeType>({
    mode: 'onSubmit',
    resolver: zodResolver(LoginSheme),
  })
  const onSubmitHandler = (data: LoginShemeType) => {
    console.log(data)
    onSubmit(data)
  }

  return (
    <Card title={'Sign In'} className={s.card}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <DevTool control={control} />
        <div className={s.containerInput}>
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
          <div className={s.checkbox}>
            <ControlledCheckbox
              name="rememberMe"
              control={control}
              defaultValue={true}
              label="Remeber me"
            />
          </div>
        </div>
        <div className={s.buttonContainer}>
          <Typography variant="Body_2">Forgot password?</Typography>
          <Button type="submit" fullWidth={true}>
            Sign in
          </Button>
          <div className={s.text}>
            <Typography variant="Body_2" color="var(--color-light-900)">
              Dont have an account?
            </Typography>
          </div>
          <Button as="a" variant="link" href="#" className={s.button}>
            Sign up
          </Button>
        </div>
      </form>
    </Card>
  )
}
