import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from '.'

export default {
  title: 'Molecules/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => (
  <Logo size="responsive" {...args} />
)

export const Example = Template.bind({})
