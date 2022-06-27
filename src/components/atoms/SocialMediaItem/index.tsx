import React from 'react'
import { SocialMediaLink } from './style'

type SocialMediaItemProps = {
  link: string
  icon: React.ReactElement
  dataTestId?: string
}

export const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  link,
  icon,
  dataTestId,
}) => {
  return (
    <SocialMediaLink
      target="_blank"
      data-testid={`socialMedia-${dataTestId}`}
      rel="noopener noreferrer"
      href={link}
    >
      {icon}
    </SocialMediaLink>
  )
}

SocialMediaItem.defaultProps = {
  dataTestId: '',
}
