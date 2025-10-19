import type { ImgHTMLAttributes } from 'react'
import { classMerger } from '@shared/utils/classMerger'

/**
 * A simple image component that applies default styling.
 * @param props - Image HTML attributes.
 * @returns A styled image element.
 */
export const Image = ({
  className,
  alt,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <img alt={alt} className={classMerger(className)} {...props} />
)
