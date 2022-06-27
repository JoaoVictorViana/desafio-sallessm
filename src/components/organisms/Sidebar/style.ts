import { breakPoints } from '@config/style'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 100%;

  @media (max-width: ${breakPoints.mobile}px) {
    position: absolute;
    z-index: 10;
  }
`

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;

  @media (max-width: ${breakPoints.mobile}px) {
    width: 15rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    z-index: 10;
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

export const IconContainer = styled.div`
  position: absolute;
  right: -3vh;
  top: 1vh;
  float: right;
  display: none;

  @media (max-width: ${breakPoints.mobile}px) {
    display: block;
  }
`
