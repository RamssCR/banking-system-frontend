import {
  type Response,
  response as responseSchema,
} from '@features/auth/schemas/backend'
import type { SignIn, SignUp } from '@features/auth/schemas/auth'
import { api } from '@shared/helpers/api'

/**
 * Creates a new user account and signs the user in.
 * @param data - User credentials for signing in.
 * @returns User data along with a success message.
 */
export const signUp = async (data: SignUp): Promise<Response> => {
  const response = await api.post<unknown>('/auth/signup', data)
  return responseSchema.parse(response.data)
}

/**
 * Signs user into his account.
 * @param data - User credentials for signing in.
 * @returns User data along with a success message.
 */
export const signIn = async (data: SignIn): Promise<Response> => {
  const response = await api.post<unknown>('/auth/signin', data)
  return responseSchema.parse(response.data)
}

/**
 * Fetches the profile of the currently authenticated user.
 * @returns User data along with a success message.
 */
export const profile = async (): Promise<Response['user']> => {
  const response = await api.get<unknown>('/auth/profile')
  return responseSchema.parse(response.data).user
}

/**
 * Refreshes the authentication tokens of the currently authenticated user.
 * The backend must set the new tokens in the cookies so user can be
 * redirected without any additional handling on the frontend.
 * @returns A promise that resolves when the tokens are refreshed.
 */
export const refresh = async (): Promise<void> => {
  await api.post('/auth/refresh')
}

/**
 * Signs the user out of his account.
 * @returns A promise that resolves when the user is signed out.
 */
export const signOut = async (): Promise<void> => {
  await api.post('/auth/signout')
}
