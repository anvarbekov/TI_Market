import AddToCart from '@/components/products/AddToCart'
import { convertDocToObj } from '@/lib/utils'
import productService from '@/lib/services/productService'
import Link from 'next/link'
import { Rating } from '@/components/products/Rating'

// react icon
import { IoReturnUpBackOutline } from "react-icons/io5";

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <>
      <div className="my-2">
        <Link className='btn btn-gost text-2xl' href="/">
          <IoReturnUpBackOutline />
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            className='rounded'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} reyting`}
              />
            </li>
            <li> {product.brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              Tavsifi: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card shadow-xl mt-3 md:mt-0">
            <div className="card-body text-primary">
              <div className="mb-2 flex justify-between">
                <div>Narxi</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Holati</div>
                <div>
                  {product.countInStock > 0 ? 'Bor' : 'Mavjud emas'}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: '',
                      size: '',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
