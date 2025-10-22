import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  base: 'inline-flex items-center justify-center rounded-lg border border-transparent text-sm font-medium hover:cursor-pointer transition-colors',
  variants: {
    variant: {
      primary: 'bg-primary-bg text-light hover:brightness-110',
      outline:
        'border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-light',
    },
    size: {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonVariants = VariantProps<typeof variants>
