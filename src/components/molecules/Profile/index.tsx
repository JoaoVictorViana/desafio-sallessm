import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, ProfileLabel } from './style'

export const Profile: React.FC = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faUserCog} width="24" />
      <ProfileLabel>Administrador</ProfileLabel>
    </Container>
  )
}
