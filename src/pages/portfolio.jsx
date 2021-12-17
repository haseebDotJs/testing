import React from 'react'
import Layout from '../components/Common/Layout'
import PageStarter from '../components/Common/PageStarter'
// import PortfolioImg from "../images/portfolio/portfolio.svg"
import { graphql } from 'gatsby'
const Portfolio = ({data}) => {
    const {fluid} = data.file.childImageSharp
    return (
        <Layout>
            <PageStarter pageName="Portfolio" subText="We feel our portfolio is a true reflection on the varied skillset we can provide for you, from large scale applications to small business websites, we cater for all." image={fluid}/>
        </Layout>
    )
}
export const query = graphql`
  query PortfolioImg {
    file(relativePath: {eq: "portfolio/portfolio.png"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid  
        }
      }
    }
  }
`  
export default Portfolio
