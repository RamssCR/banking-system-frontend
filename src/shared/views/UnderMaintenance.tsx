import { CURRENT_YEAR } from '@shared/utils/constants'
import { Image } from '@shared/ui/primitives/Image'
import { Text } from '@shared/ui/primitives/Text'
import { Title } from '@shared/ui/primitives/Title'
import fixingBank from '@assets/under-maintenance-banner.webp'
import logo from '@assets/BankSite_Logo.png'

/**
 * Renders an Under Maintenance page.
 * It's displayed when a user navigates to a page that is currently being updated or fixed.
 * @returns JSX.Element The Under Maintenance page component.
 */
export const UnderMaintenance = () => (
  <main className="w-full min-h-[100dvh] flex items-center justify-center px-5">
    <article className="w-full bg-bg-contrast shadow-lg shadow-muted/25 rounded-lg max-w-2xl flex flex-col items-center gap-5 py-4 px-4 md:px-6">
      <Image src={logo} alt="BankSite Logo" width={130} height={130} />
      <div className="w-full flex flex-col items-center gap-2 text-center">
        <Title as="h2" className="text-primary-accent text-2xl md:text-4xl">
          Page under maintenance.
        </Title>
        <Text className="text-primary-accent">
          We are working hard to get it back up.
        </Text>
      </div>
      <Image
        src={fixingBank}
        alt="Bank under construction banner"
        className="w-72 md:w-90 aspect-video"
      />
      <Text className="text-primary-accent font-medium">
        We appreciate your patience. Please check back later!
      </Text>
      <Text className="text-primary-accent text-xs">
        &copy; {CURRENT_YEAR} BankSite. All rights reserved.
      </Text>
    </article>
  </main>
)
