import { Button } from '@shared/ui/primitives/Button'
import { Spinner } from '@shared/ui/primitives/Spinner'
import { Switch } from '@shared/ui/primitives/Switch'
import { toast } from 'sonner'

export const App = () => {
  return (
    <div className="p-5">
      <Switch />
      <Spinner />
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
