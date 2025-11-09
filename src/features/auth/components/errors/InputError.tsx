import { CircleAlert } from 'lucide-react'
import { Text } from '@shared/ui/primitives/Text'
import { Title } from '@shared/ui/primitives/Title'
import { classMerger } from '@shared/utils/classMerger'

type InputErrorProps = {
  messages: string[]
  className?: string
}

/**
 * InputError component to display an error message for form inputs.
 * @param props - The props for the component.
 * @returns The rendered InputError component.
 */
export const InputError = ({ messages, className }: InputErrorProps) => (
  <article
    className={classMerger(
      'rounded-md w-full flex items-center gap-4 py-2 px-4 bg-error/5 border border-error/80',
      className,
    )}
  >
    <CircleAlert className="text-error min-h-7 min-w-7 size-7" />
    <div className="w-full flex flex-col items-start gap-1">
      <Title as="h4" className="text-xl text-error font-bold">
        Careful, dude!
      </Title>
      <div className="w-full flex flex-col items-start gap-0.5">
        {messages.map((message) => (
          <Text
            key={crypto.randomUUID()}
            className="text-xs font-medium text-error"
          >
            - {message}
          </Text>
        ))}
      </div>
    </div>
  </article>
)
