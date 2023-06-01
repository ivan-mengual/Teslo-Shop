import { ShopLayout } from "@/components/layouts"
import { ProductList } from "@/components/products"

import { Typography } from "@mui/material"
import { NextPage } from "next"

import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";


const MenPage:NextPage = () => {

  
  const {products, isLoading} = useProducts('/products?gender=men')
  

  return (
    <ShopLayout title={"Teslo-Shop - Men"} pageDescription={"Productos para Hombre"}>
      <Typography variant="h1" component='h1'>Hombres</Typography>
      <Typography variant="h2" sx={{mb:1}}>Todos los productos</Typography>
      
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }

    
    </ShopLayout>
  )
}

export default MenPage
