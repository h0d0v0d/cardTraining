import { ChangeEvent, FC, useRef, useState } from 'react'

import UserPhoto from '../../../assets/img/userPhoto.png'

import s from './edit-profile.module.scss'

import { Edit, LogOut } from '@/assets/icons/components'
import { EditName } from '@/components/auth/edit-profile/edit-name.tsx'
import { Button, Card, Typography } from '@/components/ui'

export type EditProfileProps = {
  email: string
  name: string
  onNameEdit: (name: string) => void
  photo: string
  onPhotoEdit: (photo: File) => void
  onLogout: () => void
}
export const EditProfile: FC<EditProfileProps> = ({
  email = 'j&johnson@gmail.com',
  name = 'Ivan',
  photo = UserPhoto,
  onNameEdit,
  onPhotoEdit,
  onLogout,
}) => {
  const [edit, setEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const onNameChangeHandler = (name: string) => {
    setEdit(false)
    onNameEdit?.(name)
  }
  const onEditName = () => {
    setEdit(true)
  }
  const handleOnClick = () => {
    inputRef.current?.click()
  }
  const onPhotoChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      onPhotoEdit?.(e.currentTarget.files[0])
    }
  }

  return (
    <Card title={'Personal Information'} className={s.card}>
      <div className={s.photoBlock}>
        <div className={s.photo}>
          <img src={photo} alt="" className={s.img} />
        </div>
        {!edit && (
          <div>
            <input
              type={'file'}
              style={{ display: 'none' }}
              onChange={onPhotoChangeHandler}
              ref={inputRef}
              accept={'image/*'}
            />
            <Edit size={28} onClick={handleOnClick} className={s.editPhotoBtn} />
          </div>
        )}
      </div>
      {!edit ? (
        <div className={s.editBlock}>
          <div className={s.editName}>
            <Typography variant={'h1'}>{name}</Typography>
            <Edit onClick={onEditName} size={24} />
          </div>
          <Typography variant={'Body_1'} color={'var(--color-dark-100, #808080)'}>
            {email}
          </Typography>
          <Button variant={'secondary'} onClick={onLogout} icon={<LogOut size={20} />}>
            Logout
          </Button>
        </div>
      ) : (
        <EditName name={name} saveName={onNameChangeHandler} />
      )}
    </Card>
  )
}
