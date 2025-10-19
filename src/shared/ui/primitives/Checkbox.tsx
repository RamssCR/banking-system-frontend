import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { type CheckboxVariants, variants } from '@shared/ui/variants/checkbox'
import type { Ref, ComponentProps } from 'react'
import { Check } from 'lucide-react'
import { eventHandlers } from '@shared/helpers/eventHandlers'
import { classMerger } from '@shared/utils/classMerger'

type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root> &
  CheckboxVariants & { ref?: Ref<HTMLInputElement> }

/**
 * Checkbox component built on Radix UI CheckboxPrimitive with Tailwind CSS variants.
 * @param props - Props for the Checkbox component including variant, size, and other native checkbox attributes.
 * @returns A styled Checkbox component.
 */
export const Checkbox = ({
  className,
  variant,
  size,
  ref,
  ...props
}: CheckboxProps) => {
  const { handleFormControls } = eventHandlers()

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      onKeyDown={handleFormControls}
      className={classMerger(variants({ variant, size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check className="w-4 h-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
Checkbox.displayName = CheckboxPrimitive.Root.displayName
