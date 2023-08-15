import { FC } from 'react'

import { CheckEmailSVG } from '@/assets/icons/components/CheckEmailSVG.tsx'
import { Button, Card, Typography } from '@/components/ui'

type CheckEmailProps = {
  email?: string
}
export const CheckEmail: FC<CheckEmailProps> = () => {
  return (
    <Card title={'Check Email'}>
      <CheckEmailSVG size={100} />
      <Typography variant="Body_2" color="var(--color-light-900)">
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button variant={'primary'} fullWidth={true} as={'a'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
