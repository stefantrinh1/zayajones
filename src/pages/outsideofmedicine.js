import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import InstagramFeed from "../components/Instagram/InstagramFeed"

export default ({ data }) => (
<Layout>
<SEO title="Outside of Medicine" description="My personal life outside of medicine and what keeps me active and happy." />

<InstagramFeed NumberPhotosToLoad={20} loadUserData={true}/>

</Layout>

)
  