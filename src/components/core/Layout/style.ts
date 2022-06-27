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

export const Page = styled.div`
  background: #eeeeee 0% 0% no-repeat padding-box;
  padding: 1.93rem;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`
