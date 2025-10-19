import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Image } from '@shared/ui/primitives/Image'

describe('Image', () => {
  test('renders the image component correctly', () => {
    render(<Image src="test.jpg" alt="Test image" />)

    const img = screen.getByRole('img')
    expect(img).toBeDefined()
    expect(img.getAttribute('src')).toBe('test.jpg')
    expect(img.getAttribute('alt')).toBe('Test image')
  })
})
