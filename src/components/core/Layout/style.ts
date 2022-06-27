import { breakPoints } from '@config/style'
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 15rem 1fr;

  @media (max-width: ${breakPoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`

export const PageContent = styled.div`
  background: #eeeeee 0% 0% no-repeat padding-box;
  padding: 1.93rem;
`
