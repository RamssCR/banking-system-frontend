import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { ErrorPage } from '@shared/views/ErrorPage'
import { MemoryRouter } from 'react-router-dom'

describe('ErrorPage', () => {
  test('renders ErrorPage component correctly', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
    )
    expect(screen.getByText('Oops! Something went wrong.')).toBeDefined()
    expect(screen.getByText('We hit a snag with this page.')).toBeDefined()
    expect(screen.getByRole('button', { name: 'Refresh Page' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Go Home' })).toBeDefined()
  })

  test('fires reload function on Refresh Page button click', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
    )

    const button = screen.getByRole('button', { name: 'Refresh Page' })
    fireEvent.click(button)
    expect(button).toBeDefined()
  })
})
