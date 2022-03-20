import { AuthLayout } from "../../components/layouts"
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import NextLink from 'next/link';

const RegisterPage = () => {
   return (
      <AuthLayout title="Crear cuenta">
         <Box sx={{ width: 550, padding: '10px 20px' }}>
            <Grid container spacing={3}>

               <Grid item xs={12}>
                  <Typography variant='h1' component='h1'>Crear cuenta</Typography>
               </Grid>

               <Grid item xs={6}>
                  <TextField label="Nombre(s)" variant="outlined" fullWidth />
               </Grid>

               <Grid item xs={6}>
                  <TextField label="Apellido(s)" variant="outlined" fullWidth />
               </Grid>

               <Grid item xs={12}>
                  <TextField label="Telefono" variant="outlined" fullWidth />
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
                  <NextLink href='/auth/login' passHref>
                     <Link color='#000' underline='always'>
                        Ya tienes una cuenta?
                     </Link>
                  </NextLink>
               </Grid>

            </Grid>
         </Box>
      </AuthLayout>)
}

export default RegisterPage