import type { KeyboardEvent } from 'react'

/**
 * Function that handles form controls keyboard events.
 * It listens for 'Escape' and 'Enter' keys to trigger click events.
 * @returns An object containing the handleFormControls function.
 */
export const eventHandlers = () => {
  /**
   * Handles keyboard events for form controls.
   * @param e - The keyboard event triggered on the form control.
   * @returns void
   */
  const handleFormControls = (e: KeyboardEvent<HTMLElement>): void => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      e.preventDefault()
      e.currentTarget?.click()
    }
  }

  return { handleFormControls }
}
