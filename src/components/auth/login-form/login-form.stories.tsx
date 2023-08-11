import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './login-form'

const meta = {
  title: 'Components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
