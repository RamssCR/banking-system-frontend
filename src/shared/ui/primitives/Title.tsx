import type { HTMLAttributes } from 'react'
import { classMerger } from '@shared/utils/classMerger'

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * Title component for displaying headings with customizable styles.
 * It supports different HTML heading tags (h1, h2, etc.) and applies
 * styles based on the provided variants.
 * @param props - Props for the Title component.
 * @returns A styled heading element.
 */
export const Title = ({ as: Tag = 'h1', className, ...props }: TitleProps) => (
  <Tag
    className={classMerger(
      'font-semibold leading-tight tracking-tighter',
      className,
    )}
    {...props}
  />
)
