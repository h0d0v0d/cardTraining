import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import {
  CreateNewPassword,
  CreateNewPasswordProps,
} from '@/components/auth/create-new-password/create-new-password.tsx'

const meta = {
  title: 'Auth/CreateNewPassword',
  component: CreateNewPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  render: (args: CreateNewPasswordProps) => {
    return <CreateNewPassword createPassword={args.createPassword} />
  },
  args: {
    createPassword: action('asd'),
  },
}
