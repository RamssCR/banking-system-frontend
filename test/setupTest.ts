import { afterEach, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(vi.fn())
  vi.spyOn(console, 'log').mockImplementation(vi.fn())
})

vi.stubEnv('VITE_VERSION', 'test')
vi.stubEnv('VITE_BACKEND_URL', 'https://mock.api.com')
vi.stubEnv('MODE', 'test')

afterEach(() => {
  cleanup()

  vi.restoreAllMocks()
  vi.clearAllMocks()
  vi.resetModules()
  vi.useRealTimers()
})

vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) =>
  setTimeout(cb, 0),
)

window.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

window.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  takeRecords: vi.fn().mockReturnValue([]),
}))
