import App from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import { createContext } from 'react'
import { fetchAPI } from '../lib/strapiurl'

export const GlobalContext = createContext({})

function MyApp({ Component, pageProps }) {
const { global } = pageProps

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)
  const global = await fetchAPI("/global")
  return { ...appProps, pageProps: { global } }
}

export default MyApp
