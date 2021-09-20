import React from 'react'
import NewsLetterSign from './NewsLetterSign'
import SocialMediaFollow from './SocialMediaFollow'

function Footer(){
    return (
        <footer className='mt-3 p-1 bg-gray-200 text-center bottom-0 w-full flex justify-center'>
            <NewsLetterSign />
            <SocialMediaFollow /> 
        </footer>  
    
    )
}

export default Footer