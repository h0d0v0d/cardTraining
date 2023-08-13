import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui'
import { Modal, ModalProps } from '@/components/ui/modals/modal.tsx'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args: ModalProps) => {
    const [open, setOpen] = useState(args.isOpen)
    const onCloseHandler = () => {
      setOpen(false)
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal</Button>
        <Modal
          isOpen={open}
          onClose={onCloseHandler}
          titleModal={args.titleModal}
          onAction={args.onAction}
        >
          modal text
          <div>asd</div>
        </Modal>
      </>
    )
  },
  args: {
    isOpen: false,
    titleModal: 'Modal Title',
  },
}
