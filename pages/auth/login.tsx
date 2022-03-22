import { AuthLayout } from "../../components/layouts"
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import NextLink from 'next/link';
import { useForm } from "react-hook-form";
import { validations } from "../../utils";
import { testloApi } from '../../api';
import { ErrorOutline } from "@mui/icons-material";
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from "../../context";

type FormData = {
   email: string,
   password: string
}

const LoginPage = () => {
   const { register, handleSubmit, formState: { errors, } } = useForm<FormData>();
   const { loginUser } = useContext(AuthContext);
   const [showError, setShowError] = useState(false);
   const router = useRouter();

   const onLoginUSer = async ({ email, password }: FormData) => {

      setShowError(false);

      const isValidLogin = await loginUser(email, password);

      if (!isValidLogin) {
         return setShowError(true); 
      }

      router.replace('/');
   }


   return (
      <AuthLayout title="Ingresar">
         <form onSubmit={handleSubmit(onLoginUSer)} noValidate>
            <Box sx={{ width: 550, padding: '10px 20px' }}>
               <Grid container spacing={3}>

                  <Grid item xs={12}>
                     <Typography variant='h1' component='h1'>Iniciar Sesion</Typography>
                     {
                        showError &&
                        <Chip
                           variant='filled'
                           label='No se reconoce este usuario'
                           icon={<ErrorOutline />}
                           color='error'
                           className="fadeIn"
                           sx={{ width: '100%', mt: 2 }}
                        />
                     }
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        type='email'
                        label="correo"
                        variant="outlined"
                        fullWidth
                        {...register('email', {
                           required: 'Este campo es requerido',
                           validate: validations.isEmail

                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                     />
                  </Grid>

                  <Grid item xs={12}>
                     <TextField
                        label="contrasenia"
                        type='password'
                        variant="outlined"
                        fullWidth
                        {...register('password', {
                           required: 'Este campo es requerido',
                           minLength: { value: 6, message: 'Minimo 6 caracteres' }
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                     />
                  </Grid>

                  <Grid item xs={12}>
                     <Button
                        type='submit'
                        className='circular-btn'
                        color='secondary'
                        fullWidth
                     >
                        INGRESAR
                     </Button>
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
         </form>
      </AuthLayout>)
}

export default LoginPage