import React, { useState } from 'react'
import { Dropdown, Pagination as PaginationDefault } from 'react-bootstrap'
import {
  Container,
  PaginationCount,
  PaginationCountLabel,
  PaginationItem,
  Toggle,
} from './style'

export const Paginantion: React.FC = () => {
  const [count, setCount] = useState(10)

  const handleChange = (value: number) => {
    setCount(value)
  }

  return (
    <Container>
      <PaginationCount>
        <Dropdown>
          <Toggle id="pagination-count">{count}</Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleChange(10)}>10</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange(15)}>15</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange(20)}>20</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <PaginationCountLabel>Itens por página</PaginationCountLabel>
      </PaginationCount>
      <PaginationDefault
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        size="sm"
      >
        <PaginationItem style={{ color: 'black' }} active={false}>
          1
        </PaginationItem>
      </PaginationDefault>
    </Container>
  )
}
