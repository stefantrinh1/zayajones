import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Styles from "./ContentBoxes.module.scss"

export default props => (
  <section className={Styles.contentboxes}>
      <Link to="/reflections">
    <div className={Styles.box}>
      <Img className={Styles.image} fluid={props.contentBox1Image} />
      <h3>{props.contentBox1Title}</h3>
      <p>{props.contentBox1Text}</p>
    </div>
    </Link>
    <Link to="/cimassessments">
    <div className={Styles.box}>
      <Img className={Styles.image} fluid={props.contentBox2Image} />
      <h3>{props.contentBox2Title}</h3>
      <p>{props.contentBox2Text}</p>
    </div>
    </Link>
    <Link to="/goals">
    <div className={Styles.box}>
      <Img className={Styles.image} fluid={props.contentBox3Image} />
      <h3>{props.contentBox3Title}</h3>
      <p>{props.contentBox3Text}</p>
    </div>
    </Link>
  </section>
)
