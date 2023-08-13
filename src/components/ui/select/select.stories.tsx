import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Select, SelectProps } from './'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>
export const Example1: Story = {
  render: (args: SelectProps) => {
    const [value, setValue] = useState(args.selectCurrent)

    return (
      <Select
        selectCurrent={value}
        onSelectChange={setValue}
        selectOptions={args.selectOptions}
        label={args.label}
        disabled={args.disabled}
      />
    )
  },
  args: {
    disabled: false,
    selectOptions: ['Select-box-1', 'Select-box-2', 'Select-box-3', 'Select-box-4'],
    label: 'Select',
    selectCurrent: 'Select-box-1',
  },
}
export const Example2: Story = {
  render: (args: SelectProps) => {
    const [value, setValue] = useState(args.selectCurrent)

    return (
      <Select
        selectCurrent={value}
        onSelectChange={setValue}
        selectOptions={args.selectOptions}
        label={args.label}
        disabled={args.disabled}
        className={args.className}
      />
    )
  },
  args: {
    disabled: false,
    selectOptions: ['10', '20', '30', '50', '100'],
    selectCurrent: '100',
    className: 'pagination',
  },
}
