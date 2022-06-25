import React from 'react'
import { Layout } from '@components/core/Layout'
import { NextPageWithLayout } from 'types/app'

const Atributos: NextPageWithLayout = () => {
  return <div data-test="example">Atributos</div>
}

export default Atributos

Atributos.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
