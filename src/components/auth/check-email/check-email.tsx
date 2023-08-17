import { FC } from 'react'

import s from './check-email.module.scss'

import { CheckEmailSVG } from '@/assets/icons/components/CheckEmailSVG.tsx'
import { Button, Card, Typography } from '@/components/ui'
type CheckEmailProps = {
  email?: string
}
export const CheckEmail: FC<CheckEmailProps> = ({ email = 'example@mail.com' }) => {
  return (
    <Card title={'Check Email'} className={s.card}>
      <CheckEmailSVG size={100} />
      <div className={s.text}>
        <Typography variant="Body_2" color="var(--color-light-900)">
          We’ve sent an Email with instructions to {email}
        </Typography>
      </div>
      <Button variant={'primary'} fullWidth={true} as={'a'} href={'/123'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
