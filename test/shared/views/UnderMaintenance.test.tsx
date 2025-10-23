import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UnderMaintenance } from '@shared/views/UnderMaintenance'

describe('UnderMaintenance Page', () => {
  test('renders UnderMaintenance component correctly', () => {
    render(<UnderMaintenance />)

    expect(screen.getByAltText('Bank under construction banner')).toBeDefined()
    expect(screen.getByText('Page under maintenance.')).toBeDefined()
    expect(
      screen.getByText('We are working hard to get it back up.'),
    ).toBeDefined()
  })
})
