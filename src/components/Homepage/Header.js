import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Styles from "./Header.module.scss"

const Header = props => (
  <header className={Styles.header}>
    <div className={Styles.headerimage}>
      <Img fluid={props.headerImage} />
    </div>
    <div className={Styles.copycontainer}>
      <div className={Styles.copybox1}>
        <h1>{props.headerTitle}</h1>
      </div>

      <div className={Styles.copybox2}>
        <h3>{props.headerSubtitle}</h3>
      </div>

      <div className={Styles.headerbtn}>
        <Link to="/about">
          <button>Read More</button>
        </Link>
      </div>

      <div className={Styles.copybox3}>
        <p>{props.institution}</p>
        <p>{props.role}</p>
      </div>
    </div>
  </header>
)
export default Header
