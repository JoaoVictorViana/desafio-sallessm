import { Sidebar } from '@components/organisms/Sidebar'
import React, { PropsWithChildren } from 'react'
import { LayoutContainer, Page } from './style'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Page>{children}</Page>
    </LayoutContainer>
  )
}
