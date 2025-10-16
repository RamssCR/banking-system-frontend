import { useCallback, useState } from "react"

/**
 * Custom hook to manage a boolean toggle state.
 * This hook provides methods to toggle, turn on, and turn off the state.
 * @param initial - The initial state of the toggle (default is false).
 * @returns An object containing the current state and methods to manipulate it.
 */
export const useToggle = (initial = false) => {
  const [active, setActive] = useState(initial)

  const toggle = useCallback(() => setActive((prev) => !prev), [])
  const on = useCallback(() => setActive(true), [])
  const off = useCallback(() => setActive(false), [])

  return {
    active,
    toggle,
    on,
    off,
  }
}