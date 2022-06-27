import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LayoutContainer, PageContent } from '@components/core/Layout/style'
import { Dashboard } from '.'

export default {
  title: 'Organisms/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>

const Template: ComponentStory<typeof Dashboard> = () => {
  return (
    <LayoutContainer>
      <div />
      <PageContent>
        <Dashboard />
      </PageContent>
    </LayoutContainer>
  )
}

export const Example = Template.bind({})
