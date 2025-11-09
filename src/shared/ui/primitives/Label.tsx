import type { LabelHTMLAttributes } from 'react'
import { classMerger } from '@shared/utils/classMerger'

/**
 * A simple label component that applies default styling.
 * @param props - Label HTML attributes.
 * @returns A styled label element.
 */
export const Label = ({
  htmlFor,
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    htmlFor={htmlFor}
    className={classMerger('font-medium block', className)}
    {...props}
  />
)
