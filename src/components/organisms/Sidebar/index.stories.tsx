import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LayoutContainer, Page } from '@components/core/Layout/style'
import { Sidebar } from '.'

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => {
  return (
    <LayoutContainer>
      <Sidebar {...args} />
      <Page />
    </LayoutContainer>
  )
}

export const Example = Template.bind({})
