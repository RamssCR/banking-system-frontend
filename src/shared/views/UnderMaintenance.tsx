import { FeedbackSystem } from '@shared/ui/layouts/FeedbackSystem'
import { Text } from '@shared/ui/primitives/Text'
import fixingBank from '@assets/under-maintenance-banner.webp'

/**
 * Renders an Under Maintenance page.
 * It's displayed when a user navigates to a page that is currently being updated or fixed.
 * @returns JSX.Element The Under Maintenance page component.
 */
export const UnderMaintenance = () => (
  <FeedbackSystem
    title="Page under maintenance."
    description="We are working hard to get it back up."
    src={fixingBank}
    alt="Bank under construction banner"
    actions={
      <Text className="text-primary-accent font-medium">
        We appreciate your patience. Please check back later!
      </Text>
    }
  />
)
