import { AuthLayout } from "../../components/layouts"
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import NextLink from 'next/link';

const LoginPage = () => {
   return (
      <AuthLayout title="Ingresar">
         <Box sx={{ width: 550, padding: '10px 20px' }}>
            <Grid container spacing={3}>

               <Grid item xs={12}>
                  <Typography variant='h1' component='h1'>Iniciar Sesion</Typography>
               </Grid>

               <Grid item xs={12}>
                  <TextField label="correo" variant="outlined" fullWidth />
               </Grid>

               <Grid item xs={12}>
                  <TextField label="contrasenia" type='password' variant="outlined" fullWidth />
               </Grid>

               <Grid item xs={12}>
                  <Button className='circular-btn' color='secondary' fullWidth> INGRESAR </Button>
               </Grid>

               <Grid item xs={12} display='flex' justifyContent='end ' >
                  <NextLink href='/auth/register' passHref>
                     <Link color='#000' underline='always'>
                        No tienes cuenta?
                     </Link>
                  </NextLink>
               </Grid>

            </Grid>
         </Box>
      </AuthLayout>)
}

export default LoginPage