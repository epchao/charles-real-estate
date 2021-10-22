import App from 'next/app'
import '../styles/globals.css'
import { createContext } from 'react'
import { fetchAPI } from '../lib/strapiurl'

export const GlobalContext = createContext({})

function MyApp({ Component, pageProps }) {
const { global } = pageProps

  return (
    <>
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
