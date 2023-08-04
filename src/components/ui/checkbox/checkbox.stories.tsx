import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBox: Story = {
  args: {
    label: 'Checkbox',
  },
}
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    checked: true,
  },
}
export const DisabledUnChecked: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    checked: false,
  },
}
