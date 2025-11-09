import { Image } from '@shared/ui/primitives/Image'
import { Text } from '@shared/ui/primitives/Text'
import { Title } from '@shared/ui/primitives/Title'
import logo from '@assets/BankSite_Logo.png'
import { CURRENT_YEAR } from '@shared/utils/constants'
import type { HTMLAttributes } from 'react'
import { classMerger } from '@shared/utils/classMerger'

/**
 * Hero component for the authentication pages.
 * @returns The Hero component JSX.
 */
export const Hero = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <section
    className={classMerger(
      'w-full py-6 px-5 lg:h-full bg-linear-to-b from-primary-muted to-primary-bg-contrast',
      'flex flex-col gap-2 items-center justify-center',
      className,
    )}
    {...props}
  >
    <div />
    <section className="flex flex-col items-center gap-2">
      <Image
        src={logo}
        alt="BankSite Logo"
        className="w-48 lg:w-80 object-contain filter brightness-0 invert mb-4 aspect-video"
      />
      <Title
        as="h3"
        className="text-lg lg:text-2xl xl:text-3xl font-bold uppercase text-light"
      >
        Welcome to BankSite
      </Title>
      <Text className="text-light font-medium text-center xl:text-lg">
        Your trusted entity to scam scammers since... Well, we tried.
      </Text>
    </section>
    <Text className="text-light text-xs hidden lg:block">
      &copy; {CURRENT_YEAR} BankSite. All rights reserved... not that we care
      but we need a fancy footer.
    </Text>
  </section>
)
