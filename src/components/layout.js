/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./Header/header"
import Footer from "./Footer/Footer"
import "../../node_modules/normalize.css/normalize.css";
// import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <>

      <Header />

        <main>{children}</main>

      <Footer />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
