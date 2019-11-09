import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Styles from "./Experiences.module.scss"

export default props => (
  <section className={Styles.experiencescontainer}>
    <div className={Styles.textcontainer}>
      <h3>{props.experiencesTitle}</h3>
      <p dangerouslySetInnerHTML={{ __html: props.experiencesCopy }} />
      <Link to="/experiences">
        <button className={Styles.experiencesbtn}>See More</button>
      </Link>
    </div>
    
      <Img fluid={props.experiencesImage} />
    
  </section>
)