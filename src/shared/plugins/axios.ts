import { MODE, VITE_BACKEND_URL } from '@shared/config/env.config'
import { REQUEST_TIMEOUT_MS } from '@shared/utils/constants'
import axios from 'axios'
import { refresh } from '@features/auth/services/authorization'

type Queue = {
  resolve: (value?: unknown) => void
  reject: (error: unknown) => void
}

let isRefreshing = false
let failedQueue: Queue[] = []

/**
 * Processes the queue of failed requests.
 * @param error - The error that occurred during the request.
 * @param token - The new token to be used for the requests.
 * @returns void
 */
export const processQueue = (error: unknown, token: unknown = null) => {
  failedQueue.forEach((promise) => {
    if (error) promise.reject(error)
    else promise.resolve(token)
  })
  failedQueue = []
}

export const axiosInstance = axios.create({
  baseURL: VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: MODE === 'development' ? 0 : REQUEST_TIMEOUT_MS,
  withCredentials: true,
})

if (MODE === 'development') {
  axiosInstance.interceptors.request.use((config) => {
    console.log(
      '%c[Axios Request]',
      'color: #4CAF50; font-weight: bold;',
      config,
    )
    return config
  })
  axiosInstance.interceptors.response.use((response) => {
    console.log(
      '%c[Axios Response]',
      'color: #2196F3; font-weight: bold;',
      response,
    )
    return response
  })
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error(
        '%c[Axios Error]',
        'color: #F44336; font-weight: bold;',
        error,
      )
      return Promise.reject(error)
    },
  )
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config
      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject })
          })
            .then(() => axiosInstance(originalRequest))
            .catch(Promise.reject)
        }

        originalRequest._retry = true
        isRefreshing = true

        try {
          await refresh()
          processQueue(null)
          return axiosInstance(originalRequest)
        } catch (error) {
          processQueue(error)
          throw error
        } finally {
          isRefreshing = false
        }
      }

      return Promise.reject(error)
    },
  )
  // TODO: Attach a logger service to log errors in production (Sentry)
}
