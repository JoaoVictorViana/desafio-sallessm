import styled from 'styled-components'

type CellProps = {
  isBold?: boolean
}

export const Cell = styled.th<CellProps>`
  font-size: 0.81rem;
  color: #737373;
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
`
