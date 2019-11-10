import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Styles from "./ExperiencesBlock.module.scss"

export default props => (
  <section className={Styles.experiencescontainer}>
    <div className={Styles.textcontainer}>
      <h3>{props.experiencesTitle}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.experiencesCopy }} />
      <Link to="/experiences">
        <button className={Styles.experiencesbtn}>See More</button>
      </Link>
    </div>
    
      <Img fluid={props.experiencesImage} />
    
  </section>
)
