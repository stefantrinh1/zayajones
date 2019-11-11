import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Styles from "./OutsideMedicine.module.scss"

export default props => (
  <section className={Styles.personalcontainer}>
    <h3 className={Styles.mobiletitle}>{props.personalContentTitle}</h3>
    <Img className={Styles.image} fluid={props.personalContentImage.fluid} alt={props.personalContentImage.description} />
    <div className={Styles.textcontainer}>
      <h3 className={Styles.desktoptitle}>{props.personalContentTitle}</h3>
      <div
        className={Styles.personaltext}
        dangerouslySetInnerHTML={{ __html: props.personalContentText }}
      />
      <Link to="/outsideofmedicine">
        <button>See More</button>
      </Link>
    </div>
  </section>
)
