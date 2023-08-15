import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from '@/components/auth/create-new-password/create-new-password.tsx'

const meta = {
  title: 'Components/CreateNewPassword',
  component: CreateNewPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  args: {},
}
