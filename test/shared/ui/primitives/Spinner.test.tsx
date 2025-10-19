import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from '@shared/ui/primitives/Spinner'

describe('Spinner', () => {
  test('renders the Spinner with default size', () => {
    render(<Spinner role="status" />)

    const spinner = screen.getByRole('status')
    expect(spinner).toBeDefined()
  })

  test('renders the Spinner with aria-busy attribute', () => {
    render(<Spinner role="status" aria-busy="true" />)

    const spinner = screen.getByRole('status')
    expect(spinner.getAttribute('aria-busy')).toBe('true')
  })
})
