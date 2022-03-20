import { useContext, useState } from 'react';
import NextLink from "next/link";
import { useRouter } from 'next/router';
import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from "@mui/material"
import { ClearAllOutlined, ClearOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { UIContext } from '../../context/ui';

export const Navbar = () => {

   const router = useRouter();
   const { showMenu } = useContext(UIContext);

   const [searchTerm, setSearchTerm] = useState('');
   const [isVisible, setIsVisible] = useState(false);

   const onSearchTerm = () => {
      if (searchTerm.trim().length === 0) return;
      router.push(`/search/${searchTerm}`);
   }

   return (
      <AppBar>
         <Toolbar >
            <NextLink href='/' passHref>
               <Link display='flex' alignItems='center'>
                  <Typography variant='h6'>Teslo |</Typography>
                  <Typography sx={{ ml: 0.5 }}>Shop</Typography>
               </Link>
            </NextLink>

            <Box flex={1} />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
               <NextLink href="/category/men" passHref>
                  <Link>
                     <Button className={router.asPath === '/category/men' ? 'active' : ''}>Hombres</Button>
                  </Link>
               </NextLink>
               <NextLink href="/category/women" passHref>
                  <Link >
                     <Button className={router.asPath === '/category/women' ? 'active' : ''}>Mujeres</Button>
                  </Link>
               </NextLink>
               <NextLink href="/category/kid" passHref>
                  <Link>
                     <Button className={router.asPath === '/category/kid' ? 'active' : ''}>Ninios</Button>
                  </Link>
               </NextLink>
            </Box>

            <Box flex={1} />



            {
               isVisible
                  ? (

                     <Input
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                        className='fadeIn'
                        autoFocus
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) =>
                           e.key === 'Enter' ? onSearchTerm() : null}
                        value={searchTerm}
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton
                                 onClick={() => setIsVisible(false)}
                              >
                                 <ClearOutlined />
                              </IconButton>
                           </InputAdornment>
                        }
                     />
                  )
                  : (
                     < IconButton
                        className='fadeIn'
                        sx={{ display: { xs: 'none', md: 'block' } }}
                        onClick={() => setIsVisible(true)}
                     >
                        <SearchOutlined />
                     </IconButton>
                  )
            }
            < IconButton
               sx={{ display: { xs: 'block', md: 'none' } }}
               onClick={() => showMenu(true)}
            >
               <SearchOutlined />
            </IconButton>

            < NextLink href="/cart" passHref>
               <Link>
                  <IconButton>
                     <Badge badgeContent={2} color='secondary'>
                        <ShoppingCartOutlined />
                     </Badge>
                  </IconButton>
               </Link>
            </NextLink>
            <Button onClick={() => showMenu(true)}>
               Menu
            </Button>

         </Toolbar>
      </AppBar >
   )
}
