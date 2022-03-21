import { FC, useContext } from 'react';
import NextLink from 'next/link';
import { Typography, Grid, Link, CardActionArea, CardMedia, Box, Button } from '@mui/material';

import { ItemCounter } from '../ui';
import { CartContext } from '../../context/';
import { ICartProduct } from '../../interfaces/';

interface Props {
   editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {

   const { cart, deleteProductFromCart, updateProductCartQuantity } = useContext(CartContext);

   const onNewQauntityValue = (product: ICartProduct, newQuantityValue: number) => {
      product.quantity = newQuantityValue;
      updateProductCartQuantity(product);
   }

   return (
      <>
         {
            cart.map(product => (
               <Grid container spacing={2} sx={{ mb: 1 }} key={`${product.slug}${product.size}`}>
                  <Grid item xs={3}>
                     <NextLink href={`/product/${product.slug}`} passHref>
                        <Link>
                           <CardActionArea>
                              <CardMedia
                                 image={`/products/${product.image}`}
                                 component='img'
                                 sx={{ borderRadius: '8px' }}
                              />
                           </CardActionArea>
                        </Link>
                     </NextLink>
                  </Grid>
                  <Grid item xs={7}>
                     <Box display='flex' flexDirection='column'>
                        <Typography variant='body1'>{product.title}</Typography>
                        <Typography variant='body1'>Talla: {product.size}</Typography>
                        {
                           editable
                              ? <ItemCounter
                                 currentValue={product.quantity}
                                 maxValue={10}
                                 updatedQuantity={(value) => onNewQauntityValue(product, value)}
                              />
                              : <Typography variant='body1'>Cantidad: {product.quantity}</Typography>
                        }
                     </Box>
                  </Grid>
                  <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
                     <Typography variant='subtitle1'>{`$${product.price}`}</Typography>
                     {
                        editable
                        && (
                           <Button
                              variant='text'
                              color='error'
                              onClick={() => deleteProductFromCart(product)}
                           >
                              Remover
                           </Button>
                        )
                     }
                  </Grid>
               </Grid>
            ))
         }
      </>
   )
}
