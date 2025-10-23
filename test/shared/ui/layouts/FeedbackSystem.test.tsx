import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeedbackSystem } from '@shared/ui/layouts/FeedbackSystem'

describe('FeedbackSystem Layout', () => {
  test('renders with given props', () => {
    render(
      <FeedbackSystem
        title="Test Title"
        description="This is a test description."
        src="test-image.png"
        alt="Test Image"
      />,
    )

    expect(screen.getByText('Test Title')).toBeDefined()
    expect(screen.getByText('This is a test description.')).toBeDefined()
    expect(screen.getByAltText('Test Image')).toBeDefined()
  })

  test('renders actions when provided', () => {
    const actionText = 'Click Me'
    render(
      <FeedbackSystem
        title="Test Title"
        description="This is a test description."
        src="test-image.png"
        alt="Test Image"
        actions={<button type="button">{actionText}</button>}
      />,
    )

    expect(screen.getByText(actionText)).toBeDefined()
  })
})
