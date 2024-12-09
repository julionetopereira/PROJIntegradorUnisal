import React from "react"
import logo from "../img/logo_certo.png"


function Footer() {
    return (
      <>
        <footer  className="bg-white ">
    <div className="container px-6 py-8 mx-auto">
        <div className="text-center">
        
        <img className="mx-auto h-16 w-auto" src={logo} alt="Your Company"/>
           
        </div>
        

        <hr className="my-8 border-gray-400" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-800">© Copyright 2021. All Rights Reserved.</p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
                <a href="#" className="mx-2 text-sm text-gray-800 transition-colors duration-300 hover:text-gray-500" aria-label="Reddit"> Teams </a>

                <a href="#" className="mx-2 text-sm text-gray-800 transition-colors duration-300 hover:text-gray-500" aria-label="Reddit"> Privacy </a>

                <a href="#" className="mx-2 text-sm text-gray-800 transition-colors duration-300 hover:text-gray-500" aria-label="Reddit"> Cookies </a>
            </div>
        </div>
    </div>
</footer>
        
      </>
    )
  }
  

export default Footer