import React from 'react'
import Layout from '../components/Common/Layout'
import PageStarter from '../components/Common/PageStarter'
// import BlogImg from "../images/blog/blog.svg"
import { graphql } from 'gatsby'

const blog = ({data}) => {
    const {fluid} = data.file.childImageSharp
// console.log("blog",data)
    return (
        <Layout>
            <PageStarter pageName="Blog" subText="Keep up to date with latest goings-on at Element Softworks and get a feel for how we operate behind the scenes." image={fluid}/>
        </Layout>
    )
}
export const query = graphql`
  query BlogImg {
    file(relativePath: {eq: "blog/blog.png"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid  
        }
      }
    }
  }
`
export default blog
