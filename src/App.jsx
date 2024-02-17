import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signin from './pages/Signin';
import Signout from './pages/Signout'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Profile from './pages/Profile'; 

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Sign-in' element={<Signin/>}></Route>
    <Route path='/Sign-up' element={<Signout/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Profile' element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
