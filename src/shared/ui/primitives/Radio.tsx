import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { type Variants, circle, radio } from '@shared/ui/variants/radio'
import type { ComponentProps, Ref } from 'react'
import { Circle } from 'lucide-react'
import { classMerger } from '@shared/utils/classMerger'
import { eventHandlers } from '@shared/helpers/eventHandlers'

type RadioGroupProps = ComponentProps<typeof RadioGroupPrimitive.Root> & {
  ref?: Ref<HTMLDivElement>
}

type RadioProps = ComponentProps<typeof RadioGroupPrimitive.Item> &
  Variants & { ref?: Ref<HTMLInputElement> }

/**
 * RadioGroup component built on Radix UI RadioGroupPrimitive.
 * @param props - Props for the RadioGroup component including native div attributes.
 * @returns A styled RadioGroup component.
 */
const RadioGroup = ({ className, ref, ...props }: RadioGroupProps) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={classMerger('grid gap-2', className)}
    {...props}
  />
)
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

/**
 * Radio component built on Radix UI RadioGroupPrimitive with Tailwind CSS variants.
 * @param props - Props for the Radio component including variant, size, and other native radio attributes.
 * @returns A styled Radio component.
 */
const Radio = ({ className, variant, size, ref, ...props }: RadioProps) => {
  const { handleFormControls } = eventHandlers()

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      tabIndex={0}
      onKeyDownCapture={handleFormControls}
      className={classMerger(radio({ variant, size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className={classMerger(circle({ variant, size }))} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}
Radio.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, Radio }
