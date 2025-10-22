import {
  CSS_FADE_IN_OUT_DURATION_MS,
  FADE_IN_OUT_DURATION_MS,
} from '@shared/utils/constants'
import { useEffect, useState } from 'react'

/**
 * A custom hook that cycles through a list of strings,
 * providing fade-in and fade-out effects.
 * @param list - An array of strings to cycle through.
 * @param interval - Duration in milliseconds for each string to be displayed before transitioning.
 * @returns An object containing the current index and fade state.
 */
export const useFader = (
  list: Record<string, unknown>[],
  interval: number = FADE_IN_OUT_DURATION_MS,
) => {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % list.length)
        setFade(true)
      }, CSS_FADE_IN_OUT_DURATION_MS)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, list.length])

  return { index, fade }
}
