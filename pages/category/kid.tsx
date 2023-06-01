import { ShopLayout } from "@/components/layouts"
import { ProductList } from "@/components/products"

import { Typography } from "@mui/material"
import { NextPage } from "next"

import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";


const KidsPage:NextPage = () => {

  
  const {products, isLoading} = useProducts('/products?gender=kid')
  

  return (
    <ShopLayout title={"Teslo-Shop - Kids"} pageDescription={"Productos para niños"}>
      <Typography variant="h1" component='h1'>Niños</Typography>
      <Typography variant="h2" sx={{mb:1}}>Todos los productos</Typography>
      
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }

    
    </ShopLayout>
  )
}

export default KidsPage
