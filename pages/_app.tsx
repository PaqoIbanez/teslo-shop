import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../themes'
import { SWRConfig } from 'swr';
import { UIProvider, CartProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <SWRConfig
         value={{
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
         }}
      >
         <UIProvider>
            <CartProvider>
               <ThemeProvider theme={lightTheme}>
                  <CssBaseline />
                  <Component {...pageProps} />
               </ThemeProvider>
            </CartProvider>
         </UIProvider>
      </SWRConfig>
   )
}

export default MyApp
