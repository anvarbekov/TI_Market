import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Buyurtma berish',
}

export default async function PlaceOrderPage() {
  return <Form />
}
