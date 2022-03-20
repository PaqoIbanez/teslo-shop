import { FC, useEffect, useMemo, useState } from "react"
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { IProduct } from "../../interfaces"
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface Props {
   product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

   const [isHovered, setIsHovered] = useState(false);
   const [isImageLoaded, setIsImageLoaded] = useState(false);

   const productImage = useMemo(() => {
      return isHovered
         ? `/products/${product.images[1]}`
         : `/products/${product.images[0]}`
   }, [isHovered, product.images]);

   return (
      <Grid item
         xs={6}
         sm={4}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         className='fadeIn'
      >
         <Card>
            <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
               <Link>
                  <CardActionArea>
                     <CardMedia
                        component='img'
                        image={productImage}
                        alt={product.title}
                        onLoad={() => setIsImageLoaded(true)}
                     />
                  </CardActionArea>
               </Link>
            </NextLink>
         </Card>

         <Box sx={{ mt: 1 }} display={!isImageLoaded ? 'none' : 'block'} className='fadeIn'>
            <Typography variant='subtitle2'>{product.title}</Typography>
            <Typography variant='subtitle2'>{`$${product.price} `}</Typography>
         </Box>
      </Grid>
   )
}
