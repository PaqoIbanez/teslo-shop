import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { ProductSizeSelector, ProductSlideshow } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { useState, useContext } from 'react';
import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import { ICartProduct, IProduct, ISize } from '../../interfaces';
import { dbProducts } from '../../database';
import { CartContext } from '../../context/cart/CartContext';

interface Props {
   product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {

   // const router = useRouter();
   const { addProductToCart } = useContext(CartContext);

   // const { product, isLoading } = useProduct(`products/${router.query.slug}`);

   const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
      _id: product._id,
      image: product.images[0],
      price: product.price,
      size: undefined,
      slug: product.slug,
      title: product.title,
      gender: product.gender,
      quantity: 1
   });

   const onSelectedSize = (size: ISize) => {
      if (size === tempCartProduct.size) {
         setTempCartProduct({
            ...tempCartProduct,
            size: undefined
         });
         return;
      }
      setTempCartProduct({
         ...tempCartProduct,
         size: size
      });
   }

   const onUpdateQuantity = (quantity: number) => {
      setTempCartProduct(currentProduct => ({
         ...currentProduct,
         quantity
      }));
   }

   const onAddProduct = () => {
      if (tempCartProduct.size === undefined) return;

      addProductToCart(tempCartProduct);

   }

   return (
      <ShopLayout title={product.title} pageDescription={product.description}>
         <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
               <ProductSlideshow images={product.images} />
            </Grid>
            <Grid item xs={12} md={4}>
               <Box display='flex' flexDirection='column'>
                  <Typography variant='h1' component='h1' fontWeight={400}>{product.title}</Typography>
                  <Typography variant='subtitle1' >{`$${product.price}`}</Typography>

                  <ProductSizeSelector
                     sizes={product.sizes}
                     selectedSize={tempCartProduct.size}
                     onSelectedSize={onSelectedSize}
                  />

                  <Box sx={{ my: 2 }}>
                     <Typography variant='subtitle2'>Cantidad:</Typography>

                     <ItemCounter
                        currentValue={tempCartProduct.quantity}
                        updatedQuantity={onUpdateQuantity}
                        maxValue={product.inStock}
                     />


                  </Box>


                  {
                     (product.inStock === 0)
                        ? <Chip label='No hay disponibles' color='error' variant='outlined' />
                        : <Button
                           color='secondary'
                           className='circular-btn'
                           onClick={onAddProduct}
                        >
                           {
                              tempCartProduct.size
                                 ?
                                 'Agregar al carrito'
                                 :
                                 'Debes seleccionar una talla'
                           }
                        </Button>
                  }


                  <Box sx={{ mt: 3 }}>
                     <Typography variant='subtitle2' >Disponibles: {product.inStock}</Typography>
                     <Typography variant='subtitle2' >Descripcion:</Typography>
                     <Typography variant='body2' >{product.description}</Typography>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </ShopLayout>
   )
}

// * No usar esto 
// import { GetServerSideProps, NextPage } from 'next'
// import { dbProducts } from '../../database';

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {

//    const { slug = '' } = params as { slug: string }
//    const product = await dbProducts.getProductBySlug(slug);

//    if (!product) {
//       return {
//          redirect: {
//             destination: '/',
//             permanent: false
//          }
//       }
//    }

//    return {
//       props: {
//          product
//       }
//    }
// }

// You should use getStaticPaths if you???re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

   const slugs = await dbProducts.getAllProductSlugs();

   return {
      paths: slugs.map(({ slug }) =>
         ({ params: { slug } })),
      fallback: "blocking"
   }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const { slug = '' } = params as { slug: string };

   const product = await dbProducts.getProductBySlug(slug);

   if (!product) {
      return {
         redirect: {
            destination: '/',
            permanent: false
         }
      }
   }

   return {
      props: {
         product
      },
      revalidate: 60 * 60 * 24
   }
}

export default ProductPage;