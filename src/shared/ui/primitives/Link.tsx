import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { type LinkVariants, variants } from '@shared/ui/variants/link'
import { classMerger } from '@shared/utils/classMerger'

type LinkProps = RouterLinkProps & LinkVariants

/**
 * A styled link component using react-router-dom's Link.
 * @param props - Props for the Link component including variant and className.
 * @returns A styled Link component.
 */
export const Link = ({ className, variant, ...props }: LinkProps) => (
  <RouterLink
    className={classMerger(variants({ variant }), className)}
    {...props}
  />
)
