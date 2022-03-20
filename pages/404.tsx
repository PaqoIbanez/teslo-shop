import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ShopLayout } from '../components/layouts/ShopLayout';

const custom404 = () => {
   return (
      <ShopLayout title={'Page not found'} pageDescription={'No hay nada que mostrar aqui'} >
         <Box sx={{
            flexDirection: { xs: 'column', sm: 'row' }
         }}
            display='flex'
            alignItems='center'
            justifyContent='center'
            height='calc(100vh - 150px)'
         >
            <Typography variant='h1' component='h1' fontSize={50} fontWeight={100}>404 | </Typography>
            <Typography marginLeft={1} fontSize={30}> Page Not Found</Typography>
         </Box>
      </ShopLayout>
   )
}

export default custom404;