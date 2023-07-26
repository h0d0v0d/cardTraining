import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Pagination } from './'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
//type Story = StoryObj<typeof meta>

export const Default = () => {
  const [page, setPage] = useState(1)
  // const [perPage, setPerPage] = useState(8)
  const TOTAL_PAGES_COUNT = 10

  return (
    <Pagination
      onChange={setPage}
      count={TOTAL_PAGES_COUNT}
      page={page}
      // perPage={perPage}
      // perPageOptions={[5, 8, 12, 100]}
      // onPerPageChange={setPerPage}
    />
  )
}
