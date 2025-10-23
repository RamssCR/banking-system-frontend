import type { HTMLAttributes } from 'react'
import { MessageCircle } from 'lucide-react'
import { Text } from '@shared/ui/primitives/Text'
import { classMerger } from '@shared/utils/classMerger'
import tips from '@shared/data/loadingTips.json'
import { useFader } from '@shared/hooks/useFader'

/**
 * Tips component that displays helpful tips with a fading effect.
 * @param props - HTML attributes for the div element.
 * @returns A React component displaying tips.
 */
export const Tips = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { fade, index } = useFader(tips)

  return (
    <article
      className={classMerger(
        'bg-bg-contrast rounded-md py-3 px-5 w-full max-w-xl flex flex-col items-start gap-1 shadow-lg shadow-muted/45',
        className,
      )}
      {...props}
    >
      <section className="flex items-center gap-2">
        <MessageCircle className="size-6 fill-primary-bg text-primary-bg" />
        <Text className="text-primary-accent font-semibold text-lg">
          Helpful Tips
        </Text>
      </section>
      <Text
        className={classMerger(
          'transition-opacity duration-500 text-primary-accent font-medium text-sm',
          fade ? 'opacity-100' : 'opacity-0',
        )}
      >
        {tips[index].tip}
      </Text>
    </article>
  )
}
