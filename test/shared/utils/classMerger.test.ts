import { describe, expect, test } from 'vitest'
import { classMerger } from '@shared/utils/classMerger'

describe('classMerger', () => {
  test('combines classes correctly', () => {
    const result = classMerger('bg-red-500', 'text-white')
    expect(result).toBe('bg-red-500 text-white')
  })

  test('ignores empty classes', () => {
    const result = classMerger('bg-red-500', '')
    expect(result).toBe('bg-red-500')
  })

  test('removes duplicate classes', () => {
    const result = classMerger('bg-red-500', 'bg-red-500')
    expect(result).toBe('bg-red-500')
  })
})
