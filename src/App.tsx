import { TextField } from './components/ui/text-field'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div>
      <div>f</div>
      <Button variant={'primary'} as={'a'} href={'/link'}>
        Hello
      </Button>
      <TextField />
    </div>
  )
}
