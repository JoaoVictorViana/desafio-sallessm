import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuItem as MenuItemProps } from 'types/app'
import { LinkContainer, LinkSection, MainLink, SubMenuContainer } from './style'

const MenuItemWithoutSubMenus: React.FC<MenuItemProps> = ({
  label,
  icon,
  route,
}) => {
  const router = useRouter()

  return (
    <LinkContainer>
      <Link href={route}>
        <LinkSection active={router?.pathname === route}>
          {icon}
          <MainLink>{label}</MainLink>
        </LinkSection>
      </Link>
    </LinkContainer>
  )
}

const MenuItemWithSubMenus: React.FC<MenuItemProps> = ({
  label,
  icon,
  route,
  subMenus,
}) => {
  const router = useRouter()

  return (
    <LinkContainer>
      <Link href={route}>
        <LinkSection active={router?.pathname.startsWith(route)}>
          {icon}
          {label}
        </LinkSection>
      </Link>
      <SubMenuContainer>
        {subMenus?.map((subMenu) => (
          <Link href={subMenu.route}>
            <LinkSection active={router?.pathname === subMenu.route}>
              {subMenu.label}
            </LinkSection>
          </Link>
        ))}
      </SubMenuContainer>
    </LinkContainer>
  )
}

export const MenuItem: React.FC<MenuItemProps> = ({ ...props }) => {
  if (!props.subMenus) {
    return <MenuItemWithoutSubMenus {...props} />
  }

  return <MenuItemWithSubMenus {...props} />
}
