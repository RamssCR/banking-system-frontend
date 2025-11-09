import { Text } from '@shared/ui/primitives/Text'
import { Title } from '@shared/ui/primitives/Title'

type FormHeaderProps = {
  title: string
  description: string
}

/**
 * FormHeader component to display the header of a form.
 * @param props - The props for the component.
 * @returns The rendered FormHeader component.
 */
export const FormHeader = ({ title, description }: FormHeaderProps) => (
  <header className="w-full flex flex-col items-center gap-2 mb-6">
    <Title as="h2" className="font-bold text-contrast text-3xl">
      {title}
    </Title>
    <Text className="text-sm text-center lg:text-[0.9em]">{description}</Text>
  </header>
)
