import { Metadata } from 'next'
import MyOrders from './MyOrders'

export const metadata: Metadata = {
  title: 'Buyurtma tarixi',
}
export default function OrderHistory() {
  return (
    <>
      <h1 className="text-2xl py-2">Buyurtma tarixi</h1>
      <MyOrders />
    </>
  )
}
