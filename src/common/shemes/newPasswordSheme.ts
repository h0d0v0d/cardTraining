import { z } from 'zod'

export const NewPasswordSheme = z.object({
  password: z.string().min(4),
})

export type NewPasswordShemeType = z.infer<typeof NewPasswordSheme>
