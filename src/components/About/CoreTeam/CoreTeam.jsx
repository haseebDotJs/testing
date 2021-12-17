import React from 'react'
import Card from "./Card"
import { cardInfo } from "./CardInfo"


const CoreTeam = () => {
    console.log("cardInfo", cardInfo[0].name)
    return (
        <section className="coreTeam  light-bg">
            <div className="container-ez max-xl">
                <h2 className="font-semibold mb-5">Our core team</h2>
                <div className="grid lg:grid-cols-6  gap-4  ">
                    {
                        cardInfo.map((info, index) => (
                            <>
                                {index === 3 && <div className="col-span-1" />}
                                <div className="col-span-2">
                                    <Card name={info.name} position={info.position} details={info.details} image={info.image} />
                                </div>
                                {index === 4 && <div className="col-span-1" />}
                            </>

                        ))
                    }
                </div>
            </div>
        </section >
    )
}

export default CoreTeam
