import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import Starttrade from '../pages/start-trade';
import Research from '../pages/research';
import Trade from '../pages/trade';
import Learn from '../pages/learn';
import Portfolio from '../pages/portfolio';

function Router () {
    return (
        <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/research' element={<Research/>} />
        <Route path='/starttrade' element={<Starttrade/>} />
        <Route path='/trade' element={<Trade/>} />
        <Route path='/learn' element={<Learn/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        
        </Routes>
    </div>
  )
}

export default Router
