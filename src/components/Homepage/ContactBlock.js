import React from "react";
import Styles from "./ContactBlock.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import ContactDetails from "../ContactForm/ContactDetails"

export default props => {


  return (
    <section className={Styles.contactblock}>
        <ContactDetails />
        <ContactForm />
    </section>
  )
}
