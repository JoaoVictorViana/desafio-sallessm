import React from 'react'
import { Layout } from '@components/core/Layout'
import { NextPageWithLayout } from 'types/app'

const Comissao: NextPageWithLayout = () => {
  return <div data-test="example">Comissao</div>
}

export default Comissao

Comissao.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
