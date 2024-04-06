import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/home';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Getstart from '../pages/getstart';
import Login from '../pages/login';
import Register from '../pages/register';

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
        <Route path='/getstart' element={<Getstart/>} />
        </Routes>
    </div>
  )
}

export default Router