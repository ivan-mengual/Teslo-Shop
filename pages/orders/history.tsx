import NextLink from 'next/link'
import { ShopLayout } from '@/components/layouts'

import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



const columns: GridColDef[] = [
  {field:'id', headerName:'ID', width:100},
  {field:'fullName', headerName:'Nombre Completo', width:300},

  {
    field:'paid',
    headerName:'Pagada',
    description:'Muestra informacion si esta pagada la orden o no',
    width:200,
    renderCell:(params:GridValueGetterParams) => {
      return(
        params.row.paid
        ? <Chip color='success' label='Pagada' variant='outlined' />
        : <Chip color='error' label='No pagada' variant='outlined' />
      )
    }
  },
  {
    field:'orden',
    headerName:'Ver Orden',
    width:200,
    renderCell:(params:GridValueGetterParams) => {
      return(
        <NextLink href={`/orders/${params.row.id}`} legacyBehavior passHref>
          <Link underline='always'>
            Ver Orden
          </Link>
        </NextLink>
      )
    }
  },
  
]

const rows = [
  {id: 1, paid: false, fullName:'Melisa Flores'},
  {id: 2, paid: true ,fullName:'Ivan Mengual'},
  {id: 3, paid: true ,fullName:'Antonio Heredia'},
  {id: 4, paid: true ,fullName:'Fernado Alonso'},
  {id: 5, paid: false, fullName:'Esutaquio Sagrelles'},
  {id: 6, paid: true ,fullName:'David Ruiz'},
]

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
      <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

      <Grid container>
        <Grid item xs={12} sx={{height:650, width:'100%'}}>
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

export default HistoryPage