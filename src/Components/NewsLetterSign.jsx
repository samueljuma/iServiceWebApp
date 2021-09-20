import React from "react";

function NewsLetterSign(){

    return (
        <div className= "rounded-sm flex p-2 justify-between bg-gray-400">
                <h3 className="font-bold mr-1 p-2">NEWSLETTER SIGN</h3>
                <input className="p-1 rounded-md" type="email" placeholder="Enter Your Email" />
                <button type="button" className="hover:bg-gray-700 hover:text-white bg-gray-300 ml-1 inline-flex rounded-md items-center justify-center p-2">Subscribe</button>
        
        </div>
    )
}

export default NewsLetterSign
