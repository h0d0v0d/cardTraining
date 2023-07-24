import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'Large',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const H3: Story = {
  args: {
    variant: 'h3',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Body1: Story = {
  args: {
    variant: 'Body_1',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Body2: Story = {
  args: {
    variant: 'Body_2',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Subtitile1: Story = {
  args: {
    variant: 'Subtitle_1',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Subtitile2: Story = {
  args: {
    variant: 'Subtitle_2',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Caption: Story = {
  args: {
    variant: 'Caption',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Overline: Story = {
  args: {
    variant: 'Overline',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Link1: Story = {
  args: {
    variant: 'Link_1',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    href: 'https://tiraspol-news.ru/img/20230525/7a70af7086b2f43b96c3706289d73010.jpg',
  },
}

export const Link2: Story = {
  args: {
    variant: 'Link_2',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    href: 'https://tiraspol-news.ru/img/20230525/480b13ddf36d45793155097c71046171.jpg',
  },
}
