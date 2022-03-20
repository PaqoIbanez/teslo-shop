import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

const KidPage: NextPage = () => {

   const { isLoading, products } = useProducts('products?gender=kid');

   return (
      <ShopLayout title={'Teslo Shop - Home'} pageDescription={'Encuentra los mejores produtos de teslo'} >

         <Typography variant='h1' component='h1'>Tienda</Typography>
         <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
         {
            isLoading
               ? <FullScreenLoading />
               : <ProductList products={products} />
         }

      </ShopLayout>
   )
}

export default KidPage;