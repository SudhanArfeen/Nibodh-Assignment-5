import React from 'react'
import logo from "../../resources/images/logo.webp"
export default function Header1() {
    return (
        <div>
            {/* < img src= {logo} alt="" className="custom-logo img-thumbnail"/> */}

            <div className="row">
                <div className="col-12 text-center">
                    < img src= {logo} alt="" className="custom-logo-misc img-thumbnail"/></div>
<div className="col-12">
    <h1 className="custom-misc-h1-1 text-secondary text-center"><span>346,000</span> Supporters around the World
    </h1>
</div>
               
                   <span className="line2"></span>
                
            </div>
        </div>
    )
}
