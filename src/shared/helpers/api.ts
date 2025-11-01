import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { axiosInstance } from '@shared/plugins/axios'

export const api = {
  get: async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    const response = await axiosInstance.get(url, config)
    return response.data
  },
  post: async <T>(
    url: string,
    data: unknown = {},
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    const response = await axiosInstance.post(url, data, config)
    return response.data
  },
  patch: async <T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    const response = await axiosInstance.patch(url, data, config)
    return response.data
  },
  delete: async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    const response = await axiosInstance.delete(url, config)
    return response.data
  },
}
