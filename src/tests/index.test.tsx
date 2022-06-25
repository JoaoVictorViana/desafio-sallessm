import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

describe('Home', () => {
  it('Testando Jest', () => {
    render(<Home />)

    const textPage = screen.getByText('Test font Awesome')

    expect(textPage).toBeInTheDocument()
  })
})
