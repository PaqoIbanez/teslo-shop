import { Typography, Box, Button, Link } from '@mui/material';
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const EmptyPage = () => {

   const { isLoggedIn } = useContext(AuthContext);

   return (
      <ShopLayout title="Carrito vacio" pageDescription="No hay articulos en el carrito de compras">
         <Typography variant='h1' component='h1'>Tienda</Typography>
         <Box
            display='flex'
            flexDirection='column'
            height='calc(100vh - 200px)'
            justifyContent='center'
            alignItems='center'>
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
               {
                  !isLoggedIn &&
                  <NextLink href='/auth/login' passHref>
                     <Link>
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
                     </Link>
                  </NextLink>

               }
            </Box>
         </Box>
      </ShopLayout>
   )
}

export default EmptyPage