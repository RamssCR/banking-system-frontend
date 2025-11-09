import { Button } from '@shared/ui/primitives/Button'
import { FormHeader } from '@features/auth/components/form-header/FormHeader'
import { Hero } from '@features/auth/components/hero/Hero'
import { Input } from '@shared/ui/primitives/Input'
import { Label } from '@shared/ui/primitives/Label'
import { PasswordInput } from '@features/auth/components/ui/PasswordInput'

/**
 * Page for user registration.
 * @returns The Register component JSX.
 */
export const Register = () => {
  return (
    <main className="w-full min-h-[100dvh] flex flex-col lg:grid lg:grid-cols-5">
      <Hero className="lg:justify-between lg:col-span-3" />
      <section className="w-full h-full bg-bg-contrast flex flex-col items-center lg:justify-between px-5 py-6 lg:col-span-2">
        <section className="w-full flex flex-col items-start gap-4">
          <FormHeader
            title="Create an Account"
            description="And experience how it is to see your finances disappear just like in a real bank."
          />
          <form
            className="w-full space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <section className="w-full space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                variant="primary"
                placeholder="e.g. Michael.0_gc"
              />
            </section>
            <section className="w-full space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                variant="primary"
                placeholder="e.g. michael@example.com"
              />
            </section>
            <section className="w-full space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                id="password"
                name="password"
                placeholder="e.g. 000-AaBbCc"
              />
            </section>
            <section className="w-full space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <PasswordInput
                id="confirmPassword"
                name="confirmPassword"
                placeholder="e.g. Same as above, dude, seriously"
              />
            </section>
            <Button
              type="submit"
              variant="primary"
              className="w-full font-medium mt-2"
            >
              Create Account
            </Button>
          </form>
        </section>
      </section>
    </main>
  )
}
