import React from 'react'
import { Layout } from '@components/core/Layout'
import { NextPageWithLayout } from 'types/app'
import { Produto } from '@components/organisms/Produto'

const ProdutoPage: NextPageWithLayout = () => {
  return <Produto />
}

export default ProdutoPage

ProdutoPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
