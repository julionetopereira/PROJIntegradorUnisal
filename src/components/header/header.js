import React from "react"
import logo from '../img/logo_certo.png'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
<nav x-data="{ isOpen: false }" className="relative bg-white shadow  ">
    <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
            <div>
                <Link to='/'><img className="mx-auto h-16 w-auto" src={logo} alt="Your Company"/></Link>
            </div>

            <div className="flex lg:hidden">
                <button x-cloak  type="button" className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 " aria-label="toggle menu">
                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
            
                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <div x-cloak   className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
                <Link id="diferente" className="mx-20 text-sm text-blue-500 transition-colors duration-300 transform hover:text-gray-700 " to='/'>Home</Link>
                <a className="mx-20 text-sm text-gray-700 transition-colors duration-300 transform hover:text-blue-500 " href="#">Quem somos</a>
                <a className="mx-20 text-sm text-gray-700 transition-colors duration-300 transform hover:text-blue-500 " href="#">Voluntários</a>
                <a className="mx-20 text-sm text-gray-700 transition-colors duration-300 transform hover:text-blue-500 " href="#">Contato</a>
                <a className="mx-20 text-sm text-gray-700 transition-colors duration-300 transform hover:text-blue-500 " href="#">Perfil</a>
            </div>

           
        </div>
    </div>
</nav>)
}

export default Navbar
