import { z } from 'zod'

export const LoginSheme = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  rememberMe: z.boolean().optional().default(false),
})

export type LoginShemeType = z.infer<typeof LoginSheme>
