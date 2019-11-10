import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Styles from "./ExperiencesCarousel.module.scss"
import "./ExperiencesReactSlickOveride.scss";

export default () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulExperiences(
        limit: 8
        sort: { fields: [experienceDate], order: DESC }
      ) {
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
  `)

  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 599,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <div className={Styles.carousel}>
      <h3><u>Recent Experiences</u></h3>

      <Slider {...settings}>
        {data.allContentfulExperiences.edges.map(slide => {

          // shortens the JSX Syntac
          slide = slide.node

          return (
            <div className={Styles.slide} key={slide.id} >
                <h4>{slide.experienceTitle}</h4>
              <Img fluid={slide.experiencePhoto.fluid} />
              <p className={Styles.experiencedate}>{slide.experienceDate}</p>
              <p>{slide.experienceDescription.substr(0, 100)}....</p>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
