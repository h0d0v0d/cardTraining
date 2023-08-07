import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox'

const meta = {
  title: 'Components/Checkboxas',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBoxsss: Story = {
  args: {
    label: 'Checkbox',
  },
}
