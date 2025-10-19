import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from '@shared/ui/primitives/Input'

describe('Input', () => {
  test('renders input correctly', () => {
    render(<Input placeholder="Test input" />)

    const input = screen.getByPlaceholderText('Test input')
    expect(input).toBeDefined()
  })

  test('allows typing text in the input', () => {
    const onChange = vi.fn()
    render(<Input placeholder="Test input" onChange={onChange} />)

    const input = screen.getByPlaceholderText('Test input')
    fireEvent.change(input, { target: { value: 'Nuevo valor' } })
    expect(onChange).toHaveBeenCalled()
  })
})
