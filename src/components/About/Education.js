import React from "react"
import Img from "gatsby-image"
import Styles from "./Education.module.scss"

export default props => (
  <section className={Styles.education}>

      <h2>Education</h2>

    {props.content.map(element => {
      
      // reduces the api path for easier reading, typing and shorter variables
      element = element.node

      return (
        <div className={Styles.institute} key={element.id}>
          <Img fixed={element.instituteLogo.fixed} alt={element.instituteLogo.description}/>
          <div className={Styles.institutetext}>
            <p className={Styles.institutename}>{element.instituteName}</p>
            <p className={Styles.coursename}>{element.courseName}</p>
            <p className={Styles.dates}>{`${element.dateStarted} - ${
              element.presentlyStudyingHere ? "Present" : element.dateFinished
            }`}</p>
          </div>
        </div>
      )
    })}
  </section>
)
