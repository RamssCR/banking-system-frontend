import { describe, test, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { eventHandlers } from '@shared/helpers/eventHandlers'
import type { KeyboardEvent } from 'react'

describe('eventHandlers', () => {
  test('should handle case when currentTarget is null', () => {
    const { handleFormControls } = eventHandlers()

    const mockEvent = {
      key: 'Enter',
      preventDefault: vi.fn(),
      currentTarget: null,
    } as unknown as KeyboardEvent<HTMLElement>

    expect(() => handleFormControls(mockEvent)).not.toThrow()
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1)
  })

  test('should work with different element types', () => {
    const { handleFormControls } = eventHandlers()
    const handleClick = vi.fn()

    const { getByRole } = render(
      <input
        type="button"
        onClick={handleClick}
        onKeyDown={handleFormControls}
      />,
    )

    const input = getByRole('button')

    fireEvent.keyDown(input, { key: 'Enter' })
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('should be case sensitive for key names', () => {
    const { handleFormControls } = eventHandlers()
    const handleClick = vi.fn()

    const { getByRole } = render(
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleFormControls}
      >
        Press me
      </button>,
    )

    const button = getByRole('button')

    fireEvent.keyDown(button, { key: 'enter' })
    expect(handleClick).not.toHaveBeenCalled()
  })

  test('should do nothing for other keys', () => {
    const { handleFormControls } = eventHandlers()
    const handleClick = vi.fn()

    const { getByRole } = render(
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleFormControls}
      >
        Press me
      </button>,
    )

    const button = getByRole('button')

    const preventDefault = vi.fn()
    fireEvent.keyDown(button, { key: 'a', preventDefault })

    expect(preventDefault).not.toHaveBeenCalled()
    expect(handleClick).not.toHaveBeenCalled()
  })
})
