import { actions } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { SignUp, SignUpProps } from './sign-up-form.tsx'

const meta = {
  title: 'Auth/SignUpForm',
  component: SignUp,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  render: (args: SignUpProps) => {
    return <SignUp onSubmit={args.onSubmit} />
  },
  args: {
    onSubmit: actions('check'),
  },
}
