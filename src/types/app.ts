import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type MenuItem = {
  label: string
  route: string
  icon: JSX.Element
  subMenus?: { label: string; route: string }[]
}

export type SocialMediaItem = {
  link: string
  icon: JSX.Element
  dataTestId?: string
}
