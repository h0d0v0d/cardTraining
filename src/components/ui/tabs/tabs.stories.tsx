import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, Tabs, TabsProps, TabType } from './'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabs: TabType[] = [
  { title: 'My Cards', value: 'my-cards' },
  { title: 'All Cards', value: 'all-cards' },
]

export const Primary: Story = {
  render: (args: TabsProps) => {
    return (
      <Tabs tabs={args.tabs} title={args.title}>
        <TabContent value={'my-cards'}>My cards</TabContent>
        <TabContent value={'all-cards'}>All cards</TabContent>
      </Tabs>
    )
  },
  args: {
    tabs: tabs,
    title: 'Show packs cards',
  },
}

const tabs2: TabType[] = [
  { title: 'Switcher1', value: 'S1', disabled: true },
  { title: 'Switcher2', value: 'S2' },
  { title: 'Switcher3', value: 'S3' },
  { title: 'Switcher4', value: 'S4' },
]

export const Disabled: Story = {
  render: (args: TabsProps) => {
    return (
      <Tabs tabs={args.tabs} title={args.title}>
        <TabContent value={'S1'}>Switcher1</TabContent>
        <TabContent value={'S2'}>Switcher2</TabContent>
        <TabContent value={'S3'}>Switcher3</TabContent>
        <TabContent value={'S4'}>Switcher4</TabContent>
      </Tabs>
    )
  },
  args: {
    tabs: tabs2,
    title: 'Title',
  },
}
