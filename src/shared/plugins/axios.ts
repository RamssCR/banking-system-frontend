import { MODE, VITE_BACKEND_URL } from '@shared/config/env.config'
import { REQUEST_TIMEOUT_MS } from '@shared/utils/constants'
import axios from 'axios'

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
  axiosInstance.interceptors.response.use(undefined, (error) => {
    console.error(
      '%c[Axios Error]',
      'color: #F44336; font-weight: bold;',
      error,
    )
    return Promise.reject(error)
  })
  // 1st TODO: Attach a logger service to log errors in production (Sentry)
  // 2nd TODO: Attach a `refresh` request to refresh tokens on 401 responses
}
