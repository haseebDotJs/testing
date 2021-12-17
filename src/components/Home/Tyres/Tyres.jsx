import React from 'react'
// import tyres from "../../../images/case-studies-ab-tyres-branding-photography.png"
import { StaticImage } from "gatsby-plugin-image"

const Tyres = () => {
    return (
        <div className="light-bg pb-20">
            <StaticImage layout="fullWidth" src={"../../../images/case-studies-ab-tyres-branding-photography.png"} alt="man working with tyres"  placeholder="blurred" />
        </div>
    )
}

export default Tyres
