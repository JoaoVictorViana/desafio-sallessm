import React from 'react'
import { MenuItem } from 'types/app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPercentage, faTag } from '@fortawesome/free-solid-svg-icons'

export const menuItems: MenuItem[] = [
  {
    icon: <FontAwesomeIcon icon={faTag} />,
    label: 'Catálogo',
    route: '/catalogo',
    subMenus: [
      { label: 'Produtos', route: '/catalogo/produtos' },
      { label: 'Categoria', route: '/catalogo/categorias' },
      { label: 'Atributos', route: '/catalogo/atributos' },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faPercentage} />,
    label: 'Comissões',
    route: '/comissao',
  },
]
