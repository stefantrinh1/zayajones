import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Styles from "./Header.module.scss"

export default props => (
  <header className={Styles.header}>
    <Img fluid={props.headerImage} />
    <div className={Styles.textcontainer}>
      <h1>{props.headerTitle}</h1>
      <div className={Styles.seperator} />
      <div dangerouslySetInnerHTML={{ __html: props.headerText }} />
      <a target="_blank" href={props.headerCV}><button>Download CV</button></a>
    </div>
  </header>
)
