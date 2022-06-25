import { Logo } from '@components/molecules/Logo'
import { Menu } from '@components/molecules/Menu'
import { Profile } from '@components/molecules/Profile'
import { menuItems } from '@config/menu'
import React from 'react'
import { Container, Section, SidebarCore, SidebarFooter } from './style'

type Sidebar = {
  logoSize?: 'fill' | 'responsive'
}

export const Sidebar: React.FC<Sidebar> = ({ logoSize }) => {
  return (
    <Container>
      <SidebarCore>
        <Section>
          <Logo size={logoSize} />
        </Section>
        <Menu items={menuItems} />
      </SidebarCore>
      <SidebarFooter>
        <Profile />
      </SidebarFooter>
    </Container>
  )
}

Sidebar.defaultProps = {
  logoSize: 'responsive',
}
