import { z } from 'zod'

export const SignUpSheme = z
  .object({
    email: z.string().email(),
    password: z.string().min(4),
    confirm: z.string().min(4),
  })
  .refine(data => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })

export type SignUpShemeType = z.infer<typeof SignUpSheme>
