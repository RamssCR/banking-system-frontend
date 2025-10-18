import { Toaster as Sonner, type ToasterProps } from 'sonner'
import type { CSSProperties } from 'react'

const style = {
  '--normal-bg': 'var(--color-bg)',
  '--normal-text': 'var(--color-contrast)',
  '--normal-border': 'var(--color-muted)',
} as CSSProperties

/**
 * Toaster component for displaying toast notifications.
 * Uses the Sonner library for toast management.
 * @param props - Props for the Toaster component.
 * @returns A Toaster component with custom styles and position.
 */
export const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner
    className="toaster group"
    style={style}
    position="bottom-right"
    toastOptions={{
      classNames: {
        description: 'text-fg',
        icon: 'text-primary-bg-contrast',
      },
    }}
    {...props}
  />
)
