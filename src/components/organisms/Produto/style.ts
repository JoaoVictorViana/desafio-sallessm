import { breakPoints } from '@config/style'
import { Button, Form, InputGroup, Tabs } from 'react-bootstrap'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
`

export const ActionButton = styled(Button)`
  font-size: 0.87rem;
  letter-spacing: 0px;
  padding: 0.68rem 2.43rem;
  font-weight: bold;
`

export const PageTabs = styled(Tabs)`
  padding-left: 0.37rem;
  margin: 0;

  & .nav-link.active {
    border: 0;
    border-bottom: 5px solid #1366e2;
  }
`

export const Search = styled(InputGroup)`
  width: 25.62rem;
  margin: 1.75rem 0 2.18rem 0.37rem;

  @media (max-width: ${breakPoints.mobile}px) {
    width: auto;
  }
`

export const SearchButton = styled(Button)`
  border: 1px solid #ced4da;
  border-right: none;
  color: #d8d8d8;

  &:focus {
    box-shadow: none !important;
  }

  &:focus-visible {
    box-shadow: none;
  }

  &:hover {
    background-color: #ffffff;
    color: black;
    border: 1px solid #ced4da;
    border-right: none;
  }
`

export const SearchInput = styled(Form.Control)`
  border-left: none;

  &:focus {
    border-color: #ced4da;
    box-shadow: none !important;
  }

  &:focus-visible {
    box-shadow: none;
    border-color: #ced4da;
  }

  &::placeholder {
    color: #d8d8d8;
    font-size: 0.81rem;
    letter-spacing: 0px;
  }
`

export const PageFooter = styled.div`
  margin-top: 1.25rem;
`

export const FooterText = styled.p`
  text-align: center;
  font-size: 0.87rem;
  color: #707070;
`
