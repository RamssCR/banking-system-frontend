import type { ReactNode } from 'react'
import { CURRENT_YEAR } from '@shared/utils/constants'
import { Image } from '@shared/ui/primitives/Image'
import { Text } from '@shared/ui/primitives/Text'
import { Title } from '@shared/ui/primitives/Title'
import logo from '@assets/BankSite_Logo.png'

type FeedbackSystemProps = {
  title: string
  description: string
  src: string
  alt: string
  actions?: ReactNode
}

/**
 * Generic Feedback System component to display various feedback pages
 * such as Not Found, Error, and Under Maintenance.
 * @param props - The properties for the FeedbackSystem component.
 * @returns The FeedbackSystem component JSX.
 */
export const FeedbackSystem = ({
  title,
  description,
  src,
  alt,
  actions,
}: FeedbackSystemProps) => (
  <main className="w-full min-h-[100dvh] flex items-center justify-center px-5">
    <article className="w-full bg-bg-contrast shadow-lg shadow-muted/25 rounded-lg max-w-2xl flex flex-col items-center gap-5 py-4 px-4 md:px-6">
      <Image src={logo} alt="BankSite Logo" width={130} height={130} />
      <div className="w-full flex flex-col items-center gap-2 text-center">
        <Title as="h2" className="text-primary-accent text-2xl md:text-4xl">
          {title}
        </Title>
        <Text className="text-primary-accent">{description}</Text>
      </div>
      <Image src={src} alt={alt} className="w-72 md:w-90 aspect-video" />
      {actions}
      <Text className="text-primary-accent text-xs">
        &copy; {CURRENT_YEAR} BankSite. All rights reserved.
      </Text>
    </article>
  </main>
)
