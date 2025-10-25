import { z } from 'zod'

export const env = z.object({
  VITE_VERSION: z.string().default('0.0.1'),
  VITE_BACKEND_URL: z.url(),
  MODE: z
    .enum(['development', 'staging', 'production', 'test'])
    .default('development'),
})

export type Env = z.infer<typeof env>
