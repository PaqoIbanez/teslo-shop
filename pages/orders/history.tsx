import { Typography, Grid, Chip, Button, Link } from '@mui/material';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { FC } from 'react';
import NextLink from 'next/link';

interface Props {

}

const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 100 },
   { field: 'fullName', headerName: 'Nombre Completo', width: 300 },

   {
      field: 'paid',
      headerName: 'Pagada',
      description: 'Muestra informacion si esta pagada la orden o no',
      width: 200,
      renderCell: (params: GridValueGetterParams) => {
         return (
            params.row.paid
               ? <Chip color='success' label='Pagada' variant="outlined" />
               : <Chip color='error' label='Pago Pendiente' variant="outlined" />
         )
      },

   },
   {
      field: 'orden',
      headerName: 'Ver orden',
      sortable: false,
      renderCell: (params) => {
         return (
            <NextLink href={`/orders/${params.row.id}`} passHref>
               <Link>
                  <Button>Ver orden</Button>
               </Link>
            </NextLink>
         )
      }
   }
];

const rows = [
   { id: 1, paid: false, fullName: 'Francisco Javier', options: 1 },
   { id: 2, paid: true, fullName: 'Melisa Flores', options: 2 },
   { id: 3, paid: false, fullName: 'Jorge Luis', options: 3 },
   { id: 4, paid: true, fullName: 'Dylan Rios', options: 4 },
   { id: 5, paid: true, fullName: 'Armando Garcia', options: 5 },
   { id: 6, paid: false, fullName: 'Natalia Chavez', options: 6 },
]

const HistoryPage: FC = () => {
   return (
      <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
         <Typography variant='h1' component='h1'>Historial de ordenes</Typography>
         <Grid container>
            <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
               <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
               />
            </Grid>
         </Grid>
      </ShopLayout>
   )
}

export default HistoryPage;