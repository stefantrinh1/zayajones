import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../basestyles/experiences.scss"

export default ({ data }) => {

  let introData = data.allContentfulExperiencePage.edges[0].node
  let experienceData = data.allContentfulExperiences.edges

  return (
    <Layout>
        <SEO title="Experiences" description="Keep up to date with my experiences and find out more about my recent activities and contributions"/>
      <div id="experiencepage">
        <h1>{introData.pageTitle}</h1>
        <div className="seperator" />
        <div
          dangerouslySetInnerHTML={{
            __html: introData.pageIntroduction.childMarkdownRemark.html,
          }}
        />

        <div className="experiences">
          {experienceData.map(experience => {
            experience = experience.node

            return (
              <div className="experience">
                <Img fluid={experience.experiencePhoto.fluid} />
                <div className="experienceinner">
                  <h3>{experience.experienceTitle}</h3>
                  <p>{experience.experienceDate}</p>
                  <p>{experience.experienceDescription}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulExperiencePage {
      edges {
        node {
          id
          pageTitle
          pageIntroduction {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }

    allContentfulExperiences(sort: { fields: [experienceDate], order: DESC }) {
      edges {
        node {
          id
          experienceTitle
          experienceDate(formatString: "MMM DD YYYY")
          experienceDescription
          experiencePhoto {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
