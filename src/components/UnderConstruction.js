import React from "react"
import { Link } from "gatsby"
import Styles from "./UnderConstruction.module.scss"

export default () => (
  <section className={Styles.container}>
      <h2>Page Under Construction</h2>
        <img src="https://www.keoweesailingclub.com/wp-content/uploads/2018/03/construction-graphic.jpg" alt="Working Progress" />
        <h3>Come Back Soon</h3>
        <Link to='/'>Return to Homepage</Link>
  </section>
)
