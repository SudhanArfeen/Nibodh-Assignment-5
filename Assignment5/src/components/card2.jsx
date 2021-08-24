import React from 'react';
import Card from 'C:/My new react app/nature/src/components/Component1/cards.jsx';
let array=
    [
        {
            src: "https://picsum.photos/200/300",           
            title:"NOISE POLLUTION",
            desc:"Noise pollution is generally defined as regular exposure to elevated sound levels that may lead to adverse effects in humans or other living organisms. According to the World Health Organization, sound levels less than 70 dB are not damaging to living organisms, regardless of how long or consistent the exposure is. Exposure for more than 8 hours to constant noise beyond 85 dB may be hazardous",
            val:50
        },
        {
            src: "https://picsum.photos/200/300",            
            title:"SOIL POLLUTION ",
            desc:"Soil pollution is defined as the presence of toxic chemicals (pollutants or contaminants) in soil, in high enough concentrations to pose a risk to human health and/or the ecosystem. In the case of contaminants which occur naturally in soil, even when their levels are not high enough to pose a risk, soil pollution is still said to occur if the levels of the contaminants in soil exceed the levels that should naturally be present.",
            val:18
        },
        {
            src: "https://picsum.photos/200/300",
            title:"WATER POLLUTION",
            desc:"The world’s water resources are under increasing threat from the impacts of climate change, population growth, and pollution. As the global population grows, a persistent challenge is how to access enough water to meet humanity’s needs while also preserving the integrity of aquatic ecosystems.",
            val:90
        }
    ]

export default function card2() {
    return (
        <div className="card3">
            <div className="card-heading2 pt-5">
                <h1 className="text-uppercase text-center display-6 text-black" > <strong>  VARIOUS TYPES OF POLLUTION  </strong></h1>  
            </div>
            <div className="d-flex justify-content-center">
                <span className="card-span" ></span>
            </div>
            <div className="card-para-2 text-center" >
            
Pollution is the introduction of harmful materials into the environment. These harmful materials are called pollutants. Pollutants can be natural, such as volcanic ash. They can also be created by human activity, such as trash or runoff produced by factories. Pollutants damage the quality of air, water, and land.
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div style={{fontSize:"14px"}} className="col-12">
                    
                    <div  className="d-flex justify-content-evenly">
                        {
                            array.map(data=>{
                                return(
                                <Card src={data.src} title={data.title} desc={data.desc} val={data.val} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}