import { FeedbackSystem } from '@shared/ui/layouts/FeedbackSystem'
import { Link } from '@shared/ui/primitives/Link'
import { Text } from '@shared/ui/primitives/Text'
import piggy from '@assets/piggy-banner.webp'

/**
 * Renders a 404 Not Found page.
 * It's displayed when a user navigates to a non-existent route.
 * @returns JSX.Element The Not Found page component.
 */
export const NotFound = () => (
  <FeedbackSystem
    title="Oops! This page took a vacation."
    description="And forgot to tell anyone."
    src={piggy}
    alt="Piggy sitting on a beach chair looking confused"
    actions={
      <>
        <Text className="text-primary-accent font-medium">
          We appreciate your patience. Please check back later!
        </Text>
        <Link
          to="/"
          variant="outline"
          className="text-center py-1.5 text-sm md:text-base"
        >
          Go Home (There is for sure a page to go back to)
        </Link>
      </>
    }
  />
)
