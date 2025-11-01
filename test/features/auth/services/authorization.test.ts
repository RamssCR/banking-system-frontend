import { afterEach, describe, expect, test, vi } from 'vitest'
import {
  profile,
  refresh,
  signIn,
  signOut,
  signUp,
} from '@features/auth/services/authorization'
import { api } from '@shared/helpers/api'

vi.mock('@shared/helpers/api', () => ({
  api: {
    get: vi.fn(),
    post: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  },
}))

describe('Authorization Service', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('signUp should create a new user account', async () => {
    const mockData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    }
    const mockResponse = {
      message: 'Profile fetched successfully',
      user: {
        id: 1,
        username: 'Test User',
        email: 'test@example.com',
        role: { id: 1, name: 'User' },
      },
    }
    ;(api.post as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      data: mockResponse,
    })

    const response = await signUp(mockData)

    expect(api.post).toHaveBeenCalledWith('/auth/signup', mockData)
    expect(response).toEqual(mockResponse)
  })

  test('signIn should sign in the user', async () => {
    const mockData = {
      email: 'test@example.com',
      password: 'password123',
    }
    const mockResponse = {
      message: 'Profile fetched successfully',
      user: {
        id: 1,
        username: 'Test User',
        email: 'test@example.com',
        role: { id: 1, name: 'User' },
      },
    }
    ;(api.post as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      data: mockResponse,
    })

    const response = await signIn(mockData)

    expect(api.post).toHaveBeenCalledWith('/auth/signin', mockData)
    expect(response).toEqual(mockResponse)
  })

  test('profile should fetch the user profile', async () => {
    const mockData = {
      message: 'Profile fetched successfully',
      user: {
        id: 1,
        username: 'Test User',
        email: 'test@example.com',
        role: { id: 1, name: 'User' },
      },
    }
    ;(api.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      data: mockData,
    })

    await profile()
    expect(api.get).toHaveBeenCalledWith('/auth/profile')
  })

  test('refresh should refresh the authentication token', async () => {
    const mockData = {
      token: 'newlyGeneratedToken',
    }
    ;(api.post as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      data: mockData,
    })

    await refresh()
    expect(api.post).toHaveBeenCalledWith('/auth/refresh')
  })

  test('signOut should sign out the user', async () => {
    ;(api.post as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      data: {},
    })

    await signOut()
    expect(api.post).toHaveBeenCalledWith('/auth/signout')
  })
})
