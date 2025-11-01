import { describe, expect, expectTypeOf, test } from 'vitest'
import {
  type SignIn,
  type SignUp,
  baseAuth,
  signUpSchema,
} from '@features/auth/schemas/auth'

describe('Auth Schemas', () => {
  test('parses SignUp schema correctly', () => {
    const signUpData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'StrongP@ssw0rd!',
      confirmPassword: 'StrongP@ssw0rd!',
    }

    const parsed = signUpSchema.parse(signUpData)

    expect(parsed).toEqual(signUpData)
    expectTypeOf(parsed).toMatchObjectType<SignUp>()
  })

  test('parses SignIn schema correctly', () => {
    const signInData = {
      email: 'test@example.com',
      password: 'StrongP@ssw0rd!',
    }

    const parsed = baseAuth.parse(signInData)

    expect(parsed).toEqual(signInData)
    expectTypeOf(parsed).toMatchObjectType<SignIn>()
  })

  test('throws error for invalid SignUp data', () => {
    const invalidSignUpData = {
      username: 'tu',
      email: 'invalid-email',
      password: 'weak',
      confirmPassword: 'different',
    }

    expect(() => signUpSchema.parse(invalidSignUpData)).toThrow()
  })

  test('throws error for invalid SignIn data', () => {
    const invalidSignInData = {
      email: 'invalid-email',
      password: 'weak',
    }

    expect(() => baseAuth.parse(invalidSignInData)).toThrow()
  })
})
