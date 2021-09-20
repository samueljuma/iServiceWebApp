import React from "react";

function Background(props){
    return(
        
        <div
        style ={{
        'backgroundImage': `url(${props.avatar})`
        }}
        className="h-60 bg-blue bg-cover">
        </div>
        
    )
}

export default Background