import { SocialMedia } from '@components/molecules/SocialMedia'
import { socialMediaItems } from '@config/socialMedia'
import React from 'react'
import {
  Container,
  DashboardContent,
  DashboardText,
  DashboardTitle,
} from './style'

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <DashboardTitle data-testid="dashboard-introduction">
        Introdução
      </DashboardTitle>
      <DashboardContent>
        <DashboardText>
          Sou João Victor. Tenho experiência em <strong>Front-End</strong> e{' '}
          <strong>Back-End</strong> no desenvolvimento web com{' '}
          <strong>NextJs</strong>, <strong>Laravel</strong>,{' '}
          <strong>Zend Framework</strong> e <strong>WordPress</strong>. Também
          tenho conhecimento em <strong>DevOps</strong>, como{' '}
          <strong>Docker</strong> e <strong>CI/CD</strong>. Meu objetivo
          atualmente é me especializar em <strong>ReactJs</strong>.
        </DashboardText>
        <DashboardText>
          Para mais informações siga minhas redes sociais:
        </DashboardText>
        <SocialMedia items={socialMediaItems} />
      </DashboardContent>
    </Container>
  )
}
