import { CURRENT_YEAR } from '@shared/utils/constants'
import { Button } from '@shared/ui/primitives/Button'
import { Image } from '@shared/ui/primitives/Image'
import { Link } from '@shared/ui/primitives/Link'
import { Text } from '@shared/ui/primitives/Text'
import { Title } from '@shared/ui/primitives/Title'
import logo from '@assets/BankSite_Logo.png'
import error from '@assets/error-banner.webp'
import { reload } from '@shared/helpers/window'

/**
 * ErrorPage component to display a user-friendly error message.
 * It includes options to refresh the page or navigate back to the home page.
 * @returns The ErrorPage component JSX.
 */
export const ErrorPage = () => (
  <main className="w-full min-h-[100dvh] flex items-center justify-center px-5">
    <article className="w-full bg-bg-contrast shadow-lg shadow-muted/25 rounded-lg max-w-2xl flex flex-col items-center gap-5 py-4 px-4 md:px-6">
      <Image src={logo} alt="BankSite Logo" width={130} height={130} />
      <div className="w-full flex flex-col items-center gap-2 text-center">
        <Title as="h2" className="text-primary-accent text-2xl md:text-4xl">
          Oops! Something went wrong.
        </Title>
        <Text className="text-primary-accent">
          We hit a snag with this page.
        </Text>
      </div>
      <Image
        src={error}
        alt="An error occurred illustration"
        className="w-72 md:w-90 aspect-video"
      />
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
      <Text className="text-primary-accent text-xs">
        &copy; {CURRENT_YEAR} BankSite. All rights reserved.
      </Text>
    </article>
  </main>
)
