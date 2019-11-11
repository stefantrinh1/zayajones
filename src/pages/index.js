import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../basestyles/index.scss";

import Header from "../components/Homepage/Header";
import ExperiencesBlock from "../components/Homepage/ExperiencesBlock";
import ContentBoxes from "../components/Homepage/ContentBoxes";
import ExperiencesCarousel from '../components/Homepage/ExperiencesCarousel';
import OutsideMedicine from '../components/Homepage/OutsideMedicine';
import ContactBlock from "../components/Homepage/ContactBlock";
import AboutBlock from "../components/Homepage/AboutBlock";

export default ({ data }) => {
  const dataCV=data.allContentfulAbout.edges[0].node.cv.file.url
  console.log(dataCV)
  data = data.allContentfulHomepage.edges[0].node
  

  return (
    <Layout>
      <SEO title={data.metaTitle} description={data.metaDescription} />
      <Header
        headerTitle={data.headerTitle}
        headerSubtitle={data.headerSubtitle}
        headerImage={data.headerImage}
        institution={data.institution}
        role={data.role}
      />

      <AboutBlock
        introSnippet={data.introSnippet}
        aboutTitle={data.aboutTitle}
        aboutCopy={data.aboutCopy.childMarkdownRemark.html}
        aboutPhotos={data.aboutPhotos}
        CV={dataCV}
      />

      <ExperiencesBlock
        experiencesTitle={data.experiencesTitle}
        experiencesCopy={data.experiencesCopy.childMarkdownRemark.html}
        experiencesImage={data.experiencesImage}
      />

      <ExperiencesCarousel />

      <ContentBoxes 
        contentBox1Title={data.contentBox1Title}
        contentBox1Text={data.contentBox1Text}
        contentBox1Image={data.contentBox1Image}
        contentBox2Title={data.contentBox2Title}
        contentBox2Text={data.contentBox2Text}
        contentBox2Image={data.contentBox2Image}
        contentBox3Title={data.contentBox3Title}
        contentBox3Text={data.contentBox3Text}
        contentBox3Image={data.contentBox3Image}
      />

      <OutsideMedicine 
        personalContentTitle={data.personalContentTitle}
        personalContentText={data.personalContentText.childMarkdownRemark.html}
        personalContentImage={data.personalContentImage}
      />

      <ContactBlock />

      {console.log(data)}
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulHomepage {
      edges {
        node {
          metaTitle
          metaDescription

          headerTitle
          headerSubtitle
          institution
          role
          headerImage {
            fluid(maxWidth: 1500) {
              ...GatsbyContentfulFluid
            }
            description
          }

          introSnippet

          aboutTitle
          aboutCopy {
            childMarkdownRemark {
              html
            }
          }
          aboutPhotos {
            id
            fluid(maxWidth: 200) {
              ...GatsbyContentfulFluid
            }
            description
          }

          experiencesTitle
          experiencesCopy {
            childMarkdownRemark {
              html
            }
          }
          experiencesImage {
            fluid(maxWidth: 1750) {
              ...GatsbyContentfulFluid
            }
            description
          }

          contentBox1Title
          contentBox1Text
          contentBox1Image {
            fluid(maxWidth: 100) {
              ...GatsbyContentfulFluid
            }
            description
          }

          contentBox2Title
          contentBox2Text
          contentBox2Image {
            fluid(maxWidth: 100) {
              ...GatsbyContentfulFluid
            }
            description
          }

          contentBox3Title
          contentBox3Text
          contentBox3Image {
            fluid(maxWidth: 100) {
              ...GatsbyContentfulFluid
            }
            description
          }

          personalContentTitle
          personalContentText {
            childMarkdownRemark {
              html
            }
          }
          personalContentImage {
            fluid(maxWidth: 1500) {
              ...GatsbyContentfulFluid
            }
            description
          }

          contactNumber
          contactEmail
          instagramUserTitle
          instagramUrl
          linkedinUsername
          linkedinUrl
        }
      }
    }

    allContentfulAbout {
      edges {
        node {
          cv {
            file {
              url
            }
          }
        }
      }
    }

  }
`
