import { z } from 'zod'

export const baseAuth = z.object({
  email: z.email(),
  password: z.string({ error: 'Password is required' }).min(8).max(100),
})

export const signUpSchema = baseAuth.extend({
  username: z.string({ error: 'Username is required' }).min(4).max(30),
  confirmPassword: z.refine((value) => value === baseAuth.shape.password, {
    error: 'Passwords do not match',
  }),
})

export type SignIn = z.infer<typeof baseAuth>
export type SignUp = z.infer<typeof signUpSchema>
