import React from 'react'
import { Cell } from './style'

type TableCellProps = {
  value: string
  isBold?: boolean
  isHeader?: boolean
}

export const TableCell: React.FC<TableCellProps> = ({
  value,
  isBold,
  isHeader,
}) => {
  return <Cell isBold={isBold && !isHeader}>{value}</Cell>
}

TableCell.defaultProps = {
  isBold: false,
  isHeader: false,
}
