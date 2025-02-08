import ContactForm from "@/components/contactForm/contactForm"

export const metadata = {
  title: "Aloqa bo'limi",
}
export default function ContactPage() {
  return (
    <>
      <h3 className="text-center text-4xl my-8">Xabaringizni yuboring</h3>
      <div className="mx-auto mb-8">
        <ContactForm />
      </div>
    </>
  )
}
