import React from 'react'
import Button from "./Button"
const PageEnder = ({heading,subHeading,btnText1, btnText2}) => {
    return (
        <section >
            <div className="mx-auto max-md container-ez text-center ">
                <h2 className="font-semibold">
                 {heading}
                </h2>
                <p className='p-lg mt-4'>{subHeading}</p>
                <div className="flex flex-col justify-center items-center md:flex-row mt-7">
                    <div >
                        <Button text={btnText1}/>
                    </div>
                    <div className="mt-4 md:ml-8 md:mt-0">
                        <Button text={btnText2} btn="btn-lg" modify="border-dark hover-opacity-down fill-transparent"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageEnder
