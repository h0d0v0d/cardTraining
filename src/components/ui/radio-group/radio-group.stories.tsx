import { action } from '@storybook/addon-actions'
import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'

import {
  RadioGroup,
  RadioGroupProps,
  RadioItemType,
} from '@/components/ui/radio-group/radio-group.tsx'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const items: RadioItemType[] = [
  { label: 'RadioGroup1', value: 'rg1', disabled: true },
  { label: 'RadioGroup2', value: 'rg2' },
  { label: 'RadioGroup3', value: 'rg3' },
  { label: 'RadioGroup4', value: 'rg4' },
  { label: 'RadioGroup5', value: 'rg5' },
]

export const Primary: Story = {
  render: (args: RadioGroupProps) => {
    return (
      <RadioGroup items={args.items} defaultValue={args.defaultValue} onChange={args.onChange} />
    )
  },
  args: {
    items,
    defaultValue: 'rg2',
    onChange: action('value changed'),
  },
}
