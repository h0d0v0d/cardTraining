import { z } from 'zod'

export const EditNameSheme = z.object({
  name: z.string(),
})

export type EditNameShemeType = z.infer<typeof EditNameSheme>
