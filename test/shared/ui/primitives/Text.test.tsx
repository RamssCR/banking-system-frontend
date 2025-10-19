import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Text } from '@shared/ui/primitives/Text'

describe('Text', () => {
  test('renders with default props', () => {
    render(<Text>Default Text</Text>)
    const textElement = screen.getByText('Default Text')
    expect(textElement).toBeDefined()
    expect(textElement.tagName).toBe('P')
  })

  test('applies custom class', () => {
    render(<Text className="custom-class">Custom Class Text</Text>)
    const textElement = screen.getByText('Custom Class Text')
    expect(textElement.getAttribute('class')).toContain('custom-class')
  })
})
