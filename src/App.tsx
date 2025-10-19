import { Button } from '@shared/ui/primitives/Button'
import { Input } from '@shared/ui/primitives/Input'
import { Radio, RadioGroup } from '@shared/ui/primitives/Radio'
import { Spinner } from '@shared/ui/primitives/Spinner'
import { Switch } from '@shared/ui/primitives/Switch'
import { toast } from 'sonner'

export const App = () => {
  return (
    <div className="p-5">
      <Switch />
      <Spinner />
      <RadioGroup defaultValue="React">
        <Radio value="React" variant="primary" />
        <Radio value="Vue" variant="primary" />
        <Radio value="Angular" variant="primary" />
        <Radio value="Svelte" variant="primary" />
      </RadioGroup>
      <Input type="file" />
      <Button
        onClick={() => {
          toast.success('Toast triggered!', {
            description: 'This is a sample toast notification.',
          })
        }}
      >
        Trigger Toast
      </Button>
    </div>
  )
}
