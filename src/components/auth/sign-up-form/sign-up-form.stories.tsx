import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './sign-up-form.tsx'

const meta = {
  title: 'Components/SignUpForm',
  component: SignUp,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  args: {},
}
