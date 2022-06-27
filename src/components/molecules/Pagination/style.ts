import { Dropdown, Pagination } from 'react-bootstrap'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`

export const PaginationCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`

export const Toggle = styled(Dropdown.Toggle)`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 4px;
  color: #707070;
  font-size: 0.75rem;

  &:focus {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 4px;
    color: #707070;
    box-shadow: none;
  }

  &:focus-visible {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 4px;
    color: #707070;
    box-shadow: none;
  }
`
export const PaginationCountLabel = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0px;
  margin-left: 0.75rem;
`

export const PaginationItem = styled(Pagination.Item)`
  & .page-link {
    color: #707070 !important;
    border: 1px solid #c8c8c8;
  }
`
