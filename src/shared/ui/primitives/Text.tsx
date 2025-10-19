import type { HTMLAttributes } from 'react'
import { classMerger } from '@shared/utils/classMerger'

/**
 * Renders a text element with customizable styles.
 * It merges these styles with any additional class
 * names provided via the `className` prop.
 */
export const Text = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={classMerger(className)} {...props} />
)
