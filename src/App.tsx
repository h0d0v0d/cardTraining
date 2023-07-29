import { Header } from '@/components/ui/header'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <div>
      <Header />
      <Typography variant="Link_1" text="link" as="a" href="#" />
    </div>
  )
}
