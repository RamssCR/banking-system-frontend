import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tips } from '@shared/components/Tips'
import tips from '@shared/data/loadingTips.json'
import { useFader } from '@shared/hooks/useFader'

vi.mock('@shared/hooks/useFader')

describe('Tips Component', () => {
  test('renders the component correctly', () => {
    ;(useFader as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      fade: true,
      index: 0,
    })

    render(<Tips />)
    expect(screen.getByText(tips[0].tip)).toBeDefined()
  })

  test('renders the second tip correctly', () => {
    ;(useFader as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      fade: false,
      index: 1,
    })

    render(<Tips />)
    expect(screen.getByText(tips[1].tip)).toBeDefined()
  })
})
