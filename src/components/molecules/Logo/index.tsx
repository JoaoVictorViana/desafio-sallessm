import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LogoContainer } from './style'

type LogoProps = {
  size?: 'responsive' | 'fill'
}

export const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <LogoContainer>
      <Link href="/">
        <Image
          priority
          src="/logo.png"
          title="Logo image"
          data-teste="Logo"
          height="18"
          width="100"
          layout={size}
        />
      </Link>
    </LogoContainer>
  )
}

Logo.defaultProps = {
  size: 'responsive',
}
