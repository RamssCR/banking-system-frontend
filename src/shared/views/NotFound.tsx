import { CURRENT_YEAR } from '@shared/utils/constants'
import { Image } from '@shared/ui/primitives/Image'
import { Link } from '@shared/ui/primitives/Link'
import { Text } from '@shared/ui/primitives/Text'
import { Title } from '@shared/ui/primitives/Title'
import logo from '@assets/BankSite_Logo.png'
import piggy from '@assets/piggy-banner.webp'

/**
 * Renders a 404 Not Found page.
 * It's displayed when a user navigates to a non-existent route.
 * @returns JSX.Element The Not Found page component.
 */
export const NotFound = () => (
  <main className="w-full min-h-[100dvh] flex items-center justify-center px-5">
    <article className="w-full bg-bg-contrast shadow-lg shadow-muted/25 rounded-lg max-w-2xl flex flex-col items-center gap-5 py-4 px-4 md:px-6">
      <Image src={logo} alt="BankSite Logo" width={130} height={130} />
      <div className="w-full flex flex-col items-center gap-2 text-center">
        <Title as="h2" className="text-primary-accent text-2xl md:text-4xl">
          Oops! This page took a vacation.
        </Title>
        <Text className="text-primary-accent">And forgot to tell anyone.</Text>
      </div>
      <Image
        src={piggy}
        alt="Piggy sitting on a beach chair looking confused"
        className="w-72 md:w-90 aspect-video"
      />
      <Link
        to="/"
        variant="outline"
        className="text-center py-1.5 text-sm md:text-base"
      >
        Go Home (There is for sure a page to go back to)
      </Link>
      <Text className="text-primary-accent text-xs">
        &copy; {CURRENT_YEAR} BankSite. All rights reserved.
      </Text>
    </article>
  </main>
)
