import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { NotFound } from '@shared/views/NotFound'

describe('NotFound View', () => {
  test('renders NotFound component correctly', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    )

    expect(
      screen.getByAltText('Piggy sitting on a beach chair looking confused'),
    ).toBeDefined()
    expect(screen.getByText('Oops! This page took a vacation.')).toBeDefined()
  })
})
