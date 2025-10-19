import { type VariantProps, tv } from 'tailwind-variants'

export const variants = tv({
  base: 'border shadow flex items-center justify-center rounded-md text-center max-w-7 max-h-7 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors',
  variants: {
    variant: {
      default:
        'border-contrast data-[state=checked]:bg-contrast data-[state=checked]:text-bg focus-visible:ring-contrast',
      primary:
        'border-primary-bg-contrast data-[state=checked]:bg-primary-bg-contrast data-[state=checked]:text-bg focus-visible:ring-primary-bg-contrast',
    },
    size: {
      default: 'size-6 text-sm',
      sm: 'size-5 text-xs',
      lg: 'size-7 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export type CheckboxVariants = VariantProps<typeof variants>
