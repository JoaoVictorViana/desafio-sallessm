import React from 'react'
import { Layout } from '@components/core/Layout'
import { NextPageWithLayout } from 'types/app'
import { Dashboard } from '@components/organisms/Dashboard'

const Home: NextPageWithLayout = () => {
  return <Dashboard />
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
