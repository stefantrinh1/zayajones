import React from "react"
import InstagramIcon from "../../images/Logos/instagramicon.png"
// import LinkedinIcon from "../../images/Logos/linkedinicon.png"
import Styles from "./ContactDetails.module.scss"

export default () => {
  return (
    <section className={Styles.contactdetails}>
      <div>
        <h3>Contact Information</h3>
        <div className={Styles.seperator} />
        <p>t: +1(916)-281-7417</p>
        <p>e: aryunzaya.jones@rvu.edu</p>
        <p>
          <img className={Styles.socialicon} src={InstagramIcon} alt="Instagram"/> &nbsp;Zayayaya
        </p>
        {/* <p>
          <img className={Styles.socialicon} src={LinkedinIcon} />{" "}
          &nbsp;ZayaJones
        </p> */}
      </div>
    </section>
  )
}
