import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LayoutContainer, PageContent } from '@components/core/Layout/style'
import { Sidebar } from '.'

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => {
  return (
    <LayoutContainer>
      <Sidebar {...args} />
      <PageContent />
    </LayoutContainer>
  )
}

export const Example = Template.bind({})
