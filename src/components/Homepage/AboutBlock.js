import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Styles from "./AboutBlock.module.scss"

export default props => {

  return (
    <section className={Styles.aboutcontainer}>
      {console.log(props)}
      <div className={Styles.textcontainer}>
        <h5>{props.introSnippet}</h5>
        <h3>{props.aboutTitle}</h3>
        <div dangerouslySetInnerHTML={{ __html: props.aboutCopy }} />
        <Link to="/about">
          <button className={Styles.aboutbtn}>See Full Page</button>
        </Link>
        <a target="_blank" rel="noopener noreferrer" href={props.CV}>
        <button className={Styles.downloadbtn}>
          Download CV
        </button>
        </a>
      </div>
      <div className={Styles.imagescontainer}>
        {props.aboutPhotos.map(photo => {
          return <Img key={photo.id} fluid={photo.fluid} />
        })}
      </div>
    </section>
  )
}
