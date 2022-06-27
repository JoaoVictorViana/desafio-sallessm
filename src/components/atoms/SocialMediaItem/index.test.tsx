import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SocialMediaItem as SocialMediaItemProps } from 'types/app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { SocialMediaItem } from '.'

describe('Sidebar', () => {
  it('Testando icone do Atom SocialMediaItem', () => {
    const itemProps: SocialMediaItemProps = {
      icon: <FontAwesomeIcon icon={faLinkedin} data-testid="icon" />,
      link: 'https://www.linkedin.com/in/jo%C3%A3o-victor-duarte-viana-158364131/',
    }

    render(<SocialMediaItem {...itemProps} />)

    const Item = screen.getByTestId('icon')

    expect(Item).toBeInTheDocument()
    expect(Item).toHaveAttribute('data-icon', 'linkedin')
  })
})
