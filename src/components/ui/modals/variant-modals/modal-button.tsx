import { FC, ReactNode } from 'react'

import s from './modal-button.module.scss'

import { Button } from '@/components/ui'
import { Modal } from '@/components/ui/modals/modal.tsx'

export type ModalButtonProps = {
  double?: boolean
  onChange?: (value: any) => void
  children?: ReactNode
}
export const ModalButton: FC<ModalButtonProps> = ({ onChange, double = false, children }) => {
  return (
    <Modal>
      <div className={s.content}>{children}</div>
      <div className={double ? s.double : s.blockButton}>
        {double && (
          <Button variant={'secondary'} onChange={onChange}>
            secondary
          </Button>
        )}
        <Button variant={'primary'} onChange={onChange}>
          primary
        </Button>
      </div>
    </Modal>
  )
}
