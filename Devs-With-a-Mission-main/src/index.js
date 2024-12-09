import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './screens/home/login.js'
import Register from './screens/register/register.js'
import reportWebVitals from './reportWebVitals';
import UserProfile from './screens/userProfile/userProfile.js';
import Voluntarios from './screens/voluntarios/voluntarios.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/voluntarios' element={<Voluntarios/>}/>


    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
