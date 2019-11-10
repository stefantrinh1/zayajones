import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../basestyles/contact.scss"
import ContactDetails from "../components/ContactForm/ContactDetails"
import ContactForm from "../components/ContactForm/ContactForm"

const Contact = () => (
  <Layout>
    <SEO
      title="Contact Me"
      description="Contact me for any queries or questions. Look forward to hearing from you."
    />
    <div className="contactpage">
      <div className="contactpageintro">
        <h1>Contact Me</h1>
        <p>
          Please Contact Me if you have any further questions or have any
          enquiries. I look forward to hearing from you.
        </p>
      </div>
      <ContactDetails />
      <ContactForm />
    </div>
  </Layout>
)

export default Contact
