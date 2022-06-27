import { Table } from 'react-bootstrap'
import styled from 'styled-components'

export const TableDefault = styled(Table)`
  overflow-x: auto;

  & tbody {
    border-top: 1px solid #c8c8c8 !important;
  }
`

export const TableContainer = styled.div`
  overflow-x: auto;
`
