import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { SocialMediaItem } from '.'

export default {
  title: 'Atoms/SocialMediaItem',
  component: SocialMediaItem,
  argTypes: {
    link: {
      defaultValue:
        'https://www.linkedin.com/in/jo%C3%A3o-victor-duarte-viana-158364131/',
      control: { type: 'text' },
    },
    icon: {
      defaultValue: <FontAwesomeIcon icon={faLinkedin} />,
      options: [<FontAwesomeIcon icon={faLinkedin} />],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof SocialMediaItem>

const Template: ComponentStory<typeof SocialMediaItem> = (args) => (
  <SocialMediaItem {...args} />
)

export const Example = Template.bind({})
