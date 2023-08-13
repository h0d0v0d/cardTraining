import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import { Close } from '@/assets/icons/components'
import { Typography } from '@/components/ui'
import { Variant } from '@/components/ui/typography'

export type ModalProps = {
  defaultOpen?: boolean
  isOpen: boolean
  onClose?: () => void
  onAction: () => void
  modal?: boolean
  titleModal: string
  variantTypographyModal?: Variant
  children?: ReactNode
}
export const Modal: FC<ModalProps> = ({
  defaultOpen = false,
  isOpen,
  onClose,
  onAction,
  modal = true,
  titleModal = 'Title',
  variantTypographyModal = 'Body_2',
  children,
}) => {
  const handleOnModalChange = () => {
    onClose?.()
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={handleOnModalChange}
      modal={modal}
      defaultOpen={defaultOpen}
    >
      <Dialog.Trigger asChild></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          <header className={s.header}>
            <Dialog.Title className={s.title}>
              <Typography variant={variantTypographyModal}>{titleModal}</Typography>
            </Dialog.Title>
            <Dialog.Close asChild className={s.buttonClose}>
              <Close color={'#fff'} onClick={onAction} />
            </Dialog.Close>
          </header>
          <Dialog.Description className={s.description}>{children}</Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
