import { describe, expect, expectTypeOf, test } from 'vitest'
import { type Env, env } from '@shared/schemas/env'

describe('Schema for Environment Variables', () => {
  test('successfully parses an object with all required properties', () => {
    const input = {
      VITE_BACKEND_URL: 'https://api.example.com',
      VITE_VERSION: '1.2.3',
      MODE: 'staging',
    }

    const result = env.parse(input)
    expect(input).toStrictEqual(result)
    expectTypeOf(result).toMatchObjectType<Env>()
  })

  test('fails to parse when VITE_BACKEND_URL is missing', () => {
    const input = {
      VITE_VERSION: '1.2.3',
      MODE: 'staging',
    }

    expect(() => env.parse(input)).toThrow()
  })
})
