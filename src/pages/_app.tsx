import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { NextPageWithLayout } from 'types/app'
import SSRProvider from 'react-bootstrap/SSRProvider'

config.autoAddCss = false

type MyAppProps = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return <SSRProvider>{getLayout(<Component {...pageProps} />)}</SSRProvider>
}

export default MyApp
