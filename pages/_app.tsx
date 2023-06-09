import { AuthProvider, CartProvider, UiProvider } from '@/context'
import '@/styles/globals.css'
import { lightTheme } from '@/themes'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <SWRConfig 
        value={{
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}
      >
        <AuthProvider>
          <CartProvider>
            <UiProvider>
              <ThemeProvider theme={lightTheme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </UiProvider>
          </CartProvider>
        </AuthProvider>
      </SWRConfig>
    </SessionProvider>  
  )
}
