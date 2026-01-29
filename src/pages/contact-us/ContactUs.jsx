import { Container, Section } from "../../layout";
import Layout from "../../layout/Layout";
import ContactUsForm from "./_components/ContactUsForm";

export default function ContactUs() {
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Contact Us</h1>
          <ContactUsForm />
        </Container>
      </Section>
    </Layout>
  );
}
