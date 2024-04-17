import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/home';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Login from '../pages/login';
import Register from '../pages/register';
import Starttrade from '../pages/starttrade';
import Trade from '../pages/trade';

function Router () {
    return (
        <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} /> 
        <Route path='/signin' element={<Signin/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/trade' element={<Trade/>} />
        <Route path='/starttrade' element={<Starttrade/>} />
        
        </Routes>
    </div>
  )
}

export default Router
