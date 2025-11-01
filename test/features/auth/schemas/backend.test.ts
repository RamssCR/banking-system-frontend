import { describe, expect, expectTypeOf, test } from 'vitest'
import { type Response, response } from '@features/auth/schemas/backend'

describe('Backend Auth Schemas', () => {
  test('parses Response schema correctly', () => {
    const responseData = {
      message: 'User created successfully',
      user: {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
        role: {
          id: 2,
          name: 'user',
        },
      },
    }

    const parsed = response.parse(responseData)

    expect(parsed).toEqual(responseData)
    expectTypeOf(parsed).toMatchObjectType<Response>()
  })

  test('throws error for invalid Response data', () => {
    const invalidResponseData = {
      status: 'unknown-status',
      message: 12345,
      data: 'invalid-data',
    }
    expect(() => response.parse(invalidResponseData)).toThrow()
  })
})
