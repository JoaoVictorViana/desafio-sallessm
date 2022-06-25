import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Home from '../pages'

export default {
  title: 'Page/Example',
  component: Home,
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => {
  return <Home {...args} />
}

export const Example = Template.bind({})
