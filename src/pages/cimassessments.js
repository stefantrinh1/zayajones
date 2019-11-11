import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../basestyles/cimassessments.scss"
import Header from "../components/CIMAssessment/header"

export default ({ data }) => {

  // These are the result of the graphql queries seperated into variables
  const generalPage = data.allContentfulCimAssessmentPage.edges[0].node
  const PSI = data.allContentfulPhysiciansSkillsInventory.edges
  const SIS = data.allContentfulSpecialtyIndecisionScale.edges
  const PVIPS = data.allContentfulPhysicianValuesInPracticeScale.edges
  const SCP = data.allContentfulSpecialityChoiceProbabilities.edges
  const [currentAssessment, openClickedAssessment] = useState(PSI)

  const assessmentOptions = [
    { symbol: PSI, name: "Physicians Skills Inventory (PSI)" },
    { symbol: SCP, name: "Speciality Choice Probabilities (SCP)" },
    { symbol: SIS, name: "Specialty Indecision Scale (SIS)" },
    { symbol: PVIPS, name: "Physician Values In Practice Scale (PVIPS)" },
  ]

  return (
    <Layout>
      <SEO
        title="CiM Assessments"
        description="Careers in Medicine Assessment. This is a assessment that shows my personaility and where I would fit in the Medicial industry"
      />

      <section className="assessments">
      <Header 
        title={generalPage.title}
        subtitle={generalPage.subtitle}
        headerImage={generalPage.headerImage}
      />

      <div dangerouslySetInnerHTML={{__html:generalPage.introduction.childMarkdownRemark.html}}/>


        <div className="assessmentfilter">
          {assessmentOptions.map(assessment => {
            return (
              <button
                onClick={() => {
                  const assessmentContainer = document.getElementById("assessmentcontainer")
                  console.log(assessmentContainer)
                  // Because projects is in another componenet it accesses the other components elemenet through id and non css module.
                  assessmentContainer.scrollIntoView({behavior: "smooth", block:"start", inline: "start"})
          
                  openClickedAssessment(assessment.symbol)
                }}
              >
                {assessment.name}
              </button>
            )
          })}
        </div>

        {currentAssessment.map(assessment => {
          return (
            <div id="assessmentcontainer" key={assessment.node.id}>
              <h2>{assessment.node.title}</h2>
              <p>{assessment.node.date}</p>
              <Img className="assessmentimage" fluid={assessment.node.image.fluid} alt={assessment.node.image.description} />
              <div dangerouslySetInnerHTML={{__html:assessment.node.mainDescription.childMarkdownRemark.html}} />
              <a target="_blank" rel="noopener noreferrer" href={assessment.node.fullReport.file.url}><button>See Full Report</button></a>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {

    allContentfulCimAssessmentPage {
      edges {
        node {
          id
          title
          subtitle
          headerImage {
            fluid {
              ...GatsbyContentfulFluid
            }
            description
          }
          introduction {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }


    allContentfulPhysiciansSkillsInventory {
      edges {
        node {
          id
          title
          date(formatString: "MMM DD YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
            description
          }
          fullReport {
            file {
              url
            }
          }
          mainDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }


    allContentfulSpecialityChoiceProbabilities {
      edges {
        node {
          id
          title
          date(formatString: "MMM DD YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
            description
          }
          fullReport {
            file {
              url
            }
          }
          mainDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }


    allContentfulPhysicianValuesInPracticeScale {
      edges {
        node {
          id
          title
          date(formatString: "MMM DD YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
            description
          }
          fullReport {
            file {
              url
            }
          }
          mainDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }


    allContentfulSpecialtyIndecisionScale {
      edges {
        node {
          id
          title
          date(formatString: "MMM DD YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
            description
          }
          fullReport {
            file {
              url
            }
          }
          mainDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`