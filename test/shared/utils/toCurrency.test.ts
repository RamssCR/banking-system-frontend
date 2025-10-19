import { describe, expect, test } from 'vitest'
import { toCurrency } from '@shared/utils/toCurrency'

describe('toCurrency', () => {
  test('formats number to USD currency by default', () => {
    expect(toCurrency(1234.56)).toBe('$1,234.56')
  })

  test('formats number to specified locale and currency', () => {
    expect(toCurrency(1234.56, 'de-DE', 'EUR')).toBe('1.234,56 €')
    expect(toCurrency(1234.56, 'ja-JP', 'JPY')).toBe('￥1,234.56')
  })
})
