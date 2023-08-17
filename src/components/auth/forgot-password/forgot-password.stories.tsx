import { actions } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import {
  ForgotPassword,
  ForgotPasswordProps,
} from '@/components/auth/forgot-password/forgot-password.tsx'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  render: (args: ForgotPasswordProps) => {
    return <ForgotPassword onCreate={args.onCreate} />
  },
  args: {
    onCreate: actions('send'),
  },
}
