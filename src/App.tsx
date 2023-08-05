import { Typography, Header } from '@/components/ui'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'

export function App() {
  return (
    <div>
      <Header />
      <Typography variant="Link_1" text="link" as="a" href="#" />
      <Checkbox variantTypography={'h2'} label={'sad'} />
      <Checkbox>Sadasdwe</Checkbox>
      <Slider />
    </div>
  )
}
