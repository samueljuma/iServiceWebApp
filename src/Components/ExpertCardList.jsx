import React from "react";
import ExpertCard from "./ExpertCard";
import expertList from '../expertList'
import '../Card.css'

function cardComponent (expert,i){
    return(
        <div>
            <ExpertCard 
                key = {expert.key}
                avatar = {expert.avatar}
                name = {expert.name}
                description ={expert.description}
                rating = {expert.rating}
            />
        </div>
    )
}


function ExpertCardList(){
    return (
        <div className="grid sm:grid-cols-4 m-5 grid-cols-2 gap-4">
            {expertList.map(cardComponent)}
        </div>
    )
}

export default ExpertCardList