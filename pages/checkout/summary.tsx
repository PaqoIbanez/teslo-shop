import { Typography, Grid, Card, Box, Button, Divider, Link } from '@mui/material';
import { CartList } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../../context';
import { currency } from '../../utils';

const SummaryPage = () => {

   const { numberOfItems, subTotal, tax, total } = useContext(CartContext);

   return (
      <ShopLayout title="Resumen de la orden de compra" pageDescription="Resumen de la orden de compra">
         <Typography variant='h1' component='h1'>Resumen de la orden</Typography>
         <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
               <CartList />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
               <Card sx={{ padding: 4, maxWidth: { md: '500px' }, width: '100%' }}>
                  <Typography variant='h6'>Resumen de compra ({numberOfItems} {numberOfItems > 1 ? 'productos' : 'producto'})</Typography>
                  <Box display='flex' sx={{ mt: 2 }}>
                     <Typography variant='subtitle2'>Direccion de envio</Typography>
                     <Box flexGrow={1} />
                     <NextLink href='/checkout/address' passHref>
                        <Link underline='always' color='#000'>
                           <Typography>Editar</Typography>
                        </Link>
                     </NextLink>
                  </Box>
                  <Typography variant='subtitle1'>Francisco Javier Ibanez</Typography>
                  <Typography variant='subtitle1'>Bernal Diaz del Castillo #604</Typography>
                  <Typography variant='subtitle1'>Zacatecas, Zac, 98099</Typography>
                  <Typography variant='subtitle1'>Mexico</Typography>
                  <Typography variant='subtitle1'>+52 492-544-1331 </Typography>

                  <Divider sx={{ my: 3 }} />
                  <Box display='flex' sx={{ mb: 2 }}>
                     <Typography variant="h6">Orden</Typography>
                     <Box flexGrow={1} />
                     <NextLink href='/checkout/address' passHref>
                        <Link underline='always' color='#000'>
                           <Typography>Editar</Typography>
                        </Link>
                     </NextLink>
                  </Box>
                  <Box display='flex'>
                     <Typography variant="subtitle1">Subtotal</Typography>
                     <Box flexGrow={1} />
                     <Typography variant="subtitle1">{currency.format(subTotal)}</Typography>
                  </Box>
                  <Box display='flex'>
                     <Typography variant="subtitle1">Shipping</Typography>
                     <Box flexGrow={1} />
                     <Typography variant="subtitle1">155.36</Typography>
                  </Box>
                  <Box display='flex'>
                     <Typography variant="subtitle1">Impuestos ({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100}%)</Typography>
                     <Box flexGrow={1} />
                     <Typography variant="subtitle1">{currency.format(tax)}</Typography>
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
                     CONFIRMAR ORDEN
                  </Button>

               </Card>
            </Grid>
         </Grid>
      </ShopLayout>
   )
}

export default SummaryPage