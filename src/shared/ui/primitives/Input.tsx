import type { InputHTMLAttributes, Ref } from 'react'
import { type InputVariants, variants } from '@shared/ui/variants/input'
import { classMerger } from '@shared/utils/classMerger'

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputVariants & { ref?: Ref<HTMLInputElement> }

/**
 * Renders an input element with customizable variants and styles.
 * @param props - The properties for the input element, including type, className, variant, and other HTML attributes.
 * @returns A styled input element.
 */
export const Input = ({
  type = 'text',
  className,
  variant,
  ref,
  ...props
}: InputProps) => (
  <input
    ref={ref}
    type={type}
    className={classMerger(variants({ variant }), className)}
    {...props}
  />
)
