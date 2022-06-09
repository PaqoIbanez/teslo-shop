import { Typography, Grid, TextField, FormControl, Select, MenuItem, Button } from '@mui/material';
import { Box } from '@mui/system';
import { ShopLayout } from "../../components/layouts";
import { countries } from '../../utils'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';

type FormData = {
   firstName: string;
   lastName: string;
   address: string;
   address2: string;
   zip: string;
   city: string;
   country: string;
   phone: string;
}

const AddressPage = () => {

   const [selectedCountry, setSelectedCountry] = useState('MEX');
   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

   const onSubmitAddress = async (data: FormData) => {
      Cookies.set('address', JSON.stringify(data));
   }

   return (
      <ShopLayout title={"Direccion"} pageDescription={"Confiramr direccion del destino"}>
         <form onSubmit={handleSubmit(onSubmitAddress)} noValidate>

            <Typography variant='h1' component='h1'>Direccion</Typography>
            <Grid container spacing={2} mt={2}>
               <Grid item xs={12} sm={6} >
                  <TextField
                     label="Nombre"
                     fullWidth
                     variant='outlined'
                     {...register('firstName', {
                        required: 'Este campo es requerido',
                        minLength: { value: 3, message: 'Minimo de 3 caracteres' }
                     })}
                     error={!!errors.firstName}
                     helperText={errors.firstName?.message}
                  />
               </Grid>
               <Grid item xs={12} sm={6} >
                  <TextField
                     label="Apellido"
                     fullWidth
                     variant='outlined'
                     {...register('lastName', {
                        required: 'Este campo es requerido',
                        minLength: { value: 3, message: 'Minimo de 3 caracteres' }
                     })}
                     error={!!errors.lastName}
                     helperText={errors.lastName?.message}

                  />
               </Grid>
               <Grid item xs={12} sm={6} >
                  <TextField
                     label="Direccion"
                     fullWidth
                     variant='outlined'
                     {...register('address', {
                        required: 'Este campo es requerido',
                        minLength: { value: 3, message: 'Minimo de 3 caracteres' }
                     })}
                     error={!!errors.address}
                     helperText={errors.address?.message}
                  />
               </Grid>
               <Grid item xs={12} sm={6} >
                  <TextField
                     label="Direccion 2"
                     fullWidth
                     variant='outlined'
                     {...register('address2', {
                        minLength: { value: 3, message: 'Minimo de 3 caracteres' }
                     })}
                     error={!!errors.address2}
                     helperText={errors.address2?.message}
                  />
               </Grid>
               <Grid item xs={12} sm={6} >
                  <TextField
                     label="Codigo Postal"
                     fullWidth
                     variant='outlined'
                     {...register('zip', {
                        required: 'Este campo es requerido',
                        minLength: { value: 3, message: 'Minimo de 3 caracteres' }
                     })}
                     error={!!errors.zip}
                     helperText={errors.zip?.message}
                  />
               </Grid>
               <Grid item xs={12} sm={6} >
                  <TextField
                     label="Ciudad" fullWidth
                     variant='outlined'
                     {...register('city', {
                        required: 'Este campo es requerido',
                        minLength: { value: 3, message: 'Minimo de 3 caracteres' }
                     })}
                     error={!!errors.city}
                     helperText={errors.city?.message}
                  />
               </Grid>
               <Grid item xs={12} sm={6} >
                  <FormControl fullWidth>
                     <Select
                        variant='outlined'
                        label="Pais"
                        value={selectedCountry}
                        {...register('country', {
                           required: 'Este campo es requerido',
                        })}
                        error={!!errors.country}
                     >
                        {
                           countries.map((country) =>
                              <MenuItem
                                 key={country.code}
                                 value={country.code}
                                 onClick={() => setSelectedCountry(country.code)}> {country.name}
                              </MenuItem>
                           )
                        }
                     </Select>
                  </FormControl>
               </Grid>
               <Grid item xs={12} sm={6} >
                  <TextField
                     label="Telefono"
                     fullWidth variant='outlined'
                     {...register('phone', {
                        required: 'Este campo es requerido',
                        minLength: { value: 10, message: 'El número no es valido: 10 digitos son requeridos' }
                     })}
                     error={!!errors.phone}
                     helperText={errors.phone?.message}
                  />
               </Grid>
            </Grid>
            <Box display='flex' justifyContent='center' mt={3}>
               <Button color='secondary' fullWidth className='circular-btn' type='submit'>CONTINUAR</Button>
            </Box>
         </form>
      </ShopLayout>
   )
}



// export const getServerSideProps: GetServerSideProps = async ({ req }) => {

//    const { token } = req.cookies;

//    let isValidToken = false;

//    try {
//       await jwt.isValidToken(token);
//       isValidToken = true;
//    } catch (error) {
//       isValidToken = false;
//    }

//    if (!isValidToken) {
//       return {
//          redirect: {
//             destination: '/auth/login?p=/checkout/address',
//             permanent: false
//          }
//       }
//    }

//    return {
//       props: {

//       }
//    }
// }

export default AddressPage