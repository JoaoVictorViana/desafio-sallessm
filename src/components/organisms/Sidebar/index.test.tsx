import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Sidebar } from '.'

describe('Sidebar', () => {
  it('Testando o Component Sidebar', () => {
    render(<Sidebar logoSize="fill" />)

    const Logo = screen.getByRole('img')

    expect(Logo).toBeInTheDocument()
  })

  it('Informações de profile da Sidebar', () => {
    render(<Sidebar logoSize="fill" />)

    const Logo = screen.getByText('Administrador')

    expect(Logo).toBeInTheDocument()
  })
})
