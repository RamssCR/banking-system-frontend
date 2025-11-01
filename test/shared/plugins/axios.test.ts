import { describe, expect, test, vi } from 'vitest'
import { axiosInstance, processQueue } from '@shared/plugins/axios'
import { VITE_BACKEND_URL } from '@shared/config/env.config'
import axios from 'axios'

vi.mock('@features/auth/services/authorization', () => ({
  refresh: vi.fn(),
}))

vi.mock('@shared/config/env.config', () => ({
  VITE_BACKEND_URL: 'http://localhost:3000',
  MODE: 'development',
}))

describe('Axios Plugin', () => {
  test('contains correct default configuration', () => {
    expect(axiosInstance.defaults.baseURL).toBe(VITE_BACKEND_URL)
    expect(axiosInstance.defaults.headers['Content-Type']).toBe(
      'application/json',
    )
    expect(axiosInstance.defaults.headers['Accept']).toBe('application/json')
    expect(axiosInstance.defaults.withCredentials).toBe(true)
  })

  test('logs an error in development mode', async () => {
    vi.stubEnv('MODE', 'development')
    const logSpy = vi.spyOn(console, 'error').mockImplementation(vi.fn())
    vi.spyOn(axios, 'request').mockRejectedValueOnce(new Error('Network Error'))

    await expect(axiosInstance.get('/test')).rejects.toThrow('Network Error')

    expect(logSpy).toHaveBeenCalledWith(
      '%c[Axios Error]',
      'color: #F44336; font-weight: bold;',
      expect.any(Error),
    )

    logSpy.mockRestore()
  })

  test('processQueue resolves all promises on success', async () => {
    const results: Array<() => void> = []
    const rejects: Array<(error: unknown) => void> = []

    for (let i = 0; i < 5; i++) {
      results.push(vi.fn())
      rejects.push(vi.fn())
    }

    processQueue(null, 'new_token')

    await Promise.allSettled([
      ...results.map((resolve) => resolve()),
      ...rejects.map((reject) => reject(new Error('Failed'))),
    ])

    results.forEach((resolve) => {
      expect(resolve).toHaveBeenCalledTimes(1)
    })
    rejects.forEach((reject) => {
      expect(reject).toHaveBeenCalled()
    })
  })

  test('processQueue rejects all promises on error', async () => {
    const results: Array<() => void> = []
    const rejects: Array<(error: unknown) => void> = []

    for (let i = 0; i < 5; i++) {
      results.push(vi.fn())
      rejects.push(vi.fn())
    }

    const testError = new Error('Test Error')
    processQueue(testError)

    await Promise.allSettled([
      ...results.map((resolve) => resolve()),
      ...rejects.map((reject) => reject(testError)),
    ])
    results.forEach((resolve) => {
      expect(resolve).toHaveBeenCalled()
    })
    rejects.forEach((reject) => {
      expect(reject).toHaveBeenCalledWith(testError)
    })
  })
})
