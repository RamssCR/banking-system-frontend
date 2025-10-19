import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '@shared/ui/primitives/Button'

describe('Button', () => {
  test('renders the button correctly', () => {
    render(
      <Button asChild>
        <span>Click me</span>
      </Button>,
    )

    const button = screen.getByText('Click me')
    expect(button).toBeDefined()
  })

  test('calls the onClick function when clicked', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)

    const button = screen.getByText('Click me')
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})
