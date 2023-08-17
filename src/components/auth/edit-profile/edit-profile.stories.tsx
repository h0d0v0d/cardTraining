import { useState } from 'react'

import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import userPhotoDefault from '@/assets/img/userPhoto.png'
import { EditProfile, EditProfileProps } from '@/components/auth/edit-profile/edit-profile.tsx'

const meta = {
  title: 'Auth/EditProfile',
  component: EditProfile,
  tags: ['autodocs'],
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args: EditProfileProps) => {
    const [name, setName] = useState<string>(args.name)
    const [photo, setPhoto] = useState(args.photo)
    const onNameChange = (name: string) => {
      args.onNameEdit(name)
      setName(name)
    }
    const onPhotoChange = (photo: File) => {
      args.onPhotoEdit(photo)
      setPhoto(URL.createObjectURL(photo))
    }

    return (
      <EditProfile
        name={name}
        email={args.email}
        onLogout={args.onLogout}
        photo={photo}
        onNameEdit={onNameChange}
        onPhotoEdit={onPhotoChange}
      />
    )
  },
  args: {
    name: 'Ivan',
    onNameEdit: action('name'),
    photo: userPhotoDefault,
    onPhotoEdit: action('Photo change'),
    email: 'j&johnson@gmail.com',
    onLogout: action('logout'),
  },
}
