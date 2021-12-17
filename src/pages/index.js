import React from "react"
import Layout from "../components/Common/Layout"
import Hero from "../components/Home/Hero/Hero"
import Success from "../components/Home/Success/Success";
import WantToKnow from "../components/Common/WantToKnow";
import Responsive from "../components/Home/Responsive/Responsive";
import BrandingCar from "../components/Home/BrandingCar/BrandingCar";
import BookFitting from "../components/Home/BookFitting/BookFitting";
import Tyres from "../components/Home/Tyres/Tyres";
import CaseStudies from "../components/Home/CaseStudies/CaseStudies";
import PageEnder from "../components/Common/PageEnder";

const text1 = "Want to know more about our SEO services?"  
const text2 = "Want to know more about our web development services?"

export default function Home() {
  return <Layout>
    <Hero />
    <Success />
    <WantToKnow text={text1} />  
    <Responsive />
    <WantToKnow text={text2} />
    <BrandingCar />
    <BookFitting />
    <Tyres />
    <CaseStudies />
    <PageEnder heading="Ready to start your next big project?" subHeading="We’re friendly people, get in touch today for a free consultation to learn how we can improve your business" btnText1="Contact us" btnText2="Schedule phone call" />
  </Layout>
}
