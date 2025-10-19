import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Label } from '@shared/ui/primitives/Label'

describe('Label', () => {
  test('renders the label correctly', () => {
    render(<Label htmlFor="test">Test label</Label>)

    const label = screen.getByText('Test label')
    expect(label).toBeDefined()
    expect(label.getAttribute('for')).toBe('test')
  })
})
