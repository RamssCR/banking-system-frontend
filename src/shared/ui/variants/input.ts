import { type VariantProps, tv } from 'tailwind-variants'

export const variants = tv({
  base: 'flex w-full rounded-md border border-muted/70 bg-transparent px-3 py-1 placeholder:text-muted file:border-0 file:font-medium file:rounded-lg file:mr-2 file:px-3 file:py-1 hover:file:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-contrast disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      default: 'text-contrast file:text-bg file:bg-contrast',
      primary:
        'text-primary-bg-contrast file:text-bg file:bg-primary-bg-contrast',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type InputVariants = VariantProps<typeof variants>
