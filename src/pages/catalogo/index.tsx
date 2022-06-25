import React from 'react'
import { Layout } from '@components/core/Layout'
import { NextPageWithLayout } from 'types/app'

const Produto: NextPageWithLayout = () => {
  return <div data-test="example">Produto</div>
}

export default Produto

Produto.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
