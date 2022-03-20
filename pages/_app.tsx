import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../themes'
import { SWRConfig } from 'swr';
import { UIProvider } from '../context/ui';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <SWRConfig
         value={{
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
         }}
      >
         <UIProvider>
            <ThemeProvider theme={lightTheme}>
               <CssBaseline />
               <Component {...pageProps} />
            </ThemeProvider>
         </UIProvider>
      </SWRConfig>
   )
}

export default MyApp
