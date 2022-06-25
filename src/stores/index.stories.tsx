import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components/core/Layout'

import Home from '../pages'

export default {
  title: 'Page/Home',
  component: Home,
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => {
  return (
    <Layout>
      <Home {...args} />
    </Layout>
  )
}

export const Example = Template.bind({})
