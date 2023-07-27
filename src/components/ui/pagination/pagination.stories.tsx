import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Pagination, PaginationProps } from './'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: PaginationProps) => {
    const [page, setPage] = useState(args.page)
    const [selectValue, setSelectValue] = useState(args.selectCurrent)

    return (
      <Pagination
        onChange={setPage}
        count={args.count}
        page={page}
        onSelectChange={setSelectValue}
        selectOptions={args.selectOptions}
        selectCurrent={selectValue}
      />
    )
  },
  args: {
    page: 1,
    count: 10,
    selectOptions: ['10', '20', '30', '50', '100'],
    selectCurrent: '100',
  },
}
