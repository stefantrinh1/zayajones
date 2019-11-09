import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../basestyles/about.scss";

import Header from "../components/About/Header"
import Education from "../components/About/Education";
import Professional from "../components/About/Professional";

export default ({ data }) => {

    const dataHeader = data.allContentfulAbout.edges[0].node
    const dataEducation = data.allContentfulEducationHistory.edges
    const dataProfessional = data.allContentfulProfessionalExperience.edges

    return(
        <Layout>
             <SEO title="About Zaya Jones" description="Find Out More about Zaya Jones the Medicial Student and Her Professional History" />
             <Header 
             headerTitle={dataHeader.headerTitle}
             headerText={dataHeader.headerText.childMarkdownRemark.html}
             headerImage={dataHeader.headerImage.fluid}
             headerCV={dataHeader.cv.file.url}
             />

             <section className="educationandprofessional">
                 <Education content={dataEducation} />
                 <Professional content={dataProfessional} />
             </section>
        </Layout>
    )
 }

 export const query = graphql`
 {
    allContentfulAbout {
      edges {
        node {
          id
          headerTitle
          headerImage {
            fluid (maxWidth:1500) {
            ...GatsbyContentfulFluid
            }
          }
          headerText {
            childMarkdownRemark {
              html
            }
          }
          cv {
            file {
              url
            }
          }
        }
      }
    }

    allContentfulEducationHistory (
        sort: { fields: [dateFinished], order: DESC }
      ) {
        edges {
          node {
            id
            instituteName
            courseName
            presentlyStudyingHere
            dateStarted(formatString: "MMM YYYY")
            dateFinished(formatString: "MMM YYYY")
            instituteLogo {
              fixed (width:120) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }

      allContentfulProfessionalExperience (
        sort: { fields: [dateFinished], order: DESC }
      ) {
        edges {
          node {
            id
            companyName
            jobTitle
            jobLocation
            currentlyWorkingHere
            dateStarted(formatString: "MMM YYYY")
            dateFinished(formatString: "MMM YYYY")
            companyLogo {
              fixed (width:175){
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }

  }
  `
