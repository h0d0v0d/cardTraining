import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { LoginSheme, LoginShemeType } from '@/common/shemes'
import { Button, ControlledCheckbox, ControlledTextFiled } from '@/components/ui'

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginShemeType>({
    mode: 'onChange',
    resolver: zodResolver(LoginSheme),
  })
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* dev tool */}
      <DevTool control={control} />
      {/* dev tool */}
      <ControlledTextFiled
        name="email"
        control={control}
        defaultValue={''}
        errorMessage={errors.email?.message}
      />
      <ControlledTextFiled
        name="password"
        control={control}
        defaultValue={''}
        errorMessage={errors.password?.message}
      />
      <ControlledCheckbox name="rememberMe" control={control} />
      <Button type="submit">Sign in</Button>
    </form>
  )
}
