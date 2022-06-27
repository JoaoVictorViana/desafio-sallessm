import { Logo } from '@components/molecules/Logo'
import { Menu } from '@components/molecules/Menu'
import { Profile } from '@components/molecules/Profile'
import { menuItems } from '@config/menu'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {
  Container,
  IconContainer,
  Section,
  SidebarContainer,
  SidebarCore,
  SidebarFooter,
} from './style'

type Sidebar = {
  logoSize?: 'fill' | 'responsive'
}

export const Sidebar: React.FC<Sidebar> = ({ logoSize }) => {
  const [open, setOpen] = useState(true)

  return (
    <Container>
      <IconContainer onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} />
      </IconContainer>
      <SidebarContainer style={{ display: open ? 'flex' : 'none' }}>
        <SidebarCore>
          <Section>
            <Logo size={logoSize} />
          </Section>
          <Menu items={menuItems} />
        </SidebarCore>
        <SidebarFooter>
          <Profile />
        </SidebarFooter>
      </SidebarContainer>
    </Container>
  )
}

Sidebar.defaultProps = {
  logoSize: 'responsive',
}
