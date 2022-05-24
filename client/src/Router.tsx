import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ="/" element = {<LandingPage/>}/>
            <Route element = {<NotFound/>}/>
                
            
            
        </Routes>
    </BrowserRouter>
  )
}
