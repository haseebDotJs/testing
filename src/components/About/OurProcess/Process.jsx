import React from 'react'


import AI from "../../../images/about/icon-_0008_illustrator.png"
import XD from "../../../images/about/icon-_0009_xd.png"
import AE from "../../../images/about/icon-_0010_effects.png"
import PS from "../../../images/about/icon-_0011_photoshop.png"
import PR from "../../../images/about/icon-_0016_premiere.png"
import Blender from "../../../images/about/icon-_0003_blender.png"


import Node from "../../../images/about/icon-_0001_node.png"
import Github from "../../../images/about/icon-_0004_github.png"
import Sass from "../../../images/about/icon-_0005_sass.png"
import Gatsby from "../../../images/about/icon-_0019_gatsby.png"
import ReactJS from "../../../images/about/icon-_0007_react.png"
import Vue from "../../../images/about/icon-_0006_vue.png"

import Mongo from "../../../images/about/icon-_0002_mongodb.png"
import AWS from "../../../images/about/icon-_0000_aws.png"
import Heroku from "../../../images/about/icon-_0012_heroku.png"
import Android from "../../../images/about/icon-_0013_android.png"
import Apple from "../../../images/about/icon-_0014_apple.png"
import CloudFlare from "../../../images/about/icon-_0015_cloudflare.png"

const Processes = [
    {
        heading: "Design",
        para1: "We sit down with you and work out all requirements for each milestone before we start anything. Once you’re happy with the proposal and pricing, we then move to design.",
        para2: "Next we build your wireframes and designs in Adobe XD as it's perfect to showcase to you and get your continued feedback in this main iteration stage.",
        para3: "We also use Adobe Illustrator for graphics and logos. We use InDesign for print and Photoshop for photos editing, Blender for 3D visualisation, After Effects for UI animations, Premier Pro for video production.",
        para4: "We usually style up over Bootstrap 4, but we can use any CSS framework or build from the ground up upon request.",
        images: [
            { url: AI, alt: "AI" },
            { url: XD, alt: "XD" },
            { url: AE, alt: "AE" },
            { url: PS, alt: "PS" },
            { url: PR, alt: "PR" },
            { url: Blender, alt: "Blender" }
        ]
    },
    {
        heading: "Develop",
        para1: "Depending on the size of your project, we have weekly agile sprints and track progress on Trello/GitHub with weekly releases for you and your team to view and feedback to us.",
        para2: "We work hard to follow the design files you've signed off by bringing them to life with the latest and greatest technologies most appropriate for your project.",
        para3: "For most projects we usually use React or Vue as are versatile and robust frameworks suitable for any sized project. If it's a static website you're after then we tend to build the site using software that follows JAMstack principals.",
        para4: "Our client mobile apps we use React Native, to cut development time, especially if a matching website is also built in React.",
        images: [
            { url: Node, alt: "Node JS" },
            { url: Github, alt: "Github" },
            { url: Sass, alt: "Sass" },
            { url: Gatsby, alt: "Gatsby" },
            { url: ReactJS, alt: "React JS" },
            { url: Vue, alt: "Vue JS" }
        ]
    },
    {
        heading: "Deploy",
        para1: "The hard work isn't finished yet. The next stage is building and deploying. All of our servers run through full SSL encryption and HTTPS as standard. We carefully monitor the OWASP top 10 and ensure all of our team develop to the latest security standards.",
        para2: "Each codebase is deployed in an environment suitable for its needs. From small static websites all the way up to cross-platform multi-codebase projects, we can assist you in deployment of your project.",
        para3: "If we're building an app then we can take care of the complex deploy and compliance process that is needed to reach the iOS and Android app stores.",
        para4: "We're heavy advocates of using CDNs such as AWS CloudFront and CloudFlare. Most of our projects are deployed to Netlify, Heroku, AWS or to our clients preference. We regularly backup and content and data for ease of mind at our clients request.",
        images: [
            { url: Mongo, alt: "Mongo DB" },
            { url: AWS, alt: "AWS" },
            { url: Heroku, alt: "Heroku" },
            { url: Android, alt: "Android" },
            { url: Apple, alt: "Apple" },
            { url: CloudFlare, alt: "Cloud Flare" }
        ]
    }
]

// const process = 
const Process = () => {
    return (
        <div>
            {
                Processes.map((process, index) => {
                    const even = index % 2 === 0
                    const side1 = <div className="mt-5 md:w-1/2">
                        <div >
                            <h3 className="font-semibold">{process.heading}</h3>
                            <p className="mt-5">
                                {process.para1}
                            </p>
                            <p className="mt-3 ">
                                {process.para2}
                            </p>

                            <p className="mt-3 ">
                                {process.para3}
                            </p>
                            <p className="mt-3 ">
                                {process.para3}
                            </p>
                        </div>
                    </div>
                    const side2 = <div className="md:w-1/2">
                        <div className="flex items-center justify-center flex-wrap m-auto mt-4 md:mt-0 md:w-4/5">
                            {process.images.map(image => (
                                <img src={image.url} alt={image.alt} width={100} />
                            ))}
                        </div>
                    </div>
                    return (
                        <div className="container-py">
                            <div className="md:flex items-center">
                                <div className="md:hidden md:flex items-center">
                                    {
                                        <>{side1} {side2}</>
                                    }
                                </div>
                                <div className="md:flex items-center hidden md:block">
                                    {even ? <>{side1} {side2}</> : <>{side2} {side1}</>}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Process
