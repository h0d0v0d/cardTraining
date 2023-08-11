import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, ControlledCheckbox, ControlledTextFiled } from '@/components/ui'

const LoginSheme = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  rememberMe: z.boolean().optional().default(false),
})

type LoginShemeType = z.infer<typeof LoginSheme>

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
