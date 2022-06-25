import React from 'react'
import { Layout } from '@components/core/Layout'
import { NextPageWithLayout } from 'types/app'

const Home: NextPageWithLayout = () => {
  return <div data-test="example">Test font Awesome</div>
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
