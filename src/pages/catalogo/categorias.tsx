import React from 'react'
import { Layout } from '@components/core/Layout'
import { NextPageWithLayout } from 'types/app'

const Categorias: NextPageWithLayout = () => {
  return <div data-test="example">Categorias</div>
}

export default Categorias

Categorias.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
