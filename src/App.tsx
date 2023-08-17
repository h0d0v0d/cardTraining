import { useState } from 'react'

import { EditProfile } from '@/components/auth/edit-profile/edit-profile.tsx'
import { Typography, Header, Button } from '@/components/ui'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modals'
import { Slider } from '@/components/ui/slider'

export function App() {
  const [val1, setVal1] = useState([0, 100])
  const [open, setOpen] = useState(false)
  const onOpen = () => {
    setOpen(false)
  }

  return (
    <div>
      <Header />
      <Typography variant="Link_1" text="link" as="a" href="#" />
      <Checkbox variantTypography={'h2'} label={'sad'} />
      <Checkbox>Sadasdwe</Checkbox>
      <Slider disabled={false} min={0} max={120} step={5} value={val1} onValueChange={setVal1} />
      <Slider defaultValue={[-5, 200]} min={-20} max={220} />
      <Slider />
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        open
      </Button>
      <Modal isOpen={open} onAction={onOpen} titleModal={'asd'}>
        asdasffsd
        <Button onClick={onOpen}>hi</Button>
      </Modal>
      <EditProfile />
    </div>
  )
}
