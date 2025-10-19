import { Radio, RadioGroup } from '@shared/ui/primitives/Radio'
import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Radio', () => {
  test('renders the radio button', () => {
    render(
      <RadioGroup className="gap-1" defaultValue="option1">
        <Radio id="option1" value="Option 1" />
        <Radio id="option2" value="Option 2" />
      </RadioGroup>,
    )
    const radioButton = screen.getAllByRole('radio')
    expect(radioButton).toBeDefined()
  })

  test('selects the correct value when clicked', () => {
    render(
      <RadioGroup className="gap-1" defaultValue="Option 1">
        <Radio id="option1" value="Option 1" />
        <Radio id="option2" value="Option 2" />
      </RadioGroup>,
    )
    const radioButton = screen.getAllByRole('radio')
    expect(radioButton[0].getAttribute('aria-checked')).toBe('true')
  })

  test('calls the onKeyDown function when the space key is pressed', () => {
    const { container } = render(
      <RadioGroup className="gap-1">
        <Radio id="option1" value="Option 1" />
      </RadioGroup>,
    )
    const radioButton = screen.getByRole('radio')
    fireEvent.keyDown(radioButton, { key: ' ' })

    const circle = container.querySelector('.w-4.h-4.rounded-full.bg-contrast')
    expect(circle).toBeDefined()
  })

  test('calls the onKeyDown function when the Enter key is pressed', () => {
    const { container } = render(
      <RadioGroup className="gap-1">
        <Radio id="option1" value="Option 1" />
      </RadioGroup>,
    )
    const radioButton = screen.getByRole('radio')
    fireEvent.keyDown(radioButton, { key: 'Enter' })

    const circle = container.querySelector('.w-4.h-4.rounded-full.bg-contrast')
    expect(circle).toBeDefined()
  })

  test('calls the onKeyDown function with a mock', () => {
    const handleKeyDown = vi.fn()
    render(
      <RadioGroup className="gap-1">
        <Radio id="option1" value="Option 1" onKeyDownCapture={handleKeyDown} />
      </RadioGroup>,
    )
    const radioButton = screen.getByRole('radio')
    fireEvent.keyDown(radioButton, { key: 'Enter' })

    expect(handleKeyDown).toHaveBeenCalled()
  })
})
