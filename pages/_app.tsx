import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../themes'
import { SWRConfig } from 'swr';
import { UIProvider, CartProvider, AuthProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
   const arr = [
      ['Rojo', 'Verde', 'Azul'],
      ['tela', 'hilo', 'lana'],
      ['L', 'M', 'S']
   ];

   const getAllCombinations = (arr: []) => {
      const newArray = [];
      arr.map((item, i) => {
         console.log(i);
      })
   }
   return (
      <SWRConfig
         value={{
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
         }}
      >
         <AuthProvider>
            <CartProvider>
               <UIProvider>
                  <ThemeProvider theme={lightTheme}>
                     <CssBaseline />
                     <Component {...pageProps} />
                  </ThemeProvider>
               </UIProvider>
            </CartProvider>
         </AuthProvider>
      </SWRConfig>
   )
}

export default MyApp
