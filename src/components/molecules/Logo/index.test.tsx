import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Logo } from '.'

describe('Logo', () => {
  it('Testando a molecula Logo', () => {
    render(<Logo size="fill" />)

    const LogoElement = screen.getByRole('img')

    expect(LogoElement).toHaveAttribute('title', 'Logo image')
  })
})
