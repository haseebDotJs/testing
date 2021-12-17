import React from 'react'
import Card from "./Card"
import Luke from "../../../images/about/team-luke.jpg"
import Joe from "../../../images/about/team-joe.jpg"
import Reuben from "../../../images/about/team-reuben.jpg"
import Darryl from "../../../images/about/team-darryl.png"
import Abigail from "../../../images/about/team-abigail.jpg"
import { graphql, useStaticQuery } from "gatsby"

const CoreTeam = () => {
    const data = useStaticQuery(graphql`
    {
      luke: file(relativePath: {eq: "about/team-luke.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      joe: file(relativePath: {eq: "about/team-joe.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      reuben: file(relativePath: {eq: "about/team-reuben.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      darryl: file(relativePath: {eq: "about/team-darryl.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      abigail: file(relativePath: {eq: "about/team-abigail.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
  }
`)
    // const luke = data.luke.childImageSharp.fluid
    // const joe = data.joe.childImageSharp.fluid
    // const reuben = data.reuben.childImageSharp.fluid
    // const reuben = data.reuben.childImageSharp.fluid
    // const darryl = data.darryl.childImageSharp.fluid
    // const abigail = data.abigail.childImageSharp.fluid
    const cardInfo = [
        {
            name: "Luke Brown",
            position: "CEO and Full Stack Developer",
            details: "Since the start of this decade, Luke has been a full stack freelancer developer and systems administrator. In 2015, Luke founded Element Softworks, determined to build a reliable name for anyone in need of digital services locally and across the globe.",
            image: Luke
        },
        {
            name: "Joe Methven",
            position: "UX/UI Specialist",
            details: "Overseeing and directly impacting all creative design aspects (such as graphics, wireframes, UX) in any team is no easy task. Thankfully Joe is here with his wide knowledge of UX/UI and design spreading across over 100+ projects to help bring to life our clients dreams 100+ projects to help bring to life our clients dreams",
            image: Joe
        },
        {
            name: "Reuben Westrop",
            position: "Graphic Designer",
            details: "Reuben, our Head of Design, focuses on working with our clients to build beautiful brand identities for their company and projects. His creativity builds from the client's requirements, onto his designs, ready to inspire the development team to make beautiful and engaging websites.",
            image: Reuben
        },
        {
            name: "Darryl Frost",
            position: "Web Developer",
            details: "Originating from an IT technician background, Darryl is now heavily involved in the Web Development tech stack. He works daily with clients to develop bespoke React.js dashboards for a number of start-ups along-side building our own internal digital solutions."
            , image: Darryl
        },
        {
            name: "Abigail McNaught",
            position: "Social Media and Client Manager",
            details: "Abigail joined the team to assist with managing the social media profile and SEO portfolios for our clients and our brand alongside assisting our client in their brand management."
            , image: Abigail
        }

    ]
    return (
        <section className="coreTeam  light-bg">
            <div className="container-ez max-xl">
                <h2 className="font-semibold mb-5">Our core team</h2>
                <div className="grid lg:grid-cols-6  gap-4  ">
                    {
                        cardInfo.map((info, index) => (
                            <>
                                {index === 3 && <div className="col-span-1" />}
                                <div className="col-span-2" key={info.name}>
                                    <Card name={info.name} position={info.position} details={info.details} image={info.image} />
                                </div>
                                {index === 4 && <div className="col-span-1" />}
                            </>

                        ))
                    }
                </div>
            </div>
        </section >
    )
}

export default CoreTeam
