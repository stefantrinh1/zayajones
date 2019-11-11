import React from "react"
import Img from "gatsby-image"
import Styles from "./Header.module.scss"

export default props => (
  <header className={Styles.header}>
    <Img fluid={props.headerImage.fluid} alt={props.headerImage.description} />
    <div className={Styles.textcontainer}>
      <h1>{props.headerTitle}</h1>
      <div className={Styles.seperator} />
      <div dangerouslySetInnerHTML={{ __html: props.headerText }} />
      <a target="_blank" rel="noopener noreferrer" href={props.headerCV}><button>Download CV</button></a>
    </div>
  </header>
)
