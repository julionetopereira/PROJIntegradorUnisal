import React, {Fragment} from "react";
import LoginForm from "../../components/form/form"
import Navbar from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Chatbot from "../chatbot/chatbot";

const Login = () => {
    return(
    <Fragment>
        <Navbar/>
        <LoginForm/>
        <Chatbot/>
        <Footer/>
    </Fragment>

)
}


export default Login