import { db, dbProducts } from '@/database';
import { IOrder } from '@/interfaces'
import { Order, Product } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

type Data = 
| {message: string}
| IOrder

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch(req.method) {
    case 'POST':
      return createOrder(req, res)

    default:
      return res.status(200).json({ message: 'Example' })
  }
  
}

const createOrder = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const {orderItems, total} = req.body as IOrder

  console.log('createOrder ', req.cookies)
  //verificar que tengamos user
  //const session:any = await getSession({req})
  const session = true;
  
  if(!session){
    return res.status(401).json({message:'Debe estar autenticado para hacer esto'})
  }

  //Crear un arreglo con los productos que la persona quiere
  const productsIds = orderItems.map(product => product._id)
  console.log('productsIds: ', productsIds)
  await db.connect()

  const dbProducts = await Product.find({ _id: { $in: productsIds } })

  console.log('1')
  try {
    const subTotal = orderItems.reduce((prev, current) => {

      console.log('2')
      const currentPrice = dbProducts.find(prod => prod.id === current._id)?.price
      if(!currentPrice){
        throw new Error('Verifique el carrito de nuevo, producto no existe')
      }

      return (currentPrice* current.quantity)+ prev

    }, 0)

    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0)
    const backendTotal = subTotal * (taxRate + 1)

    if(total !== backendTotal){
      throw new Error ('El total no cuadra con el monto')
    }

    const userId = '6477012cc8e7e433c7acac4c'
    const newOrder = new Order({...req.body, isPaid:false, user: userId})
    await newOrder.save()
    await db.disconnect()
    
    return res.status(201).json(newOrder)

  } catch (error:any) {
    await db.disconnect()
    console.log(error)
    return res.status(400).json({
      message:error.message || 'Revise los logs del servidor'
    })
  }


  //return res.status(201).json(session)
}
