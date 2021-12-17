import React from 'react'
import Layout from '../components/Common/Layout'
import PageStarter from '../components/Common/PageStarter'
import BlogImg from "../images/blog/blog.svg"
const blog = () => {
    return (
        <Layout>
            <PageStarter pageName="Blog" subText="Keep up to date with latest goings-on at Element Softworks and get a feel for how we operate behind the scenes." image={BlogImg}/>
        </Layout>
    )
}

export default blog
