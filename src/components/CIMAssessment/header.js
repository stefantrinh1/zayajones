import React from "react"
import Img from "gatsby-image"
import Styles from "./header.module.scss"

export default props => (
  <div className={Styles.header}>
    <Img fluid={props.headerImage} />
    <div className={Styles.headertext}>
      <h1>{props.title}</h1>
      <h4>{props.subtitle}</h4>
    </div>
  </div>
)
