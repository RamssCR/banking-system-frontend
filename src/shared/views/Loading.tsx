import { Spinner } from '@shared/ui/primitives/Spinner'
import { Text } from '@shared/ui/primitives/Text'
import { Tips } from '@shared/components/Tips'

/**
 * Render a loading screen with a spinner and loading text.
 * @returns JSX.Element The Loading component.
 */
export const Loading = () => (
  <main className="w-full min-h-[100dvh] flex flex-col items-center justify-center py-6 px-5">
    <section className="flex flex-col md:flex-row items-center gap-4 md:gap-5">
      <Spinner />
      <Text className="text-primary-accent font-medium md:text-lg">
        Loading...
      </Text>
    </section>
    <Tips className="fixed bottom-4 left-1/2 transform -translate-x-1/2" />
  </main>
)
