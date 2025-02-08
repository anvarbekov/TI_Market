import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: "To'lov usullari",
}

export default async function PaymentPage() {
  return <Form />
}
