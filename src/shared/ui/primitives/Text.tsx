import type { HTMLAttributes } from 'react'
import { classMerger } from '@shared/utils/classMerger'

/**
 * Renders a text element with customizable styles.
 * This component uses the variants defined in @variants/text to apply styles based on variant, size, and weight.
 * It merges these styles with any additional class names provided via the `className` prop.
 */
export const Text = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={classMerger(className)} {...props} />
}
