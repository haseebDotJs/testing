import React from 'react'
// import mobileImg from "../../../images/case-studies-ab-tyres-branding-car.png"
import { StaticImage } from "gatsby-plugin-image"

const BrandingCar = () => {
    return (
        <section>
        
            <StaticImage layout="fullWidth" src={"../../../images/case-studies-ab-tyres-branding-car.png"}  alt="case studies braning car" placeholder="blurred" />
        </section>
    )
}

export default BrandingCar
