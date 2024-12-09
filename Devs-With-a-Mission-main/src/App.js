import React,{Fragment} from "react"
import { Route } from "react-router-dom";
import Rotas from "./routes";
import Login from './screens/home/login'
import Register from "./screens/register/register";
import Home from "./screens/home";

const App = ()=> (
<Fragment>
    <Home/>
</Fragment>
)


export default App;