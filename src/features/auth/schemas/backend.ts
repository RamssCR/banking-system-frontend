import { z } from 'zod'

export const response = z.object({
  message: z.string(),
  user: z.object({
    id: z.number().int().positive(),
    username: z.string(),
    email: z.email(),
    role: z.object({
      id: z.number().int().positive(),
      name: z.string(),
    }),
  }),
})

export type Response = z.infer<typeof response>
