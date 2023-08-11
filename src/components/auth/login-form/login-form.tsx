import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui'
import { ControlledCheckbox } from '@/components/ui/controlled'

const LoginSheme = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  rememberMe: z.boolean().optional().default(false),
})

type LoginShemeType = z.infer<typeof LoginSheme>

export const LoginForm = () => {
  const { register, handleSubmit, control } = useForm<LoginShemeType>({
    mode: 'onChange',
  })
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('email')} />
      <input type="text" {...register('password')} />
      <ControlledCheckbox name="rememberMe" control={control} />
      <Button type="submit">Sign in</Button>
    </form>
  )
}
