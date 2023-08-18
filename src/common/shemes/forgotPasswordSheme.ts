import { z } from 'zod'

export const ForgotPasswordSheme = z.object({
  email: z.string().nonempty('The field is required').email(),
})

export type ForgotPasswordShemeType = z.infer<typeof ForgotPasswordSheme>
