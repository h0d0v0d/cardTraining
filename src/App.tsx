import { useState } from 'react'

import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'
import { Header } from './components/ui/header'

export function App() {
  const [check, setCheck] = useState(false)
  const handleChecked = () => {
    setCheck(!check)
  }

  return (
    <div>
      <Header isLogin={false} />
      <div>aaa</div>
      <Button>a</Button>
      <Checkbox checked={check} onChange={handleChecked} label={'hi'} />
    </div>
  )
}
