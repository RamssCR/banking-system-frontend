import { describe, expect, test, vi } from 'vitest'
import { api } from '@shared/helpers/api'
import { axiosInstance } from '@shared/plugins/axios'

vi.mock('@shared/plugins/axios', () => ({
  axiosInstance: {
    get: vi.fn(),
    post: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  },
}))

describe('Api Helper', () => {
  test('should perform a GET request', async () => {
    const mockData = { data: { message: 'GET success' } }
    ;(
      axiosInstance.get as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValueOnce(mockData)

    const response = await api.get<{ message: string }>('/test-get')
    expect(response).toEqual(mockData.data)
    expect(axiosInstance.get).toHaveBeenCalledWith('/test-get', undefined)
  })

  test('should perform a POST request', async () => {
    const mockData = { data: { message: 'POST success' } }
    ;(
      axiosInstance.post as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValueOnce(mockData)

    const response = await api.post<{ message: string }>('/test-post', {
      key: 'value',
    })
    expect(response).toEqual(mockData.data)
    expect(axiosInstance.post).toHaveBeenCalledWith(
      '/test-post',
      { key: 'value' },
      undefined,
    )
  })

  test('should perform a PATCH request', async () => {
    const mockData = { data: { message: 'PATCH success' } }
    ;(
      axiosInstance.patch as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValueOnce(mockData)

    const response = await api.patch<{ message: string }>('/test-patch', {
      key: 'newValue',
    })
    expect(response).toEqual(mockData.data)
    expect(axiosInstance.patch).toHaveBeenCalledWith(
      '/test-patch',
      { key: 'newValue' },
      undefined,
    )
  })

  test('should perform a DELETE request', async () => {
    const mockData = { data: { message: 'DELETE success' } }
    ;(
      axiosInstance.delete as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValueOnce(mockData)

    const response = await api.delete<{ message: string }>('/test-delete')
    expect(response).toEqual(mockData.data)
    expect(axiosInstance.delete).toHaveBeenCalledWith('/test-delete', undefined)
  })
})
