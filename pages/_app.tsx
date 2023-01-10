import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import { GlobalProvider } from '../context/global/GobalProvider'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})


function App({ Component, pageProps }: AppProps) {
  return (
    // <GlobalProvider>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    // </GlobalProvider>
  )
}

export default App
