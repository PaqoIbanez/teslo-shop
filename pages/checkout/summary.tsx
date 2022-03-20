import { Typography, Grid, Card, Box, CardActionArea, Button, Divider, Link } from '@mui/material';
import { CartList } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link';

const SummaryPage = () => {
   return (
      <ShopLayout title="Resumen de la orden de compra" pageDescription="Resumen de la orden de compra">
         <Typography variant='h1' component='h1'>Resumen de la orden</Typography>
         <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
               <CartList />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
               <Card sx={{ padding: 4, maxWidth: { md: '500px' }, width: '100%' }}>
                  <Typography variant='h6'>Resumen de compra (3 productos)</Typography>
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
                  {/* <Box display='flex' sx={{ mt: 2 }}>
                     <Typography variant='subtitle2'>Direccion de facturacion</Typography>
                     <Box flexGrow={1} />
                     <NextLink href='/checkout/address' passHref>
                        <Link underline='always' color='#000'>
                           <Typography>Editar</Typography>
                        </Link>
                     </NextLink>
                  </Box>
                  <Typography variant='subtitle1'>Francisco Javier Ibanez</Typography>
                  <Typography variant='subtitle1'>Bernal Diaz del Castillo #604</Typography>
                  <Typography variant='subtitle1'>Zacatecas, Zac, 98099</Typography> */}
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
                     <Typography variant="subtitle1">3 productos</Typography>
                  </Box>
                  <Box display='flex'>
                     <Typography variant="subtitle1">Shipping</Typography>
                     <Box flexGrow={1} />
                     <Typography variant="subtitle1">$155.36</Typography>
                  </Box>
                  <Box display='flex'>
                     <Typography variant="subtitle1">Impuestos (15%)</Typography>
                     <Box flexGrow={1} />
                     <Typography variant="subtitle1">$35.24</Typography>
                  </Box>
                  <Box display='flex' sx={{ mt: 2, mb: 3 }}>
                     <Typography variant="h6">Total:</Typography>
                     <Box flexGrow={1} />
                     <Typography variant="h6">$186.43</Typography>
                  </Box>
                  <CardActionArea sx={{ textAlign: 'center' }} >
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
                  </CardActionArea>
               </Card>
            </Grid>
         </Grid>
      </ShopLayout>
   )
}

export default SummaryPage