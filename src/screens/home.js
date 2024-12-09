import React, {Fragment} from "react";
import Navbar from "../components/header/header";
import Footer from "../components/footer/footer";
import img1 from '../components/img/img1.png'
import img2 from '../components/img/img2.png'
import {Link} from 'react-router-dom'
import Chatbot from "./chatbot/chatbot";


const Home = () => {
    return(
    <Fragment>
        <Navbar/>
            <div className="flex overflow-hidden pt-20 pb-24 md:ml-20 md:mr-10">
                <div className=" w-1/2 items-center">
                    <h1 className="invisible sm:visible font-sans sm:text-9xl lg:text-9xl text-gray-200 font-bold ml-28 mt-14">We are <br/> what we <br/>do<span className="text-black lg:text-7xl">.</span></h1>
                    <Link to='/register'><button id="btn-home" className="w-1/2 md:text-lg font-bold md:ml-40 md:mt-24 tracking-wide transition-colors duration-300 transform bg-white rounded hover:bg-sky-100 focus:outline-none focus:bg-sky-100">
                  Register now 
              </button></Link>
                </div>
                <div className="hidden lg:block lg:w-1/2 ml-20">
                    <img className="z-0 imagem1 " src={img1}/>
                    <img className="z-1 imagem ml-24" src={img2}/>
                </div>

                <Chatbot/>
            </div>
        <Footer/>
    </Fragment>

)
}


export default Home