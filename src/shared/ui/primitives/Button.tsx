import { variants, type ButtonVariants } from '@shared/ui/variants/button'
import type { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { classMerger } from '@shared/utils/classMerger'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & { asChild?: boolean }

/**
 * Base component for all buttons.
 * Displays a button with different variants and sizes.
 * @param props - Button properties including variant, size, and HTML attributes.
 * @returns A styled button component.
 */
export const Button = ({
  variant,
  size,
  className,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={classMerger(variants({ variant, size }), className)}
      {...props}
    />
  )
}
