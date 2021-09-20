import React from 'react'

function Header(){
    return (
        <nav className="bg-gray-600 flex p-3 justify-between items-center">

                <a href="iService" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">IService</a>

                <a href="post" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Post A Task</a>

                <a href="expert" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Become an Expert</a>

                <a href="task" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Find Tasks</a>

                <a href="how" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">How It Works</a>

                <a href="login" className="bg-gray-800 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</a>
    
            
        </nav>
    )
}

export default Header