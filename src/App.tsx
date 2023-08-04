import { Typography, Header } from '@/components/ui'
import { Checkbox } from '@/components/ui/checkbox'

export function App() {
  return (
    <div>
      <Header />
      <Typography variant="Link_1" text="link" as="a" href="#" />
      <Checkbox variantTypography={'Body_2'} label={'sad'}>
        sadasdwe
      </Checkbox>
    </div>
  )
}
