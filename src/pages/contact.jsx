import React from 'react'
import Layout from '../components/Common/Layout'
import PageStarter from '../components/Common/PageStarter'
// import ContactImg from "../images/contact/contact.svg"
import { graphql } from 'gatsby'

const Contact = ({data}) => {
    const {fluid} = data.file.childImageSharp

    return (
        <Layout>
            <PageStarter pageName="Contact" subText="We're friendly people! So please get in touch if you want to know more about any of our services that we offer or if you want some relevant advice." image={fluid}/>
        </Layout>
    )
}
export const query = graphql`
  query ContactImg {
    file(relativePath: {eq: "contact/contact.png"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid  
        }
      }
    }
  }
` 
export default Contact
