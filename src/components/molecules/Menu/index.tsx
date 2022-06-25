import React from 'react'
import { MenuItem as MenuItemProps } from 'types/app'
import { MenuItem } from '@components/atoms/MenuItem'
import { MenuContainer } from './style'

type MenuProps = {
  items: MenuItemProps[]
}

export const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <MenuContainer>
      {items.map((item) => (
        <MenuItem key={item.label} {...item} />
      ))}
    </MenuContainer>
  )
}
