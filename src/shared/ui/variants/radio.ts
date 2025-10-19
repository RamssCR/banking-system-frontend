import { type VariantProps, tv } from 'tailwind-variants'

export const radio = tv({
  base: 'hover:cursor-pointer rounded-full border shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center',
  variants: {
    variant: {
      default: 'border-contrast text-contrast',
      primary: 'border-primary-bg-contrast text-primary-bg-contrast',
    },
    size: {
      default: 'h-5 w-5',
      sm: 'h-4 w-4',
      lg: 'h-6 w-6',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export const circle = tv({
  base: 'aspect-square rounded-full transition-colors',
  variants: {
    variant: {
      default: 'bg-contrast',
      primary: 'bg-primary-bg-contrast',
    },
    size: {
      default: 'h-3.75 w-3.75',
      sm: 'h-2.75 w-2.75',
      lg: 'h-4.75 w-4.75',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export type Variants = VariantProps<typeof radio>
