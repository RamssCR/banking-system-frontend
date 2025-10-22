import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Loading } from '@shared/views/Loading'

vi.mock('@shared/components/Tips', () => ({
  Tips: ({ ...props }) => <div {...props}>Mocked Tips Component</div>,
}))

describe('Loading View', () => {
  test('renders Loading component with spinner and text', () => {
    render(<Loading />)
    expect(screen.getByText('Loading...')).toBeDefined()
    expect(screen.getByText('Mocked Tips Component')).toBeDefined()
  })
})
