import { breakPoints } from '@config/style'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakPoints.mobile}px) {
    position: absolute;
    width: 15rem;
    height: 100%;
    background: #ffffff 0% 0% no-repeat padding-box;
  }
`

export const Section = styled.div`
  margin-bottom: 3.125rem;
  padding: 0;
`

export const SidebarCore = styled.div`
  padding: 2rem 5rem 2rem 1.5rem;
`

export const SidebarFooter = styled.div`
  border-top: 1px solid #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.25rem;
  width: auto;
`
