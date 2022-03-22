import { AuthLayout } from "../../components/layouts"
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { validations } from "../../utils";
import { testloApi } from "../../api";
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { ErrorOutline } from '@mui/icons-material';
import { AuthContext } from "../../context";

type FormData = {
   name: string,
   email: string,
   password: string
}

const RegisterPage = () => {

   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
   const [showError, setShowError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const { registerUser } = useContext(AuthContext)
   const router = useRouter();

   const onRegisterForm = async ({ name, email, password }: FormData) => {
      setShowError(false);

      const { hasError, message } = await registerUser(name, email, password);

      if (hasError) {
         setErrorMessage(message!);
         setShowError(true);
         return;
      }

      router.replace('/');


   }

   return (
      <AuthLayout title="Crear cuenta">
         <form onSubmit={handleSubmit(onRegisterForm)} noValidate>
            <Box sx={{ width: 550, padding: '10px 20px' }}>
               <Grid container spacing={3}>
                  <Grid item xs={12}>
                     <Typography variant='h1' component='h1'>Crear cuenta</Typography>
                     {
                        showError &&
                        <Chip
                           variant='filled'
                           label={errorMessage === '' ? 'El correo proporcionado ya existe' : errorMessage}
                           icon={<ErrorOutline />}
                           color='error'
                           className="fadeIn"
                           sx={{ width: '100%', mt: 2 }}
                        />
                     }
                  </Grid>

                  <Grid item xs={12}>
                     <TextField
                        label="Nombre(s)"
                        variant="outlined"
                        fullWidth
                        {...register('name', {
                           required: 'Este campo es requerido',
                           minLength: { value: 3, message: 'Minimo de 3 caracteres' }
                        })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                     />
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
                     <Button type='submit' className='circular-btn' color='secondary' fullWidth> CREAR CUENTA </Button>
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
         </form>
      </AuthLayout>)
}

export default RegisterPage