import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NewPark from './components/NewPark'
import ThemePark from './components/ThemePark'

const App = () => {

  return (  
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/newpark" element={<NewPark />}/>
      <Route path="/themepark/:id" element={<ThemePark />}/>
    </Routes>
  )


}

export default App
