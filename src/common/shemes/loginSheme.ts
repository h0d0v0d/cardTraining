import { z } from 'zod'

export const LoginSheme = z
  .object({
    email: z.string().email(),
    password: z.string().min(4),
    confirm: z.string().min(4),
    rememberMe: z.boolean().optional().default(false),
  })
  .refine(data => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })

export type LoginShemeType = z.infer<typeof LoginSheme>
