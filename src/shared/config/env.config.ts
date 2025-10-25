import { env } from '@shared/schemas/env'
import { treeifyError } from 'zod'

const parsed = env.safeParse(import.meta.env)

if (!parsed.success) {
  console.error(treeifyError(parsed.error)?.properties)
  throw new Error(
    'Invalid environment variables. Please check your configuration before starting the application.',
    { cause: parsed.error },
  )
}

export const { VITE_VERSION, VITE_BACKEND_URL, MODE } = parsed.data
