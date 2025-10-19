import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Toaster } from '@shared/ui/primitives/Toaster'
import { toast } from 'sonner'

describe('Toaster', () => {
  test('renders the component and calls a notification toast', async () => {
    render(<Toaster />)

    toast.success('Test success message')
    await waitFor(() => {
      expect(screen.getByText('Test success message')).toBeDefined()
    })
  })
})
