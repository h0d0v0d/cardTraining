import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui'

const LoginSheme = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  rememberme: z.boolean().optional().default(false),
})

type LoginShemeType = z.infer<typeof LoginSheme>

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginShemeType>({
    mode: 'onChange',
  })
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('email')} />
      <input type="text" {...register('password')} />
      <Button type="submit">Sign in</Button>
    </form>
  )
}
