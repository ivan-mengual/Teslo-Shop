import NextLink from 'next/link'
import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"


const SummaryPage = () => {
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