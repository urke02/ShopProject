import ContactUsHeader from '../Layout/ContactUsHeader.jsx'
import ContactUsForm from '../Layout/ContactUsForm.jsx'

export default function ContactUs() {
  return (
    <>
        <ContactUsHeader />
        <ContactUsForm isEdit={false}/>
    </>
  )
}
