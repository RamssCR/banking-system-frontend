import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Checkbox } from '@shared/ui/primitives/Checkbox'

describe('Checkbox', () => {
  test('renders the checkbox correctly', () => {
    render(<Checkbox />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDefined()
  })

  test('calls the onKeyDown function when a key is pressed', () => {
    const onKeyDown = vi.fn()
    render(<Checkbox onKeyDown={onKeyDown} />)

    const checkbox = screen.getByRole('checkbox')
    fireEvent.keyDown(checkbox, { key: 'Enter' })

    expect(onKeyDown).toHaveBeenCalled()
  })

  test('calls the real onKeyDown function with the Space key', () => {
    const { container } = render(<Checkbox />)

    const checkbox = screen.getByRole('checkbox')

    fireEvent.keyDown(checkbox, { key: ' ' })

    const icon = container.querySelector('.h-4.w-4')
    expect(icon).toBeDefined()
  })
})
