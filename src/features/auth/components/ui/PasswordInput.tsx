import { type ComponentProps, useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react'
import { Button } from '@shared/ui/primitives/Button'
import { Input } from '@shared/ui/primitives/Input'

/**
 * Password input component with visibility toggle.
 * @param props - Input component props.
 * @returns The PasswordInput component.
 */
export const PasswordInput = ({ ...props }: ComponentProps<typeof Input>) => {
  const [isVisible, setIsVisible] = useState(false)
  const Icon = isVisible ? Eye : EyeClosed
  const type = isVisible ? 'text' : 'password'

  /**
   * Toggle password visibility
   * @returns void
   */
  const toggleVisibility = () => setIsVisible((prev) => !prev)

  return (
    <div className="border border-muted/70 bg-primary-contrast rounded-md px-0.5 w-full grid grid-cols-5">
      <Input
        type={type}
        variant="primary"
        className="col-span-4 border-transparent"
        {...props}
      />
      <Button
        className="bg-transparent p-0 text-muted"
        onClick={toggleVisibility}
      >
        <Icon className="size-5 ml-2" />
      </Button>
    </div>
  )
}
