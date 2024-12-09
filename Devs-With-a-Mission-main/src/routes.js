import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './screens/home/login.js'
import Register from './screens/register/register.js'
import UserProfile from './screens/userProfile/userProfile.js'
import Voluntarios from './screens/voluntarios/voluntarios.js'

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/profile' element={<UserProfile/>}/>
            <Route path='/voluntarios' element={<Voluntarios/>}/>

        </Routes>
    </BrowserRouter>
)

export default Rotas
