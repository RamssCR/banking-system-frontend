import { Button } from '@shared/ui/primitives/Button'
import { FeedbackSystem } from '@shared/ui/layouts/FeedbackSystem'
import { Link } from '@shared/ui/primitives/Link'
import error from '@assets/error-banner.webp'
import { reload } from '@shared/helpers/window'

/**
 * ErrorPage component to display a user-friendly error message.
 * It includes options to refresh the page or navigate back to the home page.
 * @returns The ErrorPage component JSX.
 */
export const ErrorPage = () => (
  <FeedbackSystem
    title="Oops! Something went wrong."
    description="We hit a snag with this page."
    src={error}
    alt="An error occurred illustration"
    actions={
      <section className="w-full flex flex-col items-center gap-2 max-w-[10em]">
        <Button variant="outline" className="py-1.5 w-full" onClick={reload}>
          Refresh Page
        </Button>
        <Link
          to="/"
          variant="outline"
          className="text-center py-1.5 text-sm w-full"
        >
          Go Home
        </Link>
      </section>
    }
  />
)
