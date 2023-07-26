import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Select, ShowOnPageSelectProps } from './'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  render: (args: ShowOnPageSelectProps) => {
    const [value, setValue] = useState(args.selectCurrent)

    return (
      <Select
        selectCurrent={value}
        onSelectChange={setValue}
        selectOptions={args.selectOptions}
        label={args.label}
        disabled={args.disabled}
      ></Select>
    )
  },
  args: {
    disabled: false,
    selectOptions: ['Select-box-1', 'Select-box-2', 'Select-box-3', 'Select-box-4'],
    label: 'Select',
    selectCurrent: 'Select-box-1',
  },
}
