import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MenuItem as MenuItemProps } from 'types/app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { Menu } from '.'

describe('Sidebar', () => {
  it('MenuItem com apenas o Menu', () => {
    const itemProps: MenuItemProps[] = [
      {
        icon: <FontAwesomeIcon icon={faTag} />,
        label: 'Menu Teste',
        route: '/',
      },
    ]

    render(<Menu items={itemProps} />)

    const Item = screen.getByText('Menu Teste')

    expect(Item).toBeInTheDocument()
  })

  it('MenuItem com SubMenu', () => {
    const itemProps: MenuItemProps[] = [
      {
        icon: <FontAwesomeIcon icon={faTag} />,
        label: 'Menu Teste',
        route: '/',
        subMenus: [{ label: 'SubMenu Teste', route: '/' }],
      },
    ]

    render(<Menu items={itemProps} />)

    const Item = screen.getByText('SubMenu Teste')

    expect(Item).toBeInTheDocument()
  })
})
