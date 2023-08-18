import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from '@/components/auth/check-email/check-email.tsx'

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  args: {
    email: 'example@mail.com',
  },
}
