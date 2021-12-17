import React from 'react'
import Img from "gatsby-image"
const Card = ({ fluid, cardOptions }) => {
    return (
        <div>
            {/* <Link to="/"> */}
                <div className="transition-all duration-300 hover:shadow-xl cursor-pointer  ">
                    <Img fluid={fluid}  />
                    <div className="caseStudies__textContainer p-6 bg-white ">
                        <div className="ml-1">
                            <h4 className="font-medium">A to B Tyres</h4>
                            <p className="overflow-ellipsis mt-4">
                                Creating a presence for a global marketplace that attracts ultra high networth individuals & companies.
                            </p>
                        </div>
                        <div className="mt-4 flex flex-wrap">
                            {cardOptions.map(data => (
                                data === "Favourite" ?
                                    <button className="text-gray-900 yellow-bg px-2 mt-1 ml-1 " key={data}>
                                        <a href="#" className="p-sm"> {data}</a>
                                    </button>
                                    :
                                    <button className="caseStudies__option text-gray-500 light-gray-bg px-2 mt-1 ml-1  border-2 border-coolGray-500 transition duration-500 ease-in-out " key={data}>
                                        <a href="#" className="p-sm"> {data}</a>
                                    </button>
                            ))}
                        </div>
                    </div>

                </div>
            {/* </Link> */}
        </div>
    )
}

export default Card
