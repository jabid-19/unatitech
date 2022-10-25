import React from 'react'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../theme/createEmotionCache'
import theme from '../theme/theme'
import Footer from '../components/Shared/Footer'
import PuffLoader from 'react-spinners/PuffLoader'
import { MessengerChat } from 'react-messenger-chat-plugin'

const clientSideEmotionCache = createEmotionCache()

function MyApp(props) {
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side')
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles)
  //   }
  // }, [])

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2700)
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Unatitech</title>
        <link rel="shortcut icon" href="./favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        {loading ? (
          <Box
            sx={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <PuffLoader loading={loading} color="#c84da7" size={200} />
          </Box>
        ) : (
          <>
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </ThemeProvider>

      {/* Facebook chat button */}
      <MessengerChat
        pageId="113258301261196"
        language="en_US"
        themeColor={'#CE4DA4'}
        height={24}
        autoExpand={false}
      />
    </CacheProvider>
  )
}

export default MyApp
