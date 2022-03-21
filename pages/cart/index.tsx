import { Grid, Typography, Card, Button, Box } from '@mui/material';

import { ShopLayout } from "../../components/layouts"
import { CartList } from "../../components/cart";
import { useContext } from 'react';
import { CartContext } from '../../context/cart/CartContext';
import { currency } from '../../utils';

const CartPage = () => {


   const { numberOfItems, subTotal, tax, total } = useContext(CartContext);

   return (
      <ShopLayout title="Carrito - 3" pageDescription="Carrito de compras de la tienda">
         <Typography variant='h1' component='h1'>Carrito</Typography>
         <Grid container spacing={3}>

            <Grid item xs={12} md={6} lg={6}>
               <CartList editable />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
               <Card sx={{ padding: 4, maxWidth: { md: '500px' }, width: '100%' }}>
                  <Box display='flex' sx={{ mb: 2 }}>
                     <Typography variant="h6">Orden</Typography>
                  </Box>
                  <Box display='flex' sx={{ my: 1 }}>
                     <Typography >N. de productos: </Typography>
                     <Box flexGrow={1} />
                     <Typography>{numberOfItems}</Typography>
                  </Box>
                  <Box display='flex' sx={{ my: 1 }}>
                     <Typography >subTotal</Typography>
                     <Box flexGrow={1} />
                     <Typography>{currency.format(subTotal)}</Typography>
                  </Box>
                  <Box display='flex' sx={{ my: 1 }}>
                     <Typography>Impuestos</Typography>
                     <Box flexGrow={1} />
                     <Typography>{currency.format(tax)}</Typography>
                  </Box>
                  <Box display='flex' sx={{ mt: 2, mb: 3 }}>
                     <Typography variant="h6">Total:</Typography>
                     <Box flexGrow={1} />
                     <Typography variant="h6">{currency.format(total)}</Typography>
                  </Box>
                  <Button
                     color='secondary'
                     className="circular-btn"
                     sx={{
                        width: '100%',
                        height: 38
                     }}
                  >
                     CHECKOUT
                  </Button>
               </Card>
            </Grid>
         </Grid>
      </ShopLayout>
   )
}

export default CartPage;