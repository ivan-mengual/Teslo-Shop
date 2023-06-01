import { ShopLayout } from "@/components/layouts"
import { ProductList } from "@/components/products"

import { Typography } from "@mui/material"
import { NextPage } from "next"

import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";


const WomenPage:NextPage = () => {

  
  const {products, isLoading} = useProducts('/products?gender=women')
  

  return (
    <ShopLayout title={"Teslo-Shop - Women"} pageDescription={"Productos para Mujer"}>
      <Typography variant="h1" component='h1'>Mujeres</Typography>
      <Typography variant="h2" sx={{mb:1}}>Todos los productos</Typography>
      
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }

    
    </ShopLayout>
  )
}

export default WomenPage
