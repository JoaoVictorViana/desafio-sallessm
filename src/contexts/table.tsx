import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react'
import { ProductRow } from 'types/api/product'
import { TableConfig } from 'types/app'

interface TableContextProps {
  rows: ProductRow[]
  setRows?: React.Dispatch<React.SetStateAction<ProductRow[]>>
  tableConfig: TableConfig
  setTableConfig?: React.Dispatch<React.SetStateAction<TableConfig>>
  selectedRows: number[]
  setSelectedRows?: React.Dispatch<React.SetStateAction<number[]>>
}

export const TableContext = createContext<TableContextProps>({
  rows: [],
  tableConfig: {
    total: 1,
    count: 10,
  },
  selectedRows: [],
})

export const useTable = () => useContext<TableContextProps>(TableContext)

export const TableProvider: React.FC<PropsWithChildren> = (props) => {
  const [rows, setRows] = useState<ProductRow[]>([])
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [tableConfig, setTableConfig] = useState<TableConfig>({
    total: 1,
    count: 10,
  })

  const { children } = props

  return (
    <TableContext.Provider
      value={useMemo(
        () => ({
          rows,
          setRows,
          tableConfig,
          setTableConfig,
          selectedRows,
          setSelectedRows,
        }),
        [rows, tableConfig, selectedRows]
      )}
    >
      {children}
    </TableContext.Provider>
  )
}
