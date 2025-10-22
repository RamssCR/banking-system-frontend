import { afterAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useFader } from '@shared/hooks/useFader'
import tips from '@shared/data/loadingTips.json'
import { FADE_IN_OUT_DURATION_MS } from '@shared/utils/constants'

describe('useFader', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  test('should return initial state', () => {
    const { result } = renderHook(() => useFader(tips))
    expect(result.current.fade).toBe(true)
    expect(result.current.index).toBe(0)
  })

  test('should cycle through list with fade effect', () => {
    const interval = FADE_IN_OUT_DURATION_MS
    const { result } = renderHook(() => useFader(tips, interval))

    expect(result.current.index).toBe(0)
    expect(result.current.fade).toBe(true)

    act(() => {
      vi.advanceTimersByTime(interval)
    })

    expect(result.current.index).toBe(0)
    expect(result.current.fade).toBe(false)

    act(() => {
      vi.advanceTimersByTime(interval)
    })

    expect(result.current.index).toBe(1)
    expect(result.current.fade).toBe(false)
  })
})
