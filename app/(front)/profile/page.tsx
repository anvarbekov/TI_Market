import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Profil',
}

export default async function Profile() {
  return <Form />
}
