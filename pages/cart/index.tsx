import { ShopLayout } from "../../components/layouts"
import { Grid, Typography, Card, Button, Box } from '@mui/material';
import { CartList } from "../../components/cart";

const CartPage = () => {
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
                     <Typography >Shipping</Typography>
                     <Box flexGrow={1} />
                     <Typography>Calculated at checkout</Typography>
                  </Box>
                  <Box display='flex' sx={{ my: 1 }}>
                     <Typography >Sales Tax</Typography>
                     <Box flexGrow={1} />
                     <Typography>Calculated at checkout</Typography>
                  </Box>
                  <Box display='flex' sx={{ mt: 2, mb: 3 }}>
                     <Typography variant="h6">Sales Tax</Typography>
                     <Box flexGrow={1} />
                     <Typography variant="h6">$130.00</Typography>
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