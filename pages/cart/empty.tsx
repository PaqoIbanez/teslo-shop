import { Typography, Box, Button, Link } from '@mui/material';
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link';

const EmptyPage = () => {
   return (
      <ShopLayout title="Carrito vacio" pageDescription="No hay articulos en el carrito de compras">
         <Typography variant='h1' component='h1'>Tienda</Typography>
         <Box sx={{ mt: { xs: 20, sm: 20, md: 6 } }} >
            <Box mb={2} ml={2} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }} >
               <Typography variant='h5' fontWeight={200}>Su carrito de compras esta vacio.</Typography>
            </Box>
            <Box
               display='flex'
               flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
               justifyContent={{ xs: 'center', sm: 'center', md: 'left' }}
               alignItems='center'
            >
               <NextLink href='/' passHref>
                  <Link>
                     <Button sx={{
                        mb: { xs: 2, sm: 2, md: 0 },
                        ml: 2,
                        width: 350,
                        height: 38
                     }}
                        color='secondary'
                        className='circular-btn'
                     >
                        CONTINUA COMPRANDO
                     </Button>
                  </Link>
               </NextLink>
               <Button sx={{
                  ml: 2,
                  width: 350,
                  height: 38
               }}
                  className='singin circular-btn'
                  color='inherit'
                  variant='outlined'
               >
                  INICIAR SESION
               </Button>
            </Box>
         </Box>
      </ShopLayout>
   )
}

export default EmptyPage