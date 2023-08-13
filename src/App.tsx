import { useState } from 'react'

import { SignUp } from '@/components/auth/sign-up/sign-up.tsx'
import { Typography, Header, Checkbox, Slider } from '@/components/ui'

export function App() {
  const [val1, setVal1] = useState([0, 100])

  return (
    <div>
      <Header />
      <Typography variant="Link_1" text="link" as="a" href="#" />
      <Checkbox variantTypography={'h2'} label={'sad'} />
      <Checkbox>Sadasdwe</Checkbox>
      <Slider disabled={false} min={0} max={120} step={5} value={val1} onValueChange={setVal1} />
      <Slider defaultValue={[-5, 200]} min={-20} max={220} />
      <Slider />
      <SignUp
        onSubmit={() => {
          console.log('hi')
        }}
      />
    </div>
  )
}
