import { auth } from '@/lib/auth'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'

export const GET = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const products = await ProductModel.find()
  return Response.json(products)
}) as any

export const POST = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const product = new ProductModel({
    name: 'namuna nom',
    slug: 'namuna-nom-' + Math.random(),
    image: '/images/namuna.png',
    price: 0,
    category: 'namuna kategoriyas',
    brand: 'namuna brand',
    countInStock: 0,
    description: 'namuna tavsif',
    rating: 3.5,
    numReviews: 356,
  })
  try {
    await product.save()
    return Response.json(
      { message: 'Mahsulot muvaffaqiyatli yaratildi', product },
      {
        status: 201,
      }
    )
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    )
  }
}) as any
