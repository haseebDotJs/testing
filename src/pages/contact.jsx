import React from 'react'
import Layout from '../components/Common/Layout'
import PageStarter from '../components/Common/PageStarter'
import ContactImg from "../images/contact/contact.svg"
const Contact = () => {
    return (
        <Layout>
            <PageStarter pageName="Contact" subText="We're friendly people! So please get in touch if you want to know more about any of our services that we offer or if you want some relevant advice." image={ContactImg}/>
        </Layout>
    )
}

export default Contact
