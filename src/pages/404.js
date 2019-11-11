import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>No page located at this address. It has been removed or the URL is incorrect.</p>
  </Layout>
)

export default NotFoundPage
