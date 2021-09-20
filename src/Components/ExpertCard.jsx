import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../Card.css'

function ExpertCard(props){
    return (
        <div className="border mb-2 rounded ">
           <div
                style ={{
                'backgroundImage': `url(${props.avatar})`
                }}
                className="h-40 bg-blue bg-cover">
           </div>
        
           <div className="p-1">
               <h3 className="font-bold text-xl mb-1"> 
                    {props.name}  
               </h3>
               <div className="font-bold mb-1">
                    {props.description}
               </div>
               <div className="flex">
                    <div  className="text-yellow-900 p-2">
                        <FontAwesomeIcon
                        icon = {faStar}
                        />
                    </div>
                    <div className ="p-2 font-bold">
                        { props.rating}
                    </div>
               </div>

           </div>
        </div>
    )
}

export default ExpertCard