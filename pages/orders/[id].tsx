import NextLink from 'next/link'
import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material"
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'


const OrderPage
 = () => {
  return (
    <ShopLayout title="Resumen de la orden 125454578" pageDescription="Resumen de la orden">
      <Typography variant="h1" component='h1'>Orden: 125454578</Typography>

      {/* <Chip 
        sx={{my:2}}
        label='Pendiente de pago'
        variant='outlined'
        color='error'
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip 
        sx={{my:2}}
        label='Pagada'
        variant='outlined'
        color='success'
        icon={<CreditScoreOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}> 
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}> 
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>

              <Divider sx={{my:1}} />

              <Box display='flex' justifyContent='end'>
                <NextLink href='/checktout/adress' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography variant='subtitle1'>Direccion de entrega</Typography>
              <Typography>Ivan Mengual</Typography>
              <Typography>C/ Misco nº 33 </Typography>
              <Typography>Paterna, Valencia</Typography>
              <Typography>España</Typography>
              <Typography>+34 676586585</Typography>

              <Divider sx={{my:1}} />

              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{mt:3}}>
                <h1>Pagar</h1>
                <Chip 
                  sx={{my:2}}
                  label='Pagada'
                  variant='outlined'
                  color='success'
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrderPage
