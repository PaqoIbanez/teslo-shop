import { Typography, Box, capitalize } from '@mui/material';
import type { NextPage, GetServerSideProps } from 'next'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products';
import { dbProducts } from '../../database';
import { IProduct } from '../../interfaces/products';

interface Props {
   products: IProduct[];
   foundProduts: boolean;
   query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProduts, query }) => {
   return (
      <ShopLayout title={'Teslo Shop - Search'} pageDescription={'Buscar producto'} >

         <Typography variant='h1' component='h1'>Buscar productos</Typography>

         {
            foundProduts
               ? <Typography variant='h2' sx={{ mb: 1 }}>Resultados para: {capitalize(query)}</Typography>
               : <Box display='flex'>
                  <Typography variant='h2' sx={{ mb: 1 }}>No se econtraron productos que coincidan con:</Typography>
                  <Typography variant='h2' sx={{ mb: 1 }}>{capitalize(query)}</Typography>
               </Box>
         }

         <ProductList products={products} />
      </ShopLayout>
   )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
   const { query } = params as { query: string };

   if (query.length === 0) {
      return {
         redirect: {
            destination: '/',
            permanent: false
         }
      }
   }
   let products = await dbProducts.getSearchProducts(query);
   const foundProduts = products.length > 0;

   // TODO: retornar otros productos si el search no encontro nada
   if (!foundProduts) {
      products = await dbProducts.getAllProducts();
   }

   return {
      props: {
         products,
         foundProduts,
         query
      }
   }
}

export default SearchPage;