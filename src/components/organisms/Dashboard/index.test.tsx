import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Dashboard } from '.'

describe('Dashboard', () => {
  it('Texto da Dashboard', () => {
    render(<Dashboard />)

    const Logo = screen.getByText('Introdução')

    expect(Logo).toBeInTheDocument()
  })

  it('Icones de Midia social', () => {
    render(<Dashboard />)

    const Item = screen.getByTestId('iconLinkedin')

    expect(Item).toBeInTheDocument()
    expect(Item).toHaveAttribute('data-icon', 'linkedin')
  })
})
