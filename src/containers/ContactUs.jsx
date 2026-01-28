import ContactUsHeader from '../Layout/ContactUsHeader.jsx'
import ContactUsForm from '../Layout/ContactUsForm.jsx'
import GlobalFooter from '../Layout/GlobalFooter.jsx'
import GlobalNavBar from '../Layout/GlobalNavBar.jsx'

export default function ContactUs() {
  return (
    <>
        <GlobalNavBar />
        <ContactUsHeader />
        <ContactUsForm isEdit={false}/>
        <GlobalFooter />
    </>
  )
}
