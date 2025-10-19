import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Title } from '@shared/ui/primitives/Title'

describe('Title', () => {
  test('renders the component with default props', () => {
    render(<Title>Texto por defecto</Title>)
    const titleElement = screen.getByText('Texto por defecto')
    expect(titleElement).toBeDefined()
    expect(titleElement.tagName).toBe('H1')
  })

  test('applies a custom class', () => {
    render(
      <Title as="h2" className="custom-title">
        Texto personalizado
      </Title>,
    )
    const titleElement = screen.getByText('Texto personalizado')
    expect(titleElement.getAttribute('class')).toContain('custom-title')
  })
})
