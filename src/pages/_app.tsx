import '@fontsource/archivo'
import { AppProps } from 'next/app'
import React from 'react'
import { CurrencyProvider } from '../store'
import './atomic.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CurrencyProvider>
      <Component {...pageProps} />
    </CurrencyProvider>
  )
}

export default CustomApp
