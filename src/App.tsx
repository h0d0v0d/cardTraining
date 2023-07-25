import { TextField } from './components/ui/text-field'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div>
      <div>f</div>
      <Button variant={'primary'} >
        Hello
      </Button>
      <Button variant={'link'} >
        Hello
      </Button>
      <Button variant={'tertiary'} >
        Hello
      </Button>
      <Button variant={'secondary'} >
        Hello
      </Button>
      <TextField />
    </div>
  )
}
