import React from 'react'
import Layout from '../components/Common/Layout'
import PageStarter from "../components/Common/PageStarter"
import AboutUsText from "../components/About/AboutUsText/AboutUsText"
import CoreTeam from "../components/About/CoreTeam/CoreTeam"
import OurProcess from "../components/About/OurProcess/OurProcess"
import PageEnder from "../components/Common/PageEnder"
import AboutUsImg from "../images/about/about-us.svg"
const about = () => {
    return (
        <Layout>
            <PageStarter pageName="About us" subText="We are dedicated team working on the latest technologies to serve our clients from all around the world with bespoke and innovative solutions." image={AboutUsImg} />
            <AboutUsText />
            <CoreTeam />
            <OurProcess />
            <div className="divider" />
            <PageEnder heading="How can we help?" subHeading="It might be easier than you think. Get in touch today." btnText1="Contact us" btnText2="Open chat" />
        </Layout>
    )
}

export default about
