import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from '@/components/auth/forgot-password/forgot-password.tsx'

const meta = {
  title: 'Components/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  args: {},
}
