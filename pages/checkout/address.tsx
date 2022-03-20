import { Typography, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { Box } from '@mui/system';
import { ShopLayout } from "../../components/layouts"


const AddressPage = () => {
   return (
      <ShopLayout title={"Direccion"} pageDescription={"Confiramr direccion del destino"}>
         <Typography variant='h1' component='h1'>Direccion</Typography>
         <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6} >
               <TextField label="Nombre" fullWidth variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6} >
               <TextField label="Apellido" fullWidth variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6} >
               <TextField label="Direccion" fullWidth variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6} >
               <TextField label="Direccion 2" fullWidth variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6} >
               <TextField label="Codigo Postal" fullWidth variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6} >
               <TextField label="Ciudad" fullWidth variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6} >
               <FormControl fullWidth>
                  <Select variant='outlined'
                     label="Pais"
                     value={1}
                  >
                     <MenuItem value={1}> Costa Rica</MenuItem>
                     <MenuItem value={2}>Honduras</MenuItem>
                     <MenuItem value={3}>El Salvador</MenuItem>
                     <MenuItem value={4}>Mexico</MenuItem>
                  </Select>
               </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} >
               <TextField label="Telefono" fullWidth variant='outlined' />
            </Grid>
         </Grid>
         <Box display='flex' justifyContent='center' mt={3}>
            <Button color='secondary' fullWidth className='circular-btn'>CONTINUAR</Button>
         </Box>
      </ShopLayout>
   )
}

export default AddressPage