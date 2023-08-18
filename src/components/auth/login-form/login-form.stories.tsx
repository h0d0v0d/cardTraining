import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm, LoginFormProps } from './login-form'

const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  render: (args: LoginFormProps) => {
    return <LoginForm onSubmit={args.onSubmit} />
  },
  args: {
    onSubmit: action('login'),
  },
}
