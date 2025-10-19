import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Link } from '@shared/ui/primitives/Link'
import { MemoryRouter } from 'react-router-dom'

describe('Link', () => {
  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <Link to="/about" variant="primary">
          Go to About page
        </Link>
      </MemoryRouter>,
    )

    expect(screen.getByText('Go to About page')).toBeDefined()
  })

  test('applies correct styles', () => {
    render(
      <MemoryRouter>
        <Link to="/about" variant="primary" className="custom-class">
          Go to About page
        </Link>
      </MemoryRouter>,
    )

    const link = screen.getByText('Go to About page')
    expect(link.getAttribute('class')).toContain('text-light')
  })
})
