import { TableCell } from '@components/atoms/TableCell'
import { useTable } from '@contexts/table'
import React from 'react'
import { TableHeader } from 'types/app'
import { TableContainer, TableDefault } from './style'

type TableProps = {
  columns: TableHeader[]
}

export const Table: React.FC<TableProps> = ({ columns }) => {
  const { rows } = useTable()

  return (
    <TableContainer>
      <TableDefault hover>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            {columns.map((column) => (
              <TableCell
                key={column.field}
                value={column.description}
                isBold={column.isBold}
                isHeader
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input type="checkbox" />
              </td>
              {columns.map((column) => (
                <TableCell
                  key={`${column.field}_${row.id}`}
                  value={row[column.field]}
                  isBold={column.isBold}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </TableDefault>
    </TableContainer>
  )
}
