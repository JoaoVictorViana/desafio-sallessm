import { Sidebar } from '@components/organisms/Sidebar'
import React, { PropsWithChildren } from 'react'
import { LayoutContainer, PageContent } from './style'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <PageContent>{children}</PageContent>
    </LayoutContainer>
  )
}
