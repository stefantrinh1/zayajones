import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../basestyles/tutoring.scss"

export default () => (
    <Layout>
        <SEO title="Tutor Application" description="Zaya Jones Tutor Application" />
        <div className="videocontainer" >

            <div className='videodescription'>
                <h1>Tutor Application</h1>
                
                <div className='content'>

                    <p>I am applying to be a tutor for the year of 20/21 and here is my video application.</p>
                    <p>Thank you for taking the time to watch my application. I am very excited at the prospect of being a tutor for next semister.</p>

                    <blockquote>
                        <h4>I am very passionate about helping others and teaching is a way for me to share my knowledge and help others with their studies.</h4>
                    </blockquote>

                </div>
            </div>
        </div>

    </Layout>

)
