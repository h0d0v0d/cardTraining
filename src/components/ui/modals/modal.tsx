import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import { Close } from '@/assets/icons/components'
import { Button, Typography } from '@/components/ui'
import { Variant } from '@/components/ui/typography'

export type ModalProps = {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
  title?: string
  variantTypography?: Variant
  children?: ReactNode
}
export const Modal: FC<ModalProps> = ({
  defaultOpen = false,
  open = false,
  onOpenChange,
  modal = true,
  title = 'Title',
  variantTypography = 'Body_2',
  children,
}) => {
  return (
    <Dialog.Root
      open={open ? open : undefined}
      onOpenChange={onOpenChange ? onOpenChange : undefined}
      modal={modal}
      defaultOpen={defaultOpen}
    >
      <Dialog.Trigger asChild>
        <Button>modal</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          <header className={s.header}>
            <Dialog.Title className={s.title}>
              <Typography variant={variantTypography}>{title}</Typography>
            </Dialog.Title>
            <Dialog.Close asChild className={s.buttonClose}>
              <Close color={'#fff'} />
            </Dialog.Close>
          </header>
          <Dialog.Description className={s.description}>{children}</Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
