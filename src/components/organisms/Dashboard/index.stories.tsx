import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LayoutContainer, Page } from '@components/core/Layout/style'
import { Dashboard } from '.'

export default {
  title: 'Organisms/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>

const Template: ComponentStory<typeof Dashboard> = () => {
  return (
    <LayoutContainer>
      <div />
      <Page>
        <Dashboard />
      </Page>
    </LayoutContainer>
  )
}

export const Example = Template.bind({})
