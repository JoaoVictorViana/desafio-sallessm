import React from 'react'
import { SocialMediaItem } from '@components/atoms/SocialMediaItem'
import { SocialMediaItem as SocialMediaItemProps } from 'types/app'
import { Container } from './style'

type SocialMediaProps = {
  items: SocialMediaItemProps[]
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <SocialMediaItem {...item} />
      ))}
    </Container>
  )
}
