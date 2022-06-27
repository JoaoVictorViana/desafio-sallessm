import { Paginantion } from '@components/molecules/Pagination'
import { Table } from '@components/molecules/Table'
import { headerCells } from '@config/table'
import { useTable } from '@contexts/table'
import { getCategories } from '@fetchers/category'
import { getProducts } from '@fetchers/product'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { parseRows } from '@utils/parse'
import React, { useCallback, useEffect, useState } from 'react'
import { Form, Tab } from 'react-bootstrap'
import { Category } from 'types/api/category'
import { Product } from 'types/api/product'
import { PageContent, PageHeader, PageTitle } from '../Dashboard/style'
import {
  ActionButton,
  Container,
  FooterText,
  PageFooter,
  PageTabs,
  Search,
  SearchButton,
  SearchInput,
} from './style'

export const Produto: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const { rows, setRows } = useTable()

  const handleData = async () => {
    const promiseProducts = getProducts().then((response) => {
      setProducts(response)
    })

    const promiseCategory = getCategories().then((response) =>
      setCategories(response)
    )

    Promise.all([promiseCategory, promiseProducts])
  }

  const searchProducts = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault()

      const filteredProducts = products.filter((product) => {
        return (
          product.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          product.code.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      })
      setRows?.(parseRows(filteredProducts, categories))
    },
    [search, products, categories]
  )

  const handleSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setSearch(value)

      if (!value) {
        setRows?.(parseRows(products, categories))
      }
    },
    [products, categories]
  )

  const updateRows = useCallback(() => {
    setRows?.(parseRows(products, categories))
  }, [categories, products])

  useEffect(() => {
    handleData()
  }, [])

  useEffect(() => {
    updateRows()
  }, [products])

  return (
    <Container>
      <PageHeader>
        <PageTitle>Produtos</PageTitle>
        <ActionButton
          // eslint-disable-next-line no-alert
          onClick={() => alert('Funcionalidade em desenvolvimento...')}
          variant="primary"
        >
          Novo Produto
        </ActionButton>
      </PageHeader>
      <PageContent>
        <PageTabs
          defaultActiveKey="todos"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="todos" title="Todos">
            <Form onSubmit={searchProducts}>
              <Search>
                <SearchButton
                  variant="outline-secondary"
                  id="search-products"
                  onClick={searchProducts}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </SearchButton>
                <SearchInput
                  placeholder="Busque por: Nome, EAN ou Código"
                  aria-label="Pesquisar na tabela"
                  aria-describedby="search-products"
                  onChange={handleSearchInput}
                />
              </Search>
            </Form>
            <Table columns={headerCells} />
          </Tab>
        </PageTabs>
      </PageContent>
      <PageFooter>{rows.length && <Paginantion />}</PageFooter>
      <PageFooter>
        <FooterText>
          *Iremos criar uma versão completa no layout e em reunião com o time:
          Back e Front, decidir o que colocamos nesta primeira versão e
          colocamos o restante como melhoria.
        </FooterText>
      </PageFooter>
    </Container>
  )
}
