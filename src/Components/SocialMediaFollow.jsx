import React from 'react'
import { 
    faFacebook,
    faTwitter,
    faInstagram
 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialMediaFollow (){

    return (
        <div className= " rounded-sm ml-2 flex p-2 justify-between bg-gray-400">
                <h3 className="font-bold p-2">CONNECT US</h3>
                
                <div className="p-2 text-xl">
                    <a href="facebook" className="p-1" >
                    <FontAwesomeIcon
                            icon = {faFacebook}
                    />
                    </a>
                    <a href="twitter"  className="p-1" >
                    <FontAwesomeIcon
                            icon = {faTwitter}
                    />
                    </a>
                    <a href="instagram"  className="p-1" >
                    <FontAwesomeIcon
                            icon = {faInstagram}
                    />
                    </a>
            </div>

        </div>
    )
}
export default SocialMediaFollow
