import React from 'react'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { NextPageWithLayout } from 'types/app'
import SSRProvider from 'react-bootstrap/SSRProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/globals.css'
import { TableProvider } from '@contexts/table'

config.autoAddCss = false

type MyAppProps = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <TableProvider>
      <SSRProvider>{getLayout(<Component {...pageProps} />)}</SSRProvider>
    </TableProvider>
  )
}

export default MyApp
