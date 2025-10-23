import { type VariantProps, tv } from 'tailwind-variants'

export const variants = tv({
  base: 'hover:cursor-pointer transition-colors font-medium',
  variants: {
    variant: {
      default: 'text-contrast hover:text-primary',
      primary:
        'text-light bg-primary border border-primary rounded-lg py-3 px-5',
      outline:
        'text-primary-accent border border-primary-accent rounded-lg py-3 px-5 hover:bg-primary-accent hover:text-light',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type LinkVariants = VariantProps<typeof variants>
