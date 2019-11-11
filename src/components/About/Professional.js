import React from "react"
import Img from "gatsby-image"
import Styles from "./Professional.module.scss"

export default props => (
  <section className={Styles.professional}>

      <h2>Professional Experience</h2>

    {props.content.map(element => {
      
      // reduces the api path for easier reading, typing and shorter variables
      element = element.node

      return (
        <div className={Styles.company} key={element.id}>
          <Img fixed={element.companyLogo.fixed} alt={element.companyLogo.description} />
          <div className={Styles.companytext}>
            <p className={Styles.companyname}>{element.companyName}</p>
            <p className={Styles.jobtitle}>{element.jobTitle}</p>
            <p className={Styles.jobLocation}>{element.jobLocation}</p>
            <p className={Styles.dates}>{`${element.dateStarted} - ${
              element.currentlyWorkingHere ? "Present" : element.dateFinished
            }`}</p>
          </div>
        </div>
      )
    })}
  </section>
)

// id
// companyName
// jobTitle
// jobLocation
// currentlyWorkingHere
// dateStarted(formatString: "MMM YYYY")
// dateFinished(formatString: "MMM YYYY")
// companyLogo {
//   fluid (maxWidth:300){
//     ...GatsbyContentfulFluid
//   }
// }
