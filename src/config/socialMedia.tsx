import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { SocialMediaItem } from 'types/app'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export const socialMediaItems: SocialMediaItem[] = [
  {
    link: 'https://www.linkedin.com/in/jo%C3%A3o-victor-duarte-viana-158364131/',
    icon: (
      <FontAwesomeIcon
        icon={faLinkedin}
        color="blue"
        data-testid="iconLinkedin"
      />
    ),
    dataTestId: 'linkedin',
  },
  {
    link: 'https://github.com/JoaoVictorViana',
    icon: (
      <FontAwesomeIcon icon={faGithub} color="black" data-testid="iconGithub" />
    ),
    dataTestId: 'github',
  },
]
