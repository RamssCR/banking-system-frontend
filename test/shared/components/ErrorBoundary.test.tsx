import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from '@shared/components/ErrorBoundary'
import { MemoryRouter } from 'react-router-dom'

describe('ErrorBoundary', () => {
  test('renders children when no error occurs', () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <div>Test Child Component</div>
        </ErrorBoundary>
      </MemoryRouter>,
    )
    expect(screen.getByText('Test Child Component')).toBeDefined()
  })

  test('renders ErrorPage when an error occurs', () => {
    const ProblemChild = () => {
      throw new Error('Test error')
    }

    render(
      <MemoryRouter>
        <ErrorBoundary>
          <ProblemChild />
        </ErrorBoundary>
      </MemoryRouter>,
    )

    expect(screen.getByText('Oops! Something went wrong.')).toBeDefined()
  })
})
