import NextLink from 'next/link'
import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"
import { useContext } from 'react'
import { CartContext } from '@/context'
import { countries } from '@/utils'


const SummaryPage = () => {

  const {shippingAddress, numberOfItems} = useContext(CartContext)

  if (!shippingAddress){
    return <></>
  }

  const {firstName, lastName, address, address2 = '', city, country, phone, zip} = shippingAddress

  return (
    <ShopLayout title="Resumen de compra" pageDescription="Resumen de la compra">
      <Typography variant="h1" component='h1' > Resumen de la compra </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}> 
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}> 
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen ({numberOfItems} {numberOfItems === 1 ? 'producto':'productos'})</Typography>

              <Divider sx={{my:1}} />

              <Box display='flex' justifyContent='end'>
                <NextLink href='/checkout/adress' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography variant='subtitle1'>Direccion de entrega</Typography>
              <Typography>{firstName} {lastName}</Typography>
              <Typography>{address} {address2 ? `, ${address2}` : ''}</Typography>
              <Typography>{city} , {zip}</Typography>
              <Typography>{countries.find(c => c.code === country)?.name}</Typography>
              <Typography>{phone}</Typography>

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
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar Orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage