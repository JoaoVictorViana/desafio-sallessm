import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from '.'

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  argTypes: {
    icon: {
      defaultValue: <FontAwesomeIcon icon={faTag} />,
      control: { type: 'radio' },
    },
    route: {
      defaultValue: '/',
      control: { type: 'text' },
    },
    label: {
      defaultValue: 'Teste Menu',
      control: { type: 'text' },
    },
    subMenus: {
      options: [undefined, [{ label: 'Teste SubItem', route: '/' }]],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
)

export const Example = Template.bind({})
