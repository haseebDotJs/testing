import React from 'react'
import AboutUsImg from "../../images/about/about-us.svg"
const PageStarter = ({ pageName, subText, image = { AboutUsImg } }) => {
    return (
        <section>
            <div className="pageStarter flex items-center justify-center">
                <div className="max-xsm text-center container-p">
                    <h1 className="font-semibold">{pageName}</h1>
                    <p className="p-md leading-6">{subText}</p>
                    <div className="pageStarter__image mt-10">
                        <img alt={`${pageName} graphic`} src={image} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageStarter
