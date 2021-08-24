import React from 'react'
import Img from "../../resources/images/exp1.jpg"
export default function card1() {
    return (
        <div>
            <br></br>
         <div className="row">
           <div className="col-6 custom-card-img">
              <img src={Img} alt="" className="img-fluid" /> 
               </div>  
           <div className="col-6" style={{backgroundColor:"aqua"}}>
         <div className="row">
<div className="col-12">
    <h1>OUR MISSION</h1>
</div>
<div className="col-12">
    <p>Change starts with action. Better yet, an action that affects the world around you. A Billion Acts of Green are happening across the planet. From students in classrooms to organizers in their communities to officials in government there are ways for anyone of any background to make a difference. Start small and go big — or start big and stay big. Either way, keep coming back, keep taking action and join the movement to change the world.....<b>Read More...</b></p>
</div>
<div className="col-12">

    <div className="btn"></div>
    <button className="btn btn-outline-success custom-card-btn" >JOIN NOW</button>
</div>



         </div>


           </div>
             </div>   
        </div>
    )
}